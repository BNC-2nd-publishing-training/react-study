import styled from "@emotion/styled";
import Todo from "./Todo";
import { PopupProps } from "@/utils/interfaces/PopupProps";

const TodoList = (props: PopupProps) => {
    return(
        <TodoContainer>
            <Todo onClick={props.onClick}/>
            <Todo onClick={props.onClick}/>
            <Todo onClick={props.onClick}/>
            <Todo onClick={props.onClick}/>
            <Todo onClick={props.onClick}/>
        </TodoContainer>
    );
};

const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
`;
export default TodoList;