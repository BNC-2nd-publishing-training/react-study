import { theme } from "@/styles/theme";
import { InputProps } from "@/utils/interfaces/InputProps";
import styled from "@emotion/styled";

const InputBox = (props: InputProps) => {
    return(
        <InputStyle value={props.value} placeholder={props.placeholder}>
        </InputStyle>
    );
};

const InputStyle = styled.textarea`
    height: 130px;
    width: 100%;
    border-radius: 6px;
    outline: none;
    padding: 15px;
    resize: none;
    border: 1px solid ${theme.color.gray40};
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};

    ::placeholder{
        color: ${theme.color.gray40};
        font-size: ${theme.font.textMedium.fontSize};
        font-weight: ${theme.font.textMedium.fontWeight};
    }
`;



export default InputBox;