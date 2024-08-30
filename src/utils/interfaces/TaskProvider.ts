// TaskProvider 인터페이스

export interface Task {
    id: number;
    title: string;
    type: string;
}

export interface TaskContextType {
    tasks: Task[];
    addTask: (title: string, type: string) => void;
    selectedType: string;
    setSelectedType: (type: string) => void;
    setTasks: (fn: (prevTasks: Task[]) => Task[]) => void;
}