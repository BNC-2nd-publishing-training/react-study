// Task 생성 모달 TaskProvider 컴포넌트

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TaskContextType {
    tasks: { title: string; type: string }[];
    addTask: (title: string, type: string) => void;
    selectedType: string;
    setSelectedType: React.Dispatch<React.SetStateAction<string>>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useTaskContent는 TaskProvider 안에서만 사용할 수 있습니다.");
    }

    return context;
};

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<{ title: string; type: string }[]>([]);
    const [selectedType, setSelectedType] = useState<string>('All');

    const addTask = (title: string, type: string) => {
        setTasks(prevTasks => [...prevTasks, { title, type }]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, selectedType, setSelectedType }}>
            {children}
        </TaskContext.Provider>
    );
};
