import styled from "@emotion/styled";
import { TagProps } from "@/utils/interfaces/TagProps";
import { theme } from "@/styles/theme";

const Tags = ({ text }: TagProps) => {
    return (
        <TagItem text={text}>
            {text}
        </TagItem>
    );
}

const TagItem = styled.div<{ text: string }>`
    padding: 7px 11px;
    border-radius: 14px;
    font-size: ${theme.font.textSmall.fontSize};
    color: ${({ text }) => {
        switch (text) {
            case "Approved":
                return theme.color.primary20;
            case "In progress":
                return theme.color.green30;
            case "In review":
                return theme.color.red30;
            default:
                return theme.color.gray60;
        }
    }};
    background-color: ${({ text }) => {
        switch (text) {
            case "Approved":
                return theme.color.primary10;
            case "In progress":
                return theme.color.green10;
            case "In review":
                return theme.color.red10;
            default:
                return theme.color.gray10;
        }
    }};
`;

export default Tags;
