import styled from "@emotion/styled";
import { TodoProps } from "@/utils/interfaces/TodoProps";
import { theme } from "@/styles/theme";

const CheckBox = (props: TodoProps) => {
    return(
        <LabelStyle htmlFor={props.text}>
            <InputStyle type="checkbox" id={props.text} name={props.text} ></InputStyle>
            <TodoText>{props.text}</TodoText>
        </LabelStyle>
    );
};

const LabelStyle = styled.label`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;
const InputStyle = styled.input`
    border: 0.5px solid ${theme.color.gray60};
    border-radius: 2px;
    width: 16px;
    height: 16px;

    &:checked {
        border-color: transparent;
        background-color: ${theme.color.primary20};
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='white' fill-rule='evenodd' d='M12.78 4.62a.75.75 0 0 1 0 1.06l-6.097 6.097a.75.75 0 0 1-1.069-.009L3.211 9.284a.75.75 0 1 1 1.078-1.043l1.873 1.936L11.72 4.62a.75.75 0 0 1 1.06 0' clip-rule='evenodd'/%3E%3C/svg%3E");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }
`;
const TodoText = styled.p`
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};

`;

export default CheckBox;