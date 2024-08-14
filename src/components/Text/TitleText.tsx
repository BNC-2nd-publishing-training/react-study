import styled from "@emotion/styled"
import { theme } from "@/styles/theme";
import { TextProps } from "@/utils/interfaces/TextProps";

const TitleText = (props:TextProps) => {
    return <Title>{props.text}</Title>
}

const Title = styled.div`
    font-size: ${theme.font.titleLarge.fontSize};
    font-weight: ${theme.font.titleMedium.fontWeight};
`;

export default TitleText;