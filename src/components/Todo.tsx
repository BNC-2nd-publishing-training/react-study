import React, { useState } from 'react';
import { FaRegSquare, FaSquareCheck } from "react-icons/fa6";
import styled from '@emotion/styled';
import { theme } from "@/styles/theme";
import Tag from "@/components/Tag"

const Todo = ({ check, text, tag }) => {
    return (
        <CheckBoxContainer>
            {check == "false" ? <FaRegSquareIcon /> : <FaCheckSquareIcon />}
            <TaskText>{text}</TaskText>
            <Tag tag={tag}/>
        </CheckBoxContainer>
    );
};

const CheckBoxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
`;

const FaRegSquareIcon = styled(FaRegSquare)`
    color: ${theme.color.gray60};
    margin-right: 6px;
    font-size: 20px;
`;

const FaCheckSquareIcon = styled(FaSquareCheck)`
    color: ${theme.color.primary20};
    margin-right: 6px;
    font-size: 20px;
`;

const TaskText = styled.span`
    flex-grow: 1;
    margin-left: 10px;
`;


export default Todo;