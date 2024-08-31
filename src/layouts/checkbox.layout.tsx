import { Icon } from '@iconify/react';
import checkIcon from '@iconify-icons/mdi/check';
import { CheckboxProps } from '@/utils/interfaces/checkbox.types';
import { handleCheckBoxChange } from '@/utils/functions/checkbox.functions';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const CustomCheckbox = styled.span<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.checked ? '#623CE7' : '#fff')};
  border-color: ${props => (props.checked ? '#623CE7' : '#ccc')};
  transition: background-color 0.3s, border-color 0.3s;
  position: relative;
`;

const CheckIconStyle = styled(Icon)`
  color: white;
  font-size: 16px;
`;

const CheckboxLayout: React.FC<CheckboxProps> = ({ checked, onChange }) => (
  <CheckboxContainer>
    <HiddenCheckbox
      type="checkbox"
      checked={checked}
      onChange={(e) => handleCheckBoxChange(e, onChange)}
    />
    <CustomCheckbox checked={checked}>
      {checked && <CheckIconStyle icon={checkIcon} />}
    </CustomCheckbox>
  </CheckboxContainer>
);

export default CheckboxLayout;
