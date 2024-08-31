import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import closeIcon from '@iconify/icons-mdi/close'; 
import { theme } from "@/styles/theme";
import { TagType } from '@/utils/interfaces/tag.types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (title: string, status: TagType) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAddTask }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<TagType>('In review');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value as TagType);
  };

  const handleAddTaskClick = () => {
    if (inputValue && selectedStatus) {
      onAddTask(inputValue, selectedStatus); 
      setInputValue(''); 
      setSelectedStatus('In review');
      onClose();
    }
  };

  return (
    <>
      <OverlayStyled isOpen={isOpen} onClick={onClose} />
      <ModalStyled isOpen={isOpen}>
        <CloseButtonStyled onClick={onClose}>
          <Icon icon={closeIcon} width="24px" height="24px" />
        </CloseButtonStyled>
        <TitleStyled>Create Task</TitleStyled>
        <InputStyled 
          type="text" 
          placeholder="Task 제목을 입력해주세요" 
          value={inputValue} 
          onChange={handleInputChange} 
        />
        <SelectStyled value={selectedStatus} onChange={handleSelectChange}>
          <option value="In review">In review</option>
          <option value="In progress">In progress</option>
          <option value="Approved">Approved</option>
          <option value="Waiting">Waiting</option>
        </SelectStyled>
        <AddTaskButtonStyled onClick={handleAddTaskClick}>
          Task 추가하기
        </AddTaskButtonStyled>
      </ModalStyled>
    </>
  );
};

const ModalStyled = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 630px;
  height: 645px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 50px;
  z-index: 1001; /* Ensure modal is on top of overlay */
  text-align: center;
`;

const OverlayStyled = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000; /* Ensure overlay is below the modal */
`;

const CloseButtonStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const InputStyled = styled.input`
  width: 480px;
  height: 130px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SelectStyled = styled.select`
  width: 480px;
  height: 42px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TitleStyled = styled.h2`
  font-size: 28px; 
  margin-bottom: 40px;
`;

const AddTaskButtonStyled = styled.button`
  width: 480px;
  height: 50px;
  background-color: ${theme.color.primary20};
  color: white; 
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 200px;
`;

export default Modal;
