import React from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { useTaskContext } from '@/components/Modal/CreateTask';
import WaitingTask from '@/components/Task/WaitingTask';
import CorrectionTask from "@/components/Modal/TaskCorrectionModal";

interface Task {
    id: number;
    title: string;
    type: string;
}

const Tab = () => {
    const [currentTab, setCurrentTab] = React.useState<number>(0);
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const [selectedTask, setSelectedTask] = React.useState<Task | null>(null);
    const [checkedTasks, setCheckedTasks] = React.useState<Set<number>>(new Set());
    const { tasks, setTasks, setSelectedType } = useTaskContext(); 

    const TypeArr = [
        { name: 'All', content: '' },
        { name: 'In Review', content: '' },
        { name: 'In Progress', content: '' },
        { name: 'Approved', content: '' }
    ];

    const selectTypeHandler = (index: number) => {
        setCurrentTab(index);
        setSelectedType(TypeArr[index].name);
    };

    const filteredTasks = (): Task[] => {
        if (TypeArr[currentTab].name === 'All') {
            return tasks.filter(task => task.type !== 'Waiting');
        }
        return tasks.filter(task => task.type === TypeArr[currentTab].name);
    };

    const openModal = (task: Task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTask(null);
    };

    const handleUpdateTask = (updatedTask: Task) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    const handleDeleteTask = (taskId: number) => {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== taskId)
        );
    };

    const handleCheckboxChange = (taskId: number) => {
        setCheckedTasks(prevCheckedTasks => {
            const newCheckedTasks = new Set(prevCheckedTasks);
            if (newCheckedTasks.has(taskId)) {
                newCheckedTasks.delete(taskId);
            } else {
                newCheckedTasks.add(taskId);
            }
            return newCheckedTasks;
        });
    };

    return (
        <Container>
            <TypeTab>
                {TypeArr.map((el, index) => (
                    <li
                        key={index}
                        className={index === currentTab ? "subType focused" : "subType"}
                        onClick={() => selectTypeHandler(index)}
                    >
                        {el.name === 'All' && <TaskCounter>{tasks.length}</TaskCounter>}
                        {el.name}
                    </li>
                ))}
            </TypeTab>
            <Desc>
                {filteredTasks().map((task) => (
                    <TaskItem key={task.id} onClick={() => openModal(task)}>
                        <Checkbox
                            type="checkbox"
                            checked={checkedTasks.has(task.id)}
                            onChange={() => handleCheckboxChange(task.id)}
                        />
                        <TaskContent>{task.title}</TaskContent>
                        <TaskType className={task.type.toLowerCase().replace(' ', '-')}>
                            {task.type}
                        </TaskType>
                    </TaskItem>
                ))}
            </Desc>

            <WaitingTask 
                tasks={tasks} 
                onUpdate={handleUpdateTask} 
                onDelete={handleDeleteTask} 
            />

            {isModalOpen && (
                <CorrectionTask 
                    task={selectedTask} 
                    onClose={closeModal}
                    onUpdate={handleUpdateTask}
                    onDelete={handleDeleteTask}
                />
            )}
        </Container>
    );
};

const Container = styled.div`
    position: relative;
`;

const TypeTab = styled.ul`
    position: fixed;
    width: calc(100% / 4);
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 16%;
    left: 37.5%;
    padding: 0;
    box-sizing: border-box;
    background-color: transparent;
    color: rgb(232, 234, 237);
    z-index: 1;
    pointer-events: auto;

    .subType {
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        font-size: 15px;
        list-style: none;
        cursor: pointer;
    }

    .focused {
        border-bottom: 1px solid ${theme.color.primary20};
        color: rgb(21, 20, 20);
    }
`;

const Desc = styled.div`
    margin-top: -120%;
    margin-left: 13%;
    font-size: 20px;
`;

const TaskCounter = styled.div`
    width: 29px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10%;
    border-radius: 10px;
    background-color: ${theme.color.primary10};
    font-size: 10px;
    color: ${theme.color.primary20};
`;

const TaskItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
`;

const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    margin-left: -10px;
    margin-right: 10px;
`;

const TaskContent = styled.div`
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const TaskType = styled.div`
    width: 75px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10%;
    border-radius: 20px;
    font-size: 12px;

    &.in-review {
        color: ${theme.color.red30};
        background-color: ${theme.color.red10};
    }

    &.in-progress {
        color: ${theme.color.green30};
        background-color: ${theme.color.green10};
    }

    &.approved {
        color: ${theme.color.primary20};
        background-color: ${theme.color.primary10};
    }
`;

export default Tab;
