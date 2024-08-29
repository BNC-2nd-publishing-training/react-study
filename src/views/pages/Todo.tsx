import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import CreateTaskModal from "@/components/Modal/CreateTaskModal";
import EditTaskModal from "@/components/Modal/EditTaskModal";
import Checkbox from "@/components/Input/TodoInput";
import BadgeButtonGroup from "@/components/Buttons/BadgeButtonGroup";
import TodayTasksSection from "@/components/Buttons/AddButtonGroup";

interface Task {
  id: number;
  title: string;
  tag: {
    label: string;
    bgColor: string;
    textColor: string;
  } | null;
  isChecked: boolean;
}

export default function Todo() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextId, setNextId] = useState<number>(1);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const CreateModalSetter = () => {
    setIsCreateModalOpen(!isCreateModalOpen);
  };

  const EditModalSetter = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = (task: Task) => {
    if (task.title) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { ...task, id: nextId, isChecked: false },
      ]);
      setNextId(nextId + 1);
    }
    CreateModalSetter();
  };

  const openEditModal = (task: Task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const closeEditModal = (updatedTask: Task) => {
    if (updatedTask.title === "") {
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== updatedTask.id)
      );
    } else {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
    }
    EditModalSetter();
    setSelectedTask(null);
  };

  const toggleCheckbox = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const handleButtonClick = (tag: string) => {
    setSelectedTag(tag);
  };

  const filteredTasks = tasks.filter((task) => {
    if (selectedTag === "All") {
      return true;
    }
    return task.tag?.label === selectedTag;
  });

  const totalTasksCount = filteredTasks.length;

  return (
    <>
      <BadgeButtonGroup
        totalTasksCount={totalTasksCount}
        selectedTag={selectedTag}
        onButtonClick={handleButtonClick}
      />
      <TodayTasksSection onAddButtonClick={openCreateModal} />
      <Text2>Upcoming Task</Text2>
      {isCreateModalOpen && <CreateTaskModal onClose={closeCreateModal} />}
      {isEditModalOpen && selectedTask && (
        <EditTaskModal onClose={closeEditModal} initialTask={selectedTask} />
      )}
      <TaskList>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id}>
            <Checkbox
              isChecked={task.isChecked}
              onChange={() => toggleCheckbox(task.id)}
            />
            <TaskTitle onClick={() => openEditModal(task)}>
              {task.title}
            </TaskTitle>
            {task.tag && (
              <Tag bgColor={task.tag.bgColor} textColor={task.tag.textColor}>
                {task.tag.label}
              </Tag>
            )}
          </TaskItem>
        ))}
      </TaskList>
      <UpcomingTaskList>
        {tasks
          .filter((task) => task.tag?.label === "Waiting")
          .map((task) => (
            <TaskItem key={task.id}>
              <Checkbox
                isChecked={task.isChecked}
                onChange={() => toggleCheckbox(task.id)}
              />
              <TaskTitle onClick={() => openEditModal(task)}>
                {task.title}
              </TaskTitle>
              {task.tag && (
                <Tag bgColor={task.tag.bgColor} textColor={task.tag.textColor}>
                  {task.tag.label}
                </Tag>
              )}
            </TaskItem>
          ))}
      </UpcomingTaskList>
    </>
  );
}

const Text2 = styled.div`
  position: absolute;
  top: 60%;
  left: 37%;
  color: ${theme.color.gray60};
  font-size: ${theme.font.titleMedium.fontSize};
  font-weight: ${theme.font.titleMedium.fontWeight};
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 26%;
`;

const UpcomingTaskList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  width: 26%;
`;

const TaskItem = styled.div`
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.black};
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Tag = styled.div<{ bgColor: string; textColor: string }>`
  padding-top: 6px;
  border-radius: 14px;
  text-align: center;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  font-size: ${theme.font.textSmall.fontSize};
  font-weight: ${theme.font.textSmall.fontWeight};
  width: 75px;
  height: 28px;
  margin-left: auto;
`;

const TaskTitle = styled.div``;
