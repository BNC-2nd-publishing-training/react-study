import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import NewButton from "@/components/Buttons/AddNewButton";
import CreateTaskModal from "@/components/Modal/CreateTaskModal";
import Checkbox from "@/components/Input/TodoInput";
import All from "@/components/Buttons/All";
import Approved from "@/components/Buttons/Approved";
import InReview from "@/components/Buttons/InReviewButton";
import InProgress from "@/components/Buttons/InProgressButton";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextId, setNextId] = useState(1);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (task: Task) => {
    if (task.title) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { ...task, id: nextId, isChecked: false },
      ]);
      setNextId(nextId + 1);
    }
    setIsModalOpen(false);
  };

  const toggleCheckbox = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton((prevSelectedButton) =>
      prevSelectedButton === buttonName ? null : buttonName
    );
  };

  return (
    <>
      <ButtonContainer>
        <All
          isSelected={selectedButton === "All"}
          onClick={() => handleButtonClick("All")}
        />
        <InReview
          isSelected={selectedButton === "InReview"}
          onClick={() => handleButtonClick("InReview")}
        />
        <Approved
          isSelected={selectedButton === "Approved"}
          onClick={() => handleButtonClick("Approved")}
        />
        <InProgress
          isSelected={selectedButton === "InProgress"}
          onClick={() => handleButtonClick("InProgress")}
        />
      </ButtonContainer>
      <Text1>Today Task</Text1>
      <NewButton onClick={openModal}>Add New Task</NewButton>
      <Text2>Upcoming Task</Text2>
      {isModalOpen && <CreateTaskModal onClose={closeModal} />}
      <TaskList>
        {tasks
          .filter((task) => task.tag?.label !== "Waiting")
          .map((task) => (
            <TaskItem key={task.id}>
              <Checkbox
                isChecked={task.isChecked}
                onChange={() => toggleCheckbox(task.id)}
              />
              {task.title}{" "}
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
              {task.title}{" "}
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
