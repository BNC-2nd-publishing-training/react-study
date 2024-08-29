import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { CloseBtn } from "@/assets/images";
import SelectBox from "../selectbox";
import { Status } from "../constants";

interface DefaultModalProps {
  closeModal: () => void;
  onAddTask: (title: string, status: Status) => void;
}

const DefaultModal = ({ closeModal,onAddTask }: DefaultModalProps) => {
  const [selectedOption, setSelectedOption] = useState<
    Status | "Task의 상태를 선택해주세요"
  >("Task의 상태를 선택해주세요");
  const options: (Status | "")[] = [
    "",
    "InReview",
    "InProgress",
    "Approved",
    "Waiting",
  ];
  const [title, setTitle] = useState("");
  

  const handleSelectChange = (selectedOption: { value: string } | null) => {
    if (selectedOption && options.includes(selectedOption.value as Status)) {
      setSelectedOption(selectedOption.value as Status);
    } else {
      setSelectedOption("Task의 상태를 선택해주세요");
    }
  };

  const handleAddTask = () => {
    if (title && selectedOption !== "Task의 상태를 선택해주세요") {
      onAddTask(title, selectedOption as Status);
      closeModal();
    } else {
      alert("제목과 상태를 모두 입력해주세요!");
    }
  };


  return (
    <Container>
      <ModalBox>
        <CloseButton onClick={closeModal} aria-label="닫기">
          <img src={CloseBtn} alt="Close" />
        </CloseButton>
        <p>Create Task</p>
        <TaskInput
          placeholder="Task 제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <SelectBox
          options={options}
          value={selectedOption || ""}
          onChange={handleSelectChange}
        />
        <TaskAddButton onClick={handleAddTask}  aria-label="Task추가">
          Task 추가하기
        </TaskAddButton>
      </ModalBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  width: 630px;
  height: 645px;
  background-color: ${theme.color.white};
  border-radius: 10px;
  p {
    font-size: ${theme.font.titleLarge.fontSize};
    font-weight: ${theme.font.titleLarge.fontWeight};
    line-height: ${theme.font.titleLarge.lineHeight};
    display: flex;
    justify-content: center;
  }
`;

const CloseButton = styled.button`
  img {
    margin-top: 26px;
    margin-left: 576px;
  }
  background: none;
  border: none;
`;

const TaskInput = styled.textarea`
  margin-top: 40px;
  width: 480px;
  height: 130px;
  border-radius: 6px;
  margin-left: 75px;
  outline: none;
  border: 1px solid rgba(205, 205, 205, 1);
  padding: 14px 16px;
  color: ${theme.color.black};
  ::placeholder {
    color: ${theme.color.gray40};
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};
    line-height: ${theme.font.textMedium.lineHeight};
  }
`;

const TaskAddButton = styled.button`
  width: 480px;
  height: 50px;
  background-color: ${theme.color.primary20};
  color: ${theme.color.white};
  font-size: ${theme.font.titleMedium.fontSize};
  font-weight: ${theme.font.titleMedium.fontWeight};
  line-height: ${theme.font.titleMedium.lineHeight};
  border-radius: 4px;
  margin-top: 200px;
  margin-left: 75px;
  border: none;
  cursor: pointer;
`;

export default DefaultModal;
