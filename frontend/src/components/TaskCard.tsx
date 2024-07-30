import React from "react";
import { useDrag } from "react-dnd";
import { ClockIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Task } from "@/contexts/TaskContext";

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
}

const timeAgo = (date: string) => {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  );
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `${interval} yrs ago`;
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval} months ago`;
  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `${interval} days ago`;
  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${interval} hr${interval > 1 ? "s" : ""} ago`;
  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${interval} min${interval > 1 ? "s" : ""} ago`;
  return `${seconds} sec${seconds > 1 ? "s" : ""} ago`;
};

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
              ? "bg-red-400 text-white"
              : task.priority === "Medium"
              ? "bg-orange-400 text-white"
              : "bg-green-500 text-white"
          } rounded`}
        >
          {task.priority}
        </span>
      </div>
      <p className="text-[#797979] mt-2 overflow-hidden whitespace-nowrap text-ellipsis">
        {task.description}
      </p>
      <div className="flex font-medium justify-between items-center mt-3">
        <div className="flex items-center mt-2 text-[#606060]">
          <ClockIcon className="h-5 w-5 text-gray-500" />
          <p className="text-[#797979] ml-1 mb-2  mt-2">{timeAgo(task.date)}</p>
        </div>
        <button
          onClick={() => onDelete(task._id)}
          className="absolute bottom-4 right-4 flex items-center text-red-500 hover:bg-red-200 px-1 pl-1 pt-1 rounded-md"
        >
          <TrashIcon className="h-5 w-5 mb-2" />
        </button>
      </div>
    </div>
  );
};
