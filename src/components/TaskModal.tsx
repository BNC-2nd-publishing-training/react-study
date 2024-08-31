import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { TagType } from '@/utils/interfaces/tag.types';
import { Icon } from '@iconify/react';
import closeIcon from '@iconify/icons-mdi/close';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskTitle: string;
  taskStatus: TagType;
  onEdit: (newTitle: string, newStatus: TagType) => void;
  onDelete: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, taskTitle, taskStatus, onEdit, onDelete }) => {
  const [newTitle, setNewTitle] = useState(taskTitle);
  const [newStatus, setNewStatus] = useState<TagType>(taskStatus);

  const handleEdit = () => {
    onEdit(newTitle, newStatus);
    onClose(); 
  };

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewStatus(e.target.value as TagType);
  };

  if (!isOpen) return null;

  return (
    <>
      <OverlayStyled isOpen={isOpen} onClick={onClose} />
      <ModalStyled isOpen={isOpen}>
        <CloseButtonStyled onClick={onClose}>
          <Icon icon={closeIcon} width="24px" height="24px" />
        </CloseButtonStyled>
        <TitleStyled>Edit Task</TitleStyled>
        <InputStyled 
          type="text" 
          value={newTitle} 
          onChange={(e) => setNewTitle(e.target.value)} 
        />
        <SelectStyled value={newStatus} onChange={handleStatusChange}>
          <option value="In review">In review</option>
          <option value="In progress">In progress</option>
          <option value="Approved">Approved</option>
          <option value="Waiting">Waiting</option>
        </SelectStyled>
        <ButtonWrapper>
          <ButtonDelete onClick={handleDelete}>Task 삭제하기</ButtonDelete>
          <ButtonEdit onClick={handleEdit}>Task 수정하기</ButtonEdit>
        </ButtonWrapper>
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
  z-index: 1000;
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
  z-index: 999;
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

const TitleStyled = styled.h2`
  font-size: 28px; 
  margin-bottom: 40px;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
`;

const Button = styled.button`
  width: 230px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

const ButtonEdit = styled(Button)`
  background-color: ${theme.color.primary20};
  color: white;
`;

const ButtonDelete = styled(Button)`
  background-color: ${theme.color.red30};
  color: white;
`;

export default TaskModal;
