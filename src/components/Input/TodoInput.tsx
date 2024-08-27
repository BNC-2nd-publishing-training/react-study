import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { FaCheck } from "react-icons/fa";
const Checkbox = ({ isChecked, onChange }) => {
  return (
    <Label>
      <CheckboxContainer isChecked={isChecked} onClick={onChange}>
        {isChecked && <FaCheck />}
        <HiddenCheckbox type="checkbox" checked={isChecked} readOnly />
      </CheckboxContainer>
    </Label>
  );
};

const Label = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CheckboxContainer = styled.div<{ isChecked: boolean }>`
  width: 16px;
  height: 16px;
  background-color: ${({ isChecked }) =>
    isChecked ? theme.color.primary20 : theme.color.primary10};
  border-radius: 2px;
  border: 0.2px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: white;
    font-size: 12px;
  }
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

export default Checkbox;
