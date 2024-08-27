import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface WaitingButtonProps {
  isSelected: boolean;
  onClick: () => void;
}

const Waiting = ({ onClick }: WaitingButtonProps) => {
  return <WaitingButton onClick={onClick}>Waiting</WaitingButton>;
};

const WaitingButton = styled.button<{ isSelected: boolean }>`
  font-weight: ${theme.font.titleMedium.fontWeight};
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.black};
  margin-top: 6.9%;
  background: none;
  border: none;
  cursor: pointer;
`;

export default Waiting;
