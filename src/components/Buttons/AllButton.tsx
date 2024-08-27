import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

interface AllButtonProps {
  isSelected: boolean;
  onClick: () => void;
}

const All = ({ isSelected, onClick }: AllButtonProps) => {
  return <AllButton onClick={onClick}>All</AllButton>;
};

const AllButton = styled.button<{ isSelected: boolean }>`
  font-size: ${theme.font.textMedium};
  font-weight: ${theme.font.textSmall.fontWeight};
  color: ${theme.color.gray50};
  margin-top: 7%;
  margin-left: 39%;
  background: none;
  border: none;
  cursor: pointer;
`;

export default All;
