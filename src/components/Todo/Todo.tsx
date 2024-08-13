import styled from "@emotion/styled";
import CheckBox from "./CheckBox"
import Tags from "./Tags";

const Todo = () => {
    return(
        <CheckBoxContainer>
            <CheckBox text="간지나게 숨쉬기"/>
            <Tags text="Approved"/>
        </CheckBoxContainer>

    )
}

const CheckBoxContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export default Todo;