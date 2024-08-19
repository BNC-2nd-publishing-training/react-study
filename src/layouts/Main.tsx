import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Tab from "@/components/Tab";
import TodoList from "@/components/TodoList";
import { TodoItem } from "@/utils/interfaces/todoInterfaces";

const Main = () => {
    const [selectedTab, setSelectedTab] = useState<string>('All');
    // 임시 데이터
    const [todos, setTodos] = useState<TodoItem[]>([
        { id: 1, check: true, text: "간지나게 숨쉬기", tag: "Approved" },
        { id: 2, check: true, text: "간지나게 숨쉬기", tag: "In Progress" },
        { id: 3, check: true, text: "간지나게 숨쉬기", tag: "In Review" },
        { id: 4, check: true, text: "간지나게 숨쉬기", tag: "In Review" },
        { id: 5, check: true, text: "간지나게 숨쉬기", tag: "Approved" },
        { id: 6, check: true, text: "간지나게 숨쉬기", tag: "In Progress" },
        { id: 7, check: false, text: "간지나게 숨쉬기", tag: "Waiting" },
        { id: 8, check: false, text: "간지나게 숨쉬기", tag: "In Review" },
        { id: 9, check: false, text: "간지나게 숨쉬기", tag: "Approved" },
        { id: 10, check: false, text: "간지나게 숨쉬기", tag: "Waiting" }
    ]);

    const handleTabSelect = (tab: string) => {
        setSelectedTab(tab);
    };

    const toggleTodoCheck = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, check: !todo.check } : todo
        ));
    };

    return (
        <MainStyle>
            <Tab onTabSelect={handleTabSelect} todoCounts={todos.length} />
            <ScrollBox>
                <TodoList todos={todos} selectedTab={selectedTab} onToggleTodo={toggleTodoCheck} onTaskSelect={() => {}} />
            </ScrollBox>
        </MainStyle>
    );
};

const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    h1 {
        font-size: ${theme.font.titleLarge.fontSize};
        font-weight: ${theme.font.titleMedium.fontWeight};
    }
`;

const ScrollBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`;

export default Main;
