import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { CloseBtn } from "@/assets/images";
import SelectBox from "../selectbox";

interface DefaultModalProps {
  closeModal: () => void;
  addTask: (title: string, status: string) => void;
}

const DefaultModal = ({ closeModal, addTask }: DefaultModalProps) => {
  const [selectedOption, setSelectedOption] =
    useState("Task의 상태를 선택해주세요");

  const options = ["In review", "In progress", "Approved", "Waiting"];
  const [title, setTitle] = useState("");

  const handleSelectChange = (selectedOption: { value: string } | null) => {
    setSelectedOption(
      selectedOption ? selectedOption.value : "Task의 상태를 선택해주세요"
    );
  };

  const handleAddTask = () => {
    if (title && selectedOption !== "Task의 상태를 선택해주세요") {
      addTask(title, selectedOption);
      console.log("Task added:", title, selectedOption);
      closeModal(); 
    } else {
      console.log("Task not added - missing title or status");
    }
  };

  return (
    <Container>
      <ModalBox>
        <CloseButton onClick={closeModal}>
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
          value={selectedOption}
          onChange={handleSelectChange}
        />
        <TaskAddButton onClick={handleAddTask} aria-label='Task추가'>Task 추가하기</TaskAddButton>
      </ModalBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
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
