import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const Tags = ({ tag }) => {
    const tagColor = () => {
        switch ({tag}.tag) {
            case "Approved":
                return {
                    color: theme.color.primary20,
                    backgroundColor: theme.color.primary10
                };
            case "In Progress":
                return {
                    color: theme.color.green30,
                    backgroundColor: theme.color.green10
                };
            case "In Review":
                return {
                    color: theme.color.red30,
                    backgroundColor: theme.color.red10
                };
            default:
                return {
                    color: theme.color.gray30,
                    backgroundColor: theme.color.gray10
                }
        }
    }

    const styles = tagColor();
    return (
        <TagItem
            style={styles}>
            {tag}
        </TagItem>
    )
}

const TagItem = styled.div`
    background-color: #f0f0f0;
    padding: 5px 10px;
    border-radius: 12px;
    white-space: nowrap;
    font-size: ${theme.font.textSmall.fontSize};
`;


export default Tags;