import React, { createContext, Component, ReactNode, Key } from 'react';

interface Task {
    id: number;
    title: string;
    type: string;
}

interface TaskContextType {
    tasks: Task[];
    addTask: (title: string, type: string) => void;
    selectedType: string;
    setSelectedType: (type: string) => void;
    setTasks: (fn: (prevTasks: Task[]) => Task[]) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
    const context = React.useContext(TaskContext);

    if (!context) {
        throw new Error("useTaskContext는 TaskProvider 안에서만 사용할 수 있습니다.");
    }

    return context;
};

interface TaskProviderProps {
    children: ReactNode;
}

interface TaskProviderState {
    tasks: Task[];
    selectedType: string;
}

export class TaskProvider extends Component<TaskProviderProps, TaskProviderState> {
    constructor(props: TaskProviderProps) {
        super(props);

        this.state = {
            tasks: [],
            selectedType: 'All',
        };
    }

    addTask = (title: string, type: string) => {
        this.setState(prevState => ({
            tasks: [
                ...prevState.tasks,
                { id: Date.now(), title, type }
            ],
        }));
    };

    setSelectedType = (type: string) => {
        this.setState({ selectedType: type });
    };

    setTasks = (fn: (prevTasks: Task[]) => Task[]) => {
        this.setState(prevState => ({
            tasks: fn(prevState.tasks)
        }));
    };

    render() {
        const contextValue: TaskContextType = {
            tasks: this.state.tasks,
            addTask: this.addTask,
            selectedType: this.state.selectedType,
            setSelectedType: this.setSelectedType,
            setTasks: this.setTasks,
        };

        return (
            <TaskContext.Provider value={contextValue}>
                {this.props.children}
            </TaskContext.Provider>
        );
    }
}