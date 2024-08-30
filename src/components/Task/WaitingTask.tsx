// Waiting 타입 Task 컴포넌트

import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import { theme } from '@/styles/theme';

import CorrectionTask from "@/components/Modal/CorrectionTaskModal";

interface Task {
    id: number;
    title: string;
    type: string;
}

interface WaitingTaskProps {
    tasks: Task[];
    onUpdate: (updatedTask: Task) => void;
    onDelete: (taskId: number) => void;
}

function WaitingTask({ tasks, onUpdate, onDelete }: WaitingTaskProps) {
    const waitingTasks = Array.isArray(tasks) ? tasks.filter(task => task.type === 'Waiting') : [];
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [checkedTasks, setCheckedTasks] = React.useState<Set<number>>(new Set());

    useEffect(() => {
        console.log('Waiting Tasks:', waitingTasks);
    }, [waitingTasks]);

    const openModal = (task: Task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTask(null);
    };

    const handleUpdateTask = (updatedTask: Task) => {
        onUpdate(updatedTask);
    };

    const handleDeleteTask = (taskId: number) => {
        onDelete(taskId);
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

            <Title>Upcoming Tasks</Title>

            <Desc>

                {waitingTasks.map((task) => (
                    <TaskItem key={task.id} onClick={() => openModal(task)}>

                        <Checkbox
                            type="checkbox"
                            checked={checkedTasks.has(task.id)}
                            onChange={() => handleCheckboxChange(task.id)}
                        />

                        <TaskContent>{task.title}</TaskContent>

                        <TaskType className="waiting">
                            {task.type}
                        </TaskType>

                    </TaskItem>
                ))}

            </Desc>

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
}

const Container = styled.div`
    position: relative;
    padding-top: -10%; 
`;

const Title = styled.div`
    margin-top: 5%;
    margin-left: 10%;  
    font-size: 23px;
    color: gray;
`;

const Desc = styled.div`
    width: 455px;
    height: 240px;
    margin-top: 5%; 
    margin-left: 10%;
    font-size: 20px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    margin-left: 2px;
    margin-right: 10px;
    accent-color: ${theme.color.primary20};
`;

const TaskItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
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
    color: ${theme.color.gray60};
    background-color: ${theme.color.gray30};
`;

export default WaitingTask;
