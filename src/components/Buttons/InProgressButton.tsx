import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface InProgressButtonProps {
  isSelected: boolean;
  onClick: () => void;
}

const InProgress = ({ isSelected, onClick }: InProgressButtonProps) => {
  return (
    <InProgressButton isSelected={isSelected} onClick={onClick}>
      In progress
    </InProgressButton>
  );
};

const InProgressButton = styled.button<{ isSelected: boolean }>`
  font-weight: ${theme.font.titleMedium.fontWeight};
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${({ isSelected }) =>
    isSelected ? theme.color.black : theme.color.gray60};
  margin-top: 6.9%;
  background: none;
  border: none;
  cursor: pointer;
`;

export default InProgress;
