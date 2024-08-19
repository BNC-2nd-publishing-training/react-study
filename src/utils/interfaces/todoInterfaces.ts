// todo
export interface TodoItem {
    id: number;
    check: boolean;
    text: string;
    tag: 'Approved' | 'In Progress' | 'In Review' | 'Wating';
}

export interface TodoListProps {
    todos: TodoItem[];
    selectedTab: string;
    onToggleTodo: (id: number) => void;
    onTaskSelect: (todo: TodoItem) => void;
}

export interface TodoProps {
    check: string;
    text: string;
    tag: string;
    onToggle: () => void;
    onClick: () => void;
}
