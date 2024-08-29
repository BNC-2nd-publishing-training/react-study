import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { FaPlus } from "react-icons/fa";
import { fixedButtonProps } from "@/utils/interfaces/fixedButtonProps";

const FixedButton = ({ onClick }: fixedButtonProps) => {
  return (
    <StyledFixedButton
      onClick={onClick}
      type="button"
      aria-label="모달 창에서 task추가하기">
      <FaPlus />
    </StyledFixedButton>
  );
};

const StyledFixedButton = styled.button`
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
  border: none;
  outline: none;

  svg {
    color: white;
    font-size: 20px;
  }
`;

export default FixedButton;
