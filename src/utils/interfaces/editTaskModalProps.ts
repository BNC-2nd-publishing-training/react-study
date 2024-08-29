import { task } from "@/utils/interfaces/editTask";

export interface editTaskModalProps {
  initialTask: task;
  onClose: (task: task) => void;
}
