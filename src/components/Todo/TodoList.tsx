import styled from "@emotion/styled";
import Todo from "./Todo";
import { TodoProps } from "@/utils/interfaces/TodoProps";

const TodoList = ({ todos = [], onClick }: TodoProps) => {

    return (
        <TodoContainer>
            {todos.slice().reverse().map((todo, index) => (
                <Todo
                    key={index}
                    onClick={onClick}
                    text={todo.text}
                    status={todo.status}
                />
            ))}
        </TodoContainer>
    );
};

const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
`;

export default TodoList;
