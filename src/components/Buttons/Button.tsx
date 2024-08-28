import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface ButtonProps {
  type: string;
  isSelected: boolean;
  onClick: () => void;
}

const Button = ({ type, isSelected, onClick }: ButtonProps) => {
  return (
    <StyledButton
      isSelected={isSelected}
      onClick={onClick}
      type="button"
      aria-labe="태그 버튼">
      {type}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ isSelected: boolean }>`
  font-size: ${theme.font.textMedium};
  font-weight: ${theme.font.textSmall.fontWeight};
  color: ${theme.color.gray50};
  margin-bottom: 3px;
  border-bottom: ${({ isSelected }) =>
    isSelected ? `1px solid ${theme.color.primary20}` : "none"};
`;

export default Button;
