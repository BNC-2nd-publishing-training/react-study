import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import plusIcon from '@iconify/icons-mdi/plus';
import Modal from '@/components/Modal';
import { theme } from '@/styles/theme';
import { TagType } from '@/utils/interfaces/tag.types';

const PlusButtonStyled = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${theme.color.primary20}; 
  color: white;
  border: none;
  border-radius: 10px 0px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
`;

interface PlusButtonProps {
  onAddTask: (title: string, status: TagType) => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ onAddTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <PlusButtonStyled onClick={toggleModal}>
        <Icon icon={plusIcon} width="24px" height="24px" />
      </PlusButtonStyled>

      <Modal isOpen={isModalOpen} onClose={toggleModal} onAddTask={onAddTask} />
    </div>
  );
};

export default PlusButton;
