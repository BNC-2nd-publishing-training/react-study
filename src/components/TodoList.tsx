import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Todo from "@/components/Todo";
import { TodoListProps } from "@/utils/interfaces/todoInterfaces";

const TodoList = ({ todos, selectedTab, onToggleTodo, onTaskSelect }: TodoListProps) => {
    const filteredTodos = selectedTab === 'All'
        ? todos
        : todos.filter(todo => todo.tag === selectedTab);

    const completedTodos = filteredTodos.filter(todo => todo.tag !== "Waiting");
    const upcomingTodos = todos.filter(todo => todo.tag === "Waiting");

    return (
        <TodoContainer>
            <Completed>
                {completedTodos.map(todo => (
                    <Todo
                        key={todo.id}
                        check={(todo.check ?? false).toString()}
                        text={todo.text}
                        tag={todo.tag}
                        onToggle={() => onToggleTodo(todo.id)}
                        onClick={() => onTaskSelect(todo)}
                    />
                ))}
            </Completed>

            <Upcoming>
                <h2>Upcoming Tasks</h2>
                {upcomingTodos.map(todo => (
                    <Todo
                        key={todo.id}
                        check={(todo.check ?? false).toString()}
                        text={todo.text}
                        tag={todo.tag}
                        onToggle={() => onToggleTodo(todo.id)}
                        onClick={() => onTaskSelect(todo)}
                    />
                ))}
            </Upcoming>
        </TodoContainer>
    );
};

const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2vw 3vw;
    row-gap: 6vh;
`;

const Completed = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
`;

const Upcoming = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    h2 {
        margin-bottom: 2vh;
        color: ${theme.color.gray60};
        font-size: ${theme.font.titleMedium.fontSize};
        font-weight: ${theme.font.titleMedium.fontWeight};
    }
`;

export default TodoList;
