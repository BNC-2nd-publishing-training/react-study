import styled from '@emotion/styled';
import { theme } from "@/styles/theme";
import { FaRegSquare, FaSquareCheck } from "react-icons/fa6";
import Tag from "@/components/Tag";
import { TodoProps } from "@/utils/interfaces/todoInterfaces";

const Todo = ({ check, text, tag, onToggle, onClick }: TodoProps) => {
    return (
        <CheckBoxContainer onClick={onClick}>
            {check === "false" ? <FaRegSquareIcon onClick={onToggle} /> : <FaCheckSquareIcon onClick={onToggle} />}
            <TaskText>{text}</TaskText>
            <Tag tag={tag} />
        </CheckBoxContainer>
    );
};

const CheckBoxContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const FaRegSquareIcon = styled(FaRegSquare)`
    margin-right: 6px;
    font-size: 20px;
    color: ${theme.color.gray60};
`;

const FaCheckSquareIcon = styled(FaSquareCheck)`
    margin-right: 6px;
    font-size: 20px;
    color: ${theme.color.primary20};
`;

const TaskText = styled.span`
    flex-grow: 1;
    margin-left: 10px;
`;

export default Todo;
