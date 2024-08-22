import { TodoItem } from "./todoInterfaces";

export interface PopupProps {
    onClose: () => void;
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
    selectedTask?: {
        id: number;
        text: string;
        tag: string;
        check: boolean;
    };
}
