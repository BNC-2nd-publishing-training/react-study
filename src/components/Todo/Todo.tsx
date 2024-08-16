import styled from "@emotion/styled";
import CheckBox from "../Input/CheckBox";
import Tags from "./Tags";
import { TodoProps } from "@/utils/interfaces/TodoProps";


const Todo = (props: TodoProps) => {
    return (
        <CheckBoxContainer onClick={props.onClick}>
            <CheckBox text={props.text} />
            <Tags text={props.status || 'Wating'} />
        </CheckBoxContainer>
    );
};

const CheckBoxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export default Todo;

