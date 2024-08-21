import styled from "@emotion/styled";
import { ButtonProps } from "@/utils/interfaces/ButtonProps";
import { theme } from "@/styles/theme";

const Button = (props: ButtonProps) => {
    return(
        <ButtonStyle
            style={{backgroundColor: props.backgroundColor}}
            onClick={props.onClick}>
            {props.text}
        </ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: 4px;
    color: ${theme.color.white};
    font: ${theme.font.titleMedium};
`;

export default Button;