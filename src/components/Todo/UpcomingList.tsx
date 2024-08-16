import styled from "@emotion/styled";
import Todo from "./Todo";
import { theme } from "@/styles/theme";
import { TodoProps } from "@/utils/interfaces/TodoProps";

const UpCommingList = ({ todos = [], onClick }: TodoProps) => {
    return(
        <UpCommingContainer>
            <Text>UpComming Task</Text>
            <TodoBox>
                {todos.slice().reverse().map((todo, index) => (
                    <Todo
                        key={index}
                        onClick={onClick}
                        text={todo.text}
                        status={todo.status}
                    />
                ))}
            </TodoBox>
        </UpCommingContainer>
    );
};

const UpCommingContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 40px;
`;

const TodoBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
`;


const Text = styled.h1`
    color: ${theme.color.gray60};
    font-size: ${theme.font.titleMedium.fontSize};
    font-weight: ${theme.font.titleMedium.fontWeight};
`;

export default UpCommingList;