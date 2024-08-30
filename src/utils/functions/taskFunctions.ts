import { Task } from "@/utils/interfaces/Task";

export const openEditModal = (
  task: Task,
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>,
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setSelectedTask(task);
  setIsEditModalOpen(true);
};

export const toggleCheckbox = (
  id: number,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task
    )
  );
};

export const handleButtonClick = (
  tag: string,
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>
) => {
  setSelectedTag(tag);
};

export const filterTasks = (tasks: Task[], selectedTag: string) => {
  if (selectedTag === "All") {
    return tasks;
  }
  return tasks.filter((task) => task.tag?.label === selectedTag);
};
