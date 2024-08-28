import styled from "@emotion/styled";
import Todos from "./Todos";
import { TodoProps } from "@/utils/interfaces/TodoProps";
import { useTodoContext } from "@/context/TodoContext";
import { Todo } from "@/utils/interfaces/Todo";

const TodoList = ({ todos = [], onClick, selectedTodoId }: TodoProps) => {
    const { setSelectedTodo } = useTodoContext();

    const handleTodoClick = (id: string) => {
        const storedTodos = localStorage.getItem('tasks');
        const todos = storedTodos ? JSON.parse(storedTodos) : [];
        const selectedTodo = todos.find((todo: Todo) => todo.id === id);

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
                <Todos
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
