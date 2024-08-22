import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface ApprovedButtonProps {
  isSelected: boolean;
  onClick: () => void;
}

const Approved = ({ isSelected, onClick }: ApprovedButtonProps) => {
  return (
    <ApprovedButton isSelected={isSelected} onClick={onClick}>
      Approved
    </ApprovedButton>
  );
};

const ApprovedButton = styled.button<{ isSelected: boolean }>`
  font-weight: ${theme.font.titleMedium.fontWeight};
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${({ isSelected }) =>
    isSelected ? theme.color.black : theme.color.gray50};
  margin-top: 6.9%;
  background: none;
  border: none;
  cursor: pointer;
`;

export default Approved;
