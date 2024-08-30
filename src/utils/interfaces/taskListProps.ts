import { Task } from "./Task";
export interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
