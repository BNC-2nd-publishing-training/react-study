import styled from "@emotion/styled";
import Todo from "./Todo";

const TodoList = () => {
    return(
        <TodoContainer>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
        </TodoContainer>
    );
};

const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
`;
export default TodoList;