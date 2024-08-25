import React, { createContext, Component, ReactNode, Key } from 'react';

interface TaskContextType {
    tasks: {
        id: Key | null | undefined; title: string; type: string 
}[];
    addTask: (title: string, type: string) => void;
    selectedType: string;
    setSelectedType: (type: string) => void;
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
    tasks: { title: string; type: string }[];
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
            tasks: [...prevState.tasks, { title, type }],
        }));
    };

    setSelectedType = (type: string) => {
        this.setState({ selectedType: type });
    };

    render() {
        const contextValue: TaskContextType = {
            tasks: this.state.tasks,
            addTask: this.addTask,
            selectedType: this.state.selectedType,
            setSelectedType: this.setSelectedType,
        };

        return (
            <TaskContext.Provider value={contextValue}>
                {this.props.children}
            </TaskContext.Provider>
        );
    }
}
