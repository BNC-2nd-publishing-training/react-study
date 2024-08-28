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
    const [checkedTasks, setCheckedTasks] = React.useState<Set<number>>(new Set()); // 체크박스 상태 관리
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

    // 전체 태스크 개수 계산
    const totalTasksCount = tasks.length;

    // 필터링된 태스크 계산
    const filteredTasks = (): Task[] => {
        if (TypeArr[currentTab].name === 'All') {
            return tasks.filter(task => task.type !== 'Waiting').map(task => ({
                ...task,
                id: task.id ?? -1,
            })) as Task[];
        }
        return tasks.filter(task => task.type === TypeArr[currentTab].name).map(task => ({
            ...task,
            id: task.id ?? -1,
        })) as Task[];
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
        setTasks((prevTasks: Task[]) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };    

    const handleDeleteTask = (taskId: number) => {
        setTasks((prevTasks: Task[]) =>
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
                        {el.name}
                        {el.name === 'All' && ` (${totalTasksCount})`} {/* 전체 태스크 개수 표시 */}
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
            <WaitingTask tasks={tasks as Task[]} />

            {isModalOpen && (
                <CorrectionTask 
                    task={selectedTask} 
                    onClose={closeModal}
                    onUpdate={handleUpdateTask}
                    onDelete={handleDeleteTask} // 삭제 핸들러 전달
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

const TaskItem = styled.div`
    display: flex;
    align-items: center; /* 체크박스와 내용이 수직으로 정렬되도록 수정 */
    margin-bottom: 20px;
    cursor: pointer;
`;

const Checkbox = styled.input`
    margin-right: 10px; /* 체크박스와 태스크 내용 사이의 간격 조정 */
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
