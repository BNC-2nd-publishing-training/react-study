import React, { useState } from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Header from "@/layouts/Header";
import Main from "@/layouts/Main";

const TodoApp = () => {
    return (
        <Container>
            <TodoListBox>
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
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export default TodoApp;