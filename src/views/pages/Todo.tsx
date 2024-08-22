import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import NewButton from "@/components/Buttons/AddNewButton";
import CreateTaskModal from "@/components/Modal/CreateTaskModal";
import Tags from "@/components/TagUI/Tags";
import Checkbox from "@/components/Input/TodoInput";

interface Task {
  title: string;
  tag: string | null;
  isChecked: boolean;
}

export default function Todo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (task: Task) => {
    if (task.title) {
      setTasks((prevTasks) => [...prevTasks, { ...task, isChecked: false }]);
    }
    setIsModalOpen(false);
  };

  const toggleCheckbox = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  return (
    <>
      <Tags />
      <Text1>Today Task</Text1>
      <NewButton onClick={openModal}>Add New Task</NewButton>
      <Text2>Upcoming Task</Text2>
      {isModalOpen && <CreateTaskModal onClose={closeModal} />}
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={index}>
            <Checkbox
              isChecked={task.isChecked}
              onChange={() => toggleCheckbox(index)}
            />{" "}
            {task.title} {task.tag && <Tag>{task.tag}</Tag>}
          </TaskItem>
        ))}
      </TaskList>
    </>
  );
}

const Text1 = styled.div`
  position: absolute;
  top: 14.5%;
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

const TaskItem = styled.div`
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.black};
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Tag = styled.span`
  background-color: ${theme.color.gray20};
  color: ${theme.color.black};
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 8px;
  font-size: ${theme.font.titleMedium.fontSize};
`;
