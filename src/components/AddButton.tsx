import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import PlusIcon from '@/assets/icons/Plus';

const StyledAddButton = styled.button`
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.white};
  background-color: ${theme.color.primary20};
  width: 52px;
  height: 51px;
  padding: 11px 12px;
  border: none;
  border-radius: 12px 0 12px 12px;
  cursor: pointer;
  box-shadow: 0px 2px 10px 0px #623CE780;
`;

const AddButton: React.FC= () => {
  return <StyledAddButton><PlusIcon color="#fff" size={28} /></StyledAddButton>;
};

export default AddButton;