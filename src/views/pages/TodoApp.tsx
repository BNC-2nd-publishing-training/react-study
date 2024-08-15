import React, { useState } from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Header from "@/layouts/Header";
import Main from "@/layouts/Main";

// Todo 기본 셋 
interface Todo {
    id: number;
    title: string;
    tag: string;
    completed: boolean;
}

// 할일 추가 함수
const TodoApp = () => {
    return (
        <Container>
            <TodoListBox>
                {/* (임시) layout부분  */}
                <Header />
                <Main />
            </TodoListBox>
        </Container>
    );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray30};
`;

const TodoListBox = styled.div`
    width: 30vw;
    height: 80vh;
    border-radius: 10px;
    background-color: ${theme.color.white};
`;

export default TodoApp;