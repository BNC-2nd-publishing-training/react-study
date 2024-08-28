import { TodoProps } from "./TodoProps";

export interface TodoContextProps {
    todos: TodoProps[];
    selectedTodo: TodoProps | null;
    setSelectedTodo: (todo: TodoProps | null) => void;
    updateTodos: (todos: TodoProps[]) => void;
}