import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Tab from "@/components/Tab";
import TodoList from "@/components/TodoList";
import { TodoItem } from '@/utils/interfaces/todoInterfaces';

interface MainProps {
    todos: TodoItem[];
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
    onTaskSelect: (task: TodoItem) => void;
}

const Main: React.FC<MainProps> = ({ todos, setTodos, onTaskSelect }) => {
    const [selectedTab, setSelectedTab] = useState<string>('All');

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
                <TodoList
                    todos={todos}
                    selectedTab={selectedTab}
                    onToggleTodo={toggleTodoCheck}
                    onTaskSelect={onTaskSelect} 
                />
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
