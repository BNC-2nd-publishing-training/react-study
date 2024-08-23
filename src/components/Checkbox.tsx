import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import CheckIcon from '@/assets/icons/Check';

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.span<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? theme.color.primary20 : theme.color.white)};
  border: 1px solid ${theme.color.primary20};
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, border-color 0.3s;

  svg {
    display: ${props => (props.checked ? 'block' : 'none')};
  }
`;

const Checkbox = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <CheckboxContainer>
    <HiddenCheckbox type="checkbox" checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked}>
      <CheckIcon color="white" size={10} />
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
