
export interface PopupProps {
    onClose: () => void;
    setTodos: (todos: string) => void;
    selectedTask?: {
        id: number;
        text: string;
        tag: string;
        check: boolean;
    };
}
