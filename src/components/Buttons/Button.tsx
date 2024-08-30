import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { buttonProps } from "@/utils/interfaces/buttonProps";

const Button = ({ type, isSelected, onClick }: buttonProps) => {
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
