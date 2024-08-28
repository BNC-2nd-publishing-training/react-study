import { createContext, useContext, useState } from "react";
import { TodoProps } from "@/utils/interfaces/TodoProps";
import { TodoProviderProps } from "@/utils/interfaces/TodoProviderProps";
import { TodoContextProps } from "@/utils/interfaces/TodoContextProps";

const TodoContext = createContext<TodoContextProps | undefined>(undefined);


export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<TodoProps[]>([]);
    const [selectedTodo, setSelectedTodo] = useState<TodoProps | null>(null);

    const updateTodos = (newTodos: TodoProps[]) => {
        setTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{ todos, selectedTodo, setSelectedTodo, updateTodos }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodoContext() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("TodoProvider로 감싸지 않음");
    }
    return context;
}