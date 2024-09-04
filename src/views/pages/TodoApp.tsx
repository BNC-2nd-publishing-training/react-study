import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import Header from '@/layouts/Header';
import Main from '@/layouts/Main';
import Popup from '@/layouts/Popup';
import { TodoItem } from '@/utils/interfaces/todoInterfaces';

const TodoApp: React.FC = () => {
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    const [selectedTask, setSelectedTask] = useState<TodoItem | null>(null);

    const togglePopup = () => {
        setIsPopupVisible(prev => !prev);
    };

    const [todos, setTodos] = useState<TodoItem[]>([
        { id: 1, check: true, text: "간지나게 숨쉬기", tag: "Approved" }
    ]);

    const handleTaskSelect = (task: TodoItem) => {
        setSelectedTask(task);
        togglePopup();
    };

    const handleAddTask = () => {
        setSelectedTask(null);
        togglePopup();
    };

    return (
        <Container>
            {isPopupVisible && (
                <Popup
                    onClose={togglePopup}
                    setTodos={setTodos}
                    selectedTask={selectedTask || undefined}
                />
            )}
            <TodoListBox>
                <Header onClose={handleAddTask} setTodos={setTodos}/>
                <Main todos={todos} setTodos={setTodos} onTaskSelect={handleTaskSelect} />
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
    width: 35vw;
    max-height: 80vh;
    aspect-ratio: 1 / 3;
    border-radius: 10px;
    background-color: ${theme.color.white};
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 700px) {
        width: 80vw;
    }
`;

export default TodoApp;
