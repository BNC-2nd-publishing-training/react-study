// Task 타입 정의 인터페이스

export interface Task {
    id: number;
    title: string;
    type: string;
}

export interface CorrectionTaskProps {
    task: Task | null;
    onClose: () => void;
    onUpdate: (updatedTask: Task) => void;
    onDelete: (taskId: number) => void;
}