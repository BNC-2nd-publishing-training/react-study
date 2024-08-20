import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

interface DefaultButtonProps {
  width?: string;
  variant?: 'default' | 'red';
  children: React.ReactNode;
}

const StyledDefaultButton = styled.button<{ width?: string; variant?: 'default' | 'red' }>`
  background-color: ${props => props.variant === 'red' ? theme.color.red30 : theme.color.primary20};
  color: white;
  width: ${props => props.width || '100%'};
  height: 50px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${theme.font.titleMedium};
`;

const DefaultButton: React.FC<DefaultButtonProps> = ({ width, variant = 'default', children }) => {
  return (
    <StyledDefaultButton width={width} variant={variant}>
      {children}
    </StyledDefaultButton>
  );
};

export default DefaultButton;