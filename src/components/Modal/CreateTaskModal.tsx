import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { MdOutlineClose as CloseIcon } from "react-icons/md";
import CreateTask from "@/components/Input/TaskInput";
import TagDropdown from "@/components/Input/TagSelect";
import NewButton from "@/components/Buttons/AddButton";
import { task } from "@/utils/interfaces/createTask";
import { createTaskModalProps } from "@/utils/interfaces/createTaskModalProps";

const CreateTaskModal = ({ onClose }: createTaskModalProps) => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<task["tag"] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleTagSelect = (tag: string) => {
    const tagOptions = {
      "In review": {
        label: "In review",
        bgColor: theme.color.green10,
        textColor: theme.color.green30,
      },
      "In progress": {
        label: "In progress",
        bgColor: theme.color.red10,
        textColor: theme.color.red30,
      },
      Approved: {
        label: "Approved",
        bgColor: theme.color.primary10,
        textColor: theme.color.primary20,
      },
      Waiting: {
        label: "Waiting",
        bgColor: theme.color.gray10,
        textColor: theme.color.gray60,
      },
    };

    setSelectedTag(tagOptions[tag] || null);
  };

  const handleSubmit = () => {
    if (taskTitle.trim() && selectedTag) {
      onClose({ title: taskTitle.trim(), tag: selectedTag });
      setTaskTitle("");
      setSelectedTag(null);
    } else {
      if (!taskTitle.trim() && !selectedTag) {
        alert("작업 제목과 태그를 입력해주세요.");
      } else if (!taskTitle.trim()) {
        alert("작업 제목을 입력해주세요.");
      } else if (!selectedTag) {
        alert("태그를 선택해주세요.");
      }
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <TextInput>Create Task</TextInput>
        <CloseButton
          onClick={() => onClose({ title: "", tag: null })}
          type="button"
          aria-label="닫기">
          <CloseIcon size={24} />
        </CloseButton>
        <Body>
          <CreateTask
            placeholder="Task 제목을 입력해주세요"
            value={taskTitle}
            onChange={handleChange}
          />
          <TagDropdown
            onSelect={handleTagSelect}
            initialTag={selectedTag?.label}
          />
          <NewButton onClick={handleSubmit}>Task 추가하기</NewButton>
        </Body>
      </ModalContent>
    </ModalContainer>
  );
};

const TextInput = styled.h1`
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
  position: fixed;
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
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default CreateTaskModal;
