import styled from "@emotion/styled";
import CheckBox from "../Input/CheckBox"
import Tags from "./Tags";
import { PopupProps } from "@/utils/interfaces/PopupProps";
import { useRef, useEffect } from "react";

const Todo = (props: PopupProps) => {

    const checkBoxRef = useRef(null);

    return(
        <CheckBoxContainer onClick={props.onClick}>
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