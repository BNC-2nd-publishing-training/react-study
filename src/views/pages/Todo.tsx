import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import NewButton from "@/components/Buttons/AddNewButton";
import CreateTaskModal from "@/components/Modal/CreateModal";
import EditTaskModal from "@/components/Modal/EditTaskModal";
import Checkbox from "@/components/Input/TodoInput";
import All from "@/components/Buttons/AllButton";
import Approved from "@/components/Buttons/Approved";
import InReview from "@/components/Buttons/InReviewButton";
import InProgress from "@/components/Buttons/InProgressButton";
import Badge from "@/components/TagUI/Badge";

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
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextId, setNextId] = useState(1);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>("All");

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
    setIsCreateModalOpen(false);
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
    setIsEditModalOpen(false);
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
      return task.tag?.label !== "Waiting";
    }
    return task.tag?.label === selectedTag;
  });

  const waitingTasks = tasks.filter((task) => task.tag?.label === "Waiting");

  const totalTasksCount = filteredTasks.length + waitingTasks.length;

  return (
    <>
      <ButtonContainer>
        <Badge count={totalTasksCount} />
        <All
          isSelected={selectedTag === "All"}
          onClick={() => handleButtonClick("All")}
        />
        <InReview
          isSelected={selectedTag === "In review"}
          onClick={() => handleButtonClick("In review")}
        />
        <Approved
          isSelected={selectedTag === "Approved"}
          onClick={() => handleButtonClick("Approved")}
        />
        <InProgress
          isSelected={selectedTag === "In progress"}
          onClick={() => handleButtonClick("In progress")}
        />
      </ButtonContainer>
      <Text1>Today Task</Text1>
      <NewButton onClick={openCreateModal}>Add New Task</NewButton>
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
        {waitingTasks.map((task) => (
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 33px;
  margin-top: 2%;
  width: 80%;
  margin-left: 8vw;
  position: relative;
`;

const Text1 = styled.div`
  position: absolute;
  top: 8%;
  left: 37%;
  color: ${theme.color.black};
  font-size: ${theme.font.titleLarge.fontSize};
  font-weight: ${theme.font.titleLarge.fontWeight};
`;

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

const TaskTitle = styled.div`
  cursor: pointer;
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
  margin-left: 8px;
`;
