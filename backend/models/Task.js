const mongoose = require("mongoose");
const { isValidObjectId } = require("mongoose");

const TaskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
    validate: {
      validator: isValidObjectId,
      message: "Invalid User ID",
    },
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: [true, "Status is required"],
    enum: {
      values: ["To do", "In progress", "Under review", "Finished"],
      message:
        "Status must be one of the following: To do, In progress, Under review, Finished",
    },
  },
  priority: {
    type: String,
    enum: {
      values: ["Low", "Medium", "Urgent"],
      message: "Priority must be one of the following: Low, Medium, Urgent",
    },
    default: "Low",
  },
  deadline: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
