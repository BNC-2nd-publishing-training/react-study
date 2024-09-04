import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { tagProps } from '@/utils/interfaces/tagProps';

const Tags = ({ tag }: tagProps) => {
    return (
        <TagItem tag={tag}>
            {tag}
        </TagItem>
    );
}

const TagItem = styled.div<{ tag: string }>`
    padding: 5px 10px;
    border-radius: 12px;
    white-space: nowrap;
    font-size: ${theme.font.textSmall.fontSize};
    color: ${({ tag }) => {
        switch (tag) {
            case "Approved":
                return theme.color.primary20;
            case "In Progress":
                return theme.color.green30;
            case "In Review":
                return theme.color.red30;
            default:
                return theme.color.gray30;
        }
    }};
    background-color: ${({ tag }) => {
        switch (tag) {
            case "Approved":
                return theme.color.primary10;
            case "In Progress":
                return theme.color.green10;
            case "In Review":
                return theme.color.red10;
            default:
                return theme.color.gray10;
        }
    }};
`;

export default Tags;
