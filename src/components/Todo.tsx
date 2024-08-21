import styled from '@emotion/styled';
import { theme } from "@/styles/theme";
import { FaRegSquare, FaSquareCheck } from "react-icons/fa6";
import Tag from "@/components/Tag";
import { TodoProps } from "@/utils/interfaces/todoInterfaces";

const Todo = ({ check, text, tag, onToggle, onClick }: TodoProps) => {
    // Prevent checkbox click from triggering the onClick event for editing
    const handleCheckboxClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onToggle();
    };

    return (
        <CheckBoxContainer onClick={onClick}>
            {check === "false" ? (
                <FaRegSquareIcon onClick={handleCheckboxClick} />
            ) : (
                <FaCheckSquareIcon onClick={handleCheckboxClick} />
            )}
            <TaskText>{text}</TaskText>
            <Tag tag={tag} />
        </CheckBoxContainer>
    );
};

const CheckBoxContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    cursor: pointer;
`;

const FaRegSquareIcon = styled(FaRegSquare)`
    width: ${theme.font.textMedium.fontSize};
    font-size: min-content;
    color: ${theme.color.gray60};
`;

const FaCheckSquareIcon = styled(FaSquareCheck)`
    width: ${theme.font.textMedium.fontSize};
    font-size: min-content;
    color: ${theme.color.primary20};
`;

const TaskText = styled.span`
    flex-grow: 1;
    width: 50%;
    margin-left: 10px;
    padding-right: 5vw;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: ${theme.font.textMedium.fontSize};
`;

export default Todo;
