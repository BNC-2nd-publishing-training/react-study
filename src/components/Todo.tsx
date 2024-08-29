import styled from '@emotion/styled';
import Reset_Center from "@/styles/reset-center"
import { theme } from "@/styles/theme";
import Tag from "@/components/Tag";
import { TodoProps } from "@/utils/interfaces/todoInterfaces";

const Todo = ({ check, text, tag, onToggle, onClick }: TodoProps) => {

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation(); 
        onToggle();
    };

    return (
        <TodoBoxContainer onClick={onClick}>
            <Checkbox
                type="checkbox"
                checked={check === "true"}
                onChange={handleCheckboxChange}
                onClick={(e) => e.stopPropagation()} 
            />
            <TaskText>{text}</TaskText>
            <Tag tag={tag} />
        </TodoBoxContainer>
    );
};

const TodoBoxContainer = styled(Reset_Center.withComponent('li'))`
    width: 100%;
    justify-content: left;
    cursor: pointer;
`;

const Checkbox = styled.input`
    appearance: none;
    width: ${theme.font.textMedium.fontSize};
    height: ${theme.font.textMedium.fontSize};
    border: 2px solid ${theme.color.gray60};
    border-radius: 3px;
    background-color: ${theme.color.white};
    cursor: pointer;

    &:checked {
        background-color: ${theme.color.primary20};
        background-image: url("data:image/svg+xml,%3csvg viewBox='3 3 10 10' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");    
        border-color: ${theme.color.primary20};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.color.white};
        font-size: calc(${theme.font.textMedium.fontSize} - 4px);
    }
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
