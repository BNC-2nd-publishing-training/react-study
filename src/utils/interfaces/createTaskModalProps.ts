import { task } from "@/utils/interfaces/createTask";

export interface createTaskModalProps {
  onClose: (task: task) => void;
}
