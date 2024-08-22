import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { MdOutlineClose as CloseIcon } from "react-icons/md";
import CreateTask from "@/components/Input/TaskInput";
import TagDropdown from "@/components/Input/TagSelect";
import NewButton from "@/components/Buttons/AddButton";

interface Task {
  title: string;
  tag: string | null;
}

interface CreateTaskModalProps {
  onClose: (task: Task) => void;
}

export default function CreateTaskModal({ onClose }: CreateTaskModalProps) {
  const [taskTitle, setTaskTitle] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
    console.log("현재 입력값:", e.target.value);
  };

  const handleSubmit = () => {
    if (taskTitle.trim()) {
      onClose({ title: taskTitle.trim(), tag: selectedTag });
      setTaskTitle("");
    } else {
      alert("작업 제목을 입력해주세요.");
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <TextInput>Create Task</TextInput>
        <CloseButton onClick={() => onClose({ title: "", tag: null })}>
          <CloseIcon size={24} />
        </CloseButton>
        <Body>
          <CreateTask
            placeholder="Task 제목을 입력해주세요"
            value={taskTitle}
            onChange={handleChange}
          />
          <TagDropdown onSelect={setSelectedTag} />
          <NewButton onClick={handleSubmit}>Task 추가하기</NewButton>
        </Body>
      </ModalContent>
    </ModalContainer>
  );
}

const TextInput = styled.div`
  font-weight: ${theme.font.titleLarge.fontWeight};
  font-size: ${theme.font.titleLarge.fontSize};
  text-align: center;
  margin-top: 50px;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 630px;
  height: 645px;
  position: relative;
  z-index: 1001;
`;

const Body = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

const CloseButton = styled.button`
  color: black;
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;
