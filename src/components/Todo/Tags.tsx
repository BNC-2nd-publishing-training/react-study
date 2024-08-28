import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { TextProps } from "@/utils/interfaces/TextProps";

const Tags = ({ text }: TextProps) => {
    return (
        <TagItem text={text}>
            {text}
        </TagItem>
    );
}

type TagColorType = {
    [type: string]: {
        color: string;
        backgroundColor: string
    }
}

const TagColor : TagColorType = {
    "Approved":{
        color: theme.color.primary20,
        backgroundColor: theme.color.primary10,
    },
    "In progress":{
        color: theme.color.green30,
        backgroundColor: theme.color.green10,
    },
    "In review":{
        color: theme.color.red30,
        backgroundColor: theme.color.red10,
    },
    "default": {
        color: theme.color.gray60,
        backgroundColor: theme.color.gray10,
    },
}

const TagItem = styled.div<{ text: string }>`
    width: 75px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    font-size: ${theme.font.textSmall.fontSize};
    ${({ text }) => {
        const { color, backgroundColor } = TagColor[text] || TagColor.default;
        return `
            color: ${color};
            background-color: ${backgroundColor};
        `;
    }};
`;

export default Tags;
