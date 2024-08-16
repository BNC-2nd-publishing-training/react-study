import styled from "@emotion/styled";
import { TagProps } from "@/utils/interfaces/TagProps";
import { theme } from "@/styles/theme";

const Tags = (props: TagProps) => {

    const tagColor = () => {
        switch(props.text){
            case "Approved":
                return{
                    color: theme.color.primary20,
                    backgroundColor: theme.color.primary10
                };
            case "In progress":
                return{
                    color: theme.color.green30,
                    backgroundColor: theme.color.green10
                };
            case "In review":
                return{
                    color: theme.color.red30,
                    backgroundColor: theme.color.red10
                };
            default:
                return{
                    color: theme.color.gray60,
                    backgroundColor: theme.color.gray10
                }
        }
    }

    const styles = tagColor();
    return(
        <TagItem
            style={styles}>
            {props.text}
        </TagItem>
    )
}

const TagItem = styled.div`

    padding: 7px 11px;
    border-radius: 14px;
    font-size: ${theme.font.textSmall.fontSize}
`;


export default Tags;