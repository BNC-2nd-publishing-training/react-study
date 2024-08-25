import React, { useEffect } from 'react';
import styled from "@emotion/styled";
import { theme } from '@/styles/theme';

interface Task {
    id: number;
    title: string;
    type: string;
}

interface WaitingTaskProps {
    tasks: Task[];
}

function WaitingTask({ tasks }: WaitingTaskProps) {
    // tasks가 배열인지 확인
    const waitingTasks = Array.isArray(tasks) ? tasks.filter(task => task.type === 'Waiting') : [];

    useEffect(() => {
        console.log('Waiting Tasks:', waitingTasks);
    }, [waitingTasks]);

    return (
        <Container>
            <Title>Upcoming Tasks</Title>
            <Desc>
                {waitingTasks.map((task) => (
                    <TaskItem key={task.id}>
                        <TaskContent>{task.title}</TaskContent>
                        <TaskType className="waiting">
                            {task.type}
                        </TaskType>
                    </TaskItem>
                ))}
            </Desc>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;

const Title = styled.div`
    margin-top: 8%;
    margin-left: 10%;  
    font-size: 23px;
    color: gray;
`;

const Desc = styled.div`
    margin-top: 0%;
    margin-left: 13%;
    font-size: 20px;
`;

const TaskItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const TaskContent = styled.div`
    flex: 1;
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
