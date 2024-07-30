import React from "react";
import { useDrag } from "react-dnd";
import { ClockIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Task } from "@/contexts/TaskContext";

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "task",
    item: { _id: task._id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag as unknown as React.Ref<HTMLDivElement>}
      className={`relative p-4 mb-4 bg-zinc-100 rounded-md border border-[#DEDEDE] ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-lg text-[#606060] cursor-pointer">
          {task.title}
        </h4>
        <span
          className={`inline-block px-2 py-1 text-xs font-semibold ${
            task.priority === "Urgent"
              ? "bg-[#FF6B6B] text-white"
              : task.priority === "Medium"
              ? "bg-[#FFA235] text-white"
              : "bg-[#0ECC5A] text-white"
          } rounded`}
        >
          {task.priority}
        </span>
      </div>
      <p className="text-[#797979] mt-2">{task.description}</p>
      <div className="flex font-medium justify-between items-center mt-3">
        <div className="flex items-center mt-2 text-[#606060]">
          <ClockIcon className="h-5 w-5 text-gray-500" />
        </div>
        {task.deadline && (
          <div className="flex items-center text-[#606060]">
            <span className="ml-1">
              {new Date(task.deadline).toLocaleDateString()}
            </span>
          </div>
        )}
        <button
          onClick={() => onDelete(task._id)}
          className="absolute bottom-4 right-4 flex items-center text-red-500 hover:underline"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
