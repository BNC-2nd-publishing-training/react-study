import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { Icon } from '@iconify/react';
import { PopupProps } from '../../utils/interfaces/PopupProps'

const AddTodoBtn = (props: PopupProps) => {

    return(
        <AddBtn onClick={props.onClick}>
            <Icon icon="ic:round-add"/>
        </AddBtn>
    );
};

const AddBtn = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px 0 12px 12px;
    background-color: ${theme.color.primary20};
    box-shadow: rgb(98, 60, 231, 0.5) 0 2px 10px;
    color: ${theme.color.white};
    font-size: ${theme.font.titleLarge};
    cursor: pointer;
`;
export default AddTodoBtn;