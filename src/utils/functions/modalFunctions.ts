import { Task } from "@/utils/interfaces/Task";

const CreateModalSetter = (
  isCreateModalOpen: boolean,
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsCreateModalOpen(!isCreateModalOpen);
};

const EditModalSetter = (
  isEditModalOpen: boolean,
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsEditModalOpen(!isEditModalOpen);
};

const openCreateModal = (
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsCreateModalOpen(true);
};

const closeCreateModal = (
  task: Task,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  nextId: number,
  setNextId: React.Dispatch<React.SetStateAction<number>>,
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (task.title) {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...task, id: nextId, isChecked: false },
    ]);
    setNextId(nextId + 1);
  }
  CreateModalSetter(true, setIsCreateModalOpen);
};

const openEditModal = (
  task: Task,
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>,
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setSelectedTask(task);
  setIsEditModalOpen(true);
};

const closeEditModal = (
  updatedTask: Task,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>
) => {
  if (updatedTask.title === "") {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== updatedTask.id)
    );
  } else {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  }
  EditModalSetter(true, setIsEditModalOpen);
  setSelectedTask(null);
};

export {
  CreateModalSetter,
  EditModalSetter,
  openCreateModal,
  closeCreateModal,
  openEditModal,
  closeEditModal,
};
