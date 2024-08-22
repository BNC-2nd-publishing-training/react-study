import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = ({ label, ...props }: ICheckboxProps) => {
  return (
    <Container>
      <CheckboxInput type="checkbox" {...props} />
      <span>{label}</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-weight: ${theme.font.textMedium.fontWeight};
  font-size: ${theme.font.textMedium.fontSize};
  line-height: ${theme.font.textMedium.lineHeight};
`;

const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 0.5px solid ${theme.color.gray60};
  cursor: pointer;
  &:checked {
    border: none;
    background-color: ${theme.color.primary20};
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml,%3csvg%20width%3d%2210%22%20height%3d%227%22%20viewBox%3d%220%200%2010%207%22%20fill%3d%22none%22%20xmlns%3d%22http://www.w3.org/2000/svg%22%3e%3cpath%20d%3d%22M3.99074%206.65333C3.81404%206.65347%203.64451%206.58346%203.51941%206.45867L0.691407%203.63C0.627691%203.56855%200.576852%203.49502%200.541857%203.41371C0.506861%203.3324%200.488409%203.24493%200.487578%203.15641C0.486747%203.0679%200.503553%202.9801%200.537016%202.89814C0.570478%202.81619%200.619927%202.74172%200.682478%202.67908C0.745028%202.61644%200.819427%202.56689%200.901333%202.53331C0.983239%202.49973%201.07101%202.4828%201.15953%202.48351C1.24805%202.48421%201.33554%202.50254%201.4169%202.53742C1.49826%202.5723%201.57186%202.62304%201.63341%202.68667L3.99007%205.04333L8.23341%200.801334C8.35841%200.67624%208.52799%200.605928%208.70484%200.605866C8.88168%200.605803%209.05131%200.675995%209.17641%200.801001C9.3015%200.926006%209.37181%201.09558%209.37187%201.27243C9.37194%201.44928%209.30175%201.61891%209.17674%201.744L4.46207%206.45867C4.33697%206.58346%204.16744%206.65347%203.99074%206.65333Z%22%20fill%3d%22white%22/%3e%3c/svg%3e);
  }
`;

export default Checkbox;
