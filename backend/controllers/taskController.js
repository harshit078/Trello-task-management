const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const { title, description, status, priority, deadline } = req.body;

  if (!title || !status) {
    return res.status(400).json({ error: "Title and Status are required" });
  }

  try {
    const newTask = new Task({
      user: req.user.id,
      title,
      description,
      status,
      priority,
      deadline,
    });

    const task = await newTask.save();
    res.status(201).json({ msg: "Task created successfully", task });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ date: -1 });
    res.status(200).json({ msg: "Tasks retrieved successfully", tasks });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateTask = async (req, res) => {
  const { title, description, status, priority, deadline } = req.body;

  try {
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "User not authorized" });
    }

    task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, status, priority, deadline } },
      { new: true }
    );

    res.status(200).json({ msg: "Task updated successfully", task });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "User not authorized" });
    }

    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: "Task removed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Server error: ${err.message}` });
  }
};
