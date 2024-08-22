import styled from "@emotion/styled";
import Todo from "./Todo";
import { TodoProps } from "@/utils/interfaces/TodoProps";
import { useTodoContext } from "@/context/TodoContext";

const TodoList = ({ todos = [], onClick, selectedTodoId }: TodoProps) => {
    const { setSelectedTodo } = useTodoContext();

    const handleTodoClick = (id: string) => {
        const storedTodos = localStorage.getItem('tasks');
        const todos = storedTodos ? JSON.parse(storedTodos) : [];
        const selectedTodo = todos.find((todo: any) => todo.id === id);

        if (selectedTodo) {
            setSelectedTodo(selectedTodo); 
            console.log(selectedTodo)
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <TodoContainer>
            {todos.slice().reverse().map((todo) => (
                <Todo
                    key={todo.id}
                    onClick={() => handleTodoClick(todo.id)}
                    text={todo.text}
                    status={todo.status}
                    isSelected={todo.id === selectedTodoId}
                />
            ))}
        </TodoContainer>
    );
};

const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
`;

export default TodoList;
