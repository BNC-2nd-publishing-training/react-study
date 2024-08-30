import { Task } from "./Task";
export interface TodoContentProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditModalOpen: boolean;
  selectedTask: Task | null;
  selectedTag: string;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
  nextId: number;
  setNextId: React.Dispatch<React.SetStateAction<number>>;
}
