import React, { useState } from "react";
import { Task } from "@/utils/interfaces/Task";
import TodoContent from "@/components/TaskList/TodoContentTaskList";

export default function Todo() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextId, setNextId] = useState<number>(1);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("All");

  return (
    <TodoContent
      tasks={tasks}
      setTasks={setTasks}
      setSelectedTask={setSelectedTask}
      setIsEditModalOpen={setIsEditModalOpen}
      isCreateModalOpen={isCreateModalOpen}
      setIsCreateModalOpen={setIsCreateModalOpen}
      isEditModalOpen={isEditModalOpen}
      selectedTask={selectedTask}
      selectedTag={selectedTag}
      setSelectedTag={setSelectedTag}
      nextId={nextId}
      setNextId={setNextId}
    />
  );
}
