export interface PopupProps {
    onClose: () => void;
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}