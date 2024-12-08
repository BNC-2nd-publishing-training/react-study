import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Textarea from "../Textarea";
import Dropdown from "../Dropdown";
import Button from "../Button";

interface ModalProps {
  onClose: () => void;
  onAddTask: (label: string, status: string) => void;
  onEditTask: (label: string, status: string) => void;
  onDeleteTask: () => void;
  mode: "floatingButton" | "checkboxList";
  selectedTask?: { label: string; status: string };
}

const Modal = ({
  onClose,
  onAddTask,
  onEditTask,
  onDeleteTask,
  mode,
  selectedTask,
}: ModalProps) => {
  const [taskLabel, setTaskLabel] = useState(selectedTask?.label || "");
  const [status, setStatus] = useState(selectedTask?.status || "In review");

  const handleDropdownChange = (selectedOption: string) => {
    setStatus(selectedOption);
  };

  const handleAddTask = () => {
    if (taskLabel.trim()) {
      onAddTask(taskLabel, status);
      setTaskLabel("");
      onClose();
    }
  };

  const handleEditTask = () => {
    if (taskLabel.trim() && selectedTask) {
      onEditTask(taskLabel, status);
      setTaskLabel("");
      onClose();
    }
  };

  const handleDeleteTask = () => {
    if (selectedTask) {
      onDeleteTask();
      onClose();
    }
  };

  return (
    <Backdrop>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalContent>
          <ModalTitle>
            {mode === "floatingButton" ? "Create Task" : "Task Details"}
          </ModalTitle>
          <Textarea
            placeholder="Task 제목을 입력해주세요"
            value={taskLabel}
            onChange={(e) => setTaskLabel(e.target.value)}
          />
          <Dropdown
            placeholder="Task의 상태를 선택해주세요"
            options={["In review", "In progress", "Approved", "Waiting"]}
            onChange={handleDropdownChange}
          />
          <ButtonContainer>
            {mode === "floatingButton" ? (
              <Button onClick={handleAddTask}>Task 추가하기</Button>
            ) : (
              <>
                <Button
                  width="230px"
                  backgroundColor={theme.color.red30}
                  onClick={handleDeleteTask}
                >
                  삭제
                </Button>
                <Button width="230px" onClick={handleEditTask}>
                  수정
                </Button>
              </>
            )}
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </Backdrop>
  );
};

const ModalTitle = styled.span`
  font-size: ${theme.font.titleLarge.fontSize};
  font-weight: ${theme.font.titleLarge.fontWeight};
  line-height: ${theme.font.titleLarge.lineHeight};
  margin-bottom: 40px;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background-color: ${theme.color.white};
  width: 630px;
  height: 645px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 200px;
`;

export default Modal;
