import { useDrop } from "react-dnd";
import { TaskCard } from "@/components/TaskCard";
import { Task } from "@/contexts/TaskContext";
import { PlusIcon, Bars3BottomRightIcon } from "@heroicons/react/24/outline";

interface TodoColumnProps {
  status: Task['status'];
  tasks: Task[];
  moveTask: (_id: string, status: Task['status']) => void;
  onAddNew: () => void;
  onDelete: (_id: string) => void;
}

export const TodoColumn: React.FC<TodoColumnProps> = ({ status, tasks, moveTask, onAddNew, onDelete }) => {

  const handleDelete = (id: string) => {
    onDelete(id);
  };


  const [, drop] = useDrop({
    accept: 'task',
    drop: (item: { _id: string }) => moveTask(item._id, status),
  });

  return (
    <div ref={drop as unknown as React.Ref<HTMLDivElement>} className="bg-white p-2 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl">{status}</h3>
        <Bars3BottomRightIcon className="h-6 w-6 rotate-180" />
      </div>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onDelete={handleDelete}/>
      ))}
      <button
        onClick={onAddNew}
        className="flex items-center justify-between p-2 w-full bg-[linear-gradient(180deg,_#3A3A3A_0%,_#20</Task>2020_100%)] text-white rounded-lg mt-2 shadow-md transition-colors duration-200"
      >
        Add new <span className="ml-2">
          <PlusIcon className="h-6 w-6" />
        </span>
      </button>
    </div>
  );
};
