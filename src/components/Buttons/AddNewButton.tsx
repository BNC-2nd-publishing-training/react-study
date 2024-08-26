import styled from "@emotion/styled";
import { FaPlus } from "react-icons/fa";
import { theme } from "@/styles/theme";

interface FixedButtonProps {
  onClick: () => void;
}

export default function FixedButton({ onClick }: FixedButtonProps) {
  return (
    <StyledFixedButton onClick={onClick}>
      <FaPlus style={{ color: "white", fontSize: "20px" }} />
    </StyledFixedButton>
  );
}

const StyledFixedButton = styled.div`
  position: fixed;
  width: 52px;
  height: 51px;
  border-radius: 12px 0 12px 12px;
  margin: 11px 12px;
  background-color: ${theme.color.primary20};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  top: 8%;
  left: 60%;
  transform: translate(-50%, -50%);
`;
