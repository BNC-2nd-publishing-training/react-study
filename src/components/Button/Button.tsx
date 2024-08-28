import styled from "@emotion/styled";
import { ButtonProps } from "@/utils/interfaces/ButtonProps";
import { theme } from "@/styles/theme";

const Button = (props: ButtonProps) => {
    return (
        <ButtonStyle
            type="button"
            backgroundColor={props.backgroundColor}
            onClick={props.onClick}>
            {props.text}
        </ButtonStyle>
    );
}

const ButtonStyle = styled.button<{ backgroundColor?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: 4px;
    color: ${theme.color.white};
    font: ${theme.font.titleMedium};
    background-color: ${({ backgroundColor }) => backgroundColor || theme.color.primary20};
`;

export default Button;
