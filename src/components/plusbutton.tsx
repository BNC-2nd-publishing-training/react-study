import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import plusIcon from '@iconify/icons-mdi/plus';
import Modal from './Modal';
import { theme } from '@/styles/theme';

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
`;

const PlusButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <PlusButtonStyled onClick={toggleModal}>
        <Icon icon={plusIcon} width="24px" height="24px" />
      </PlusButtonStyled>

      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default PlusButton;
