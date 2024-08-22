import React from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { useTaskContext } from '@/components/Modal/CreateTask';

const Tab = () => {
    const [currentTab, setCurrentTab] = React.useState<number>(0);
    const { tasks, setSelectedType } = useTaskContext();

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

    const filteredTasks = () => {
        if (TypeArr[currentTab].name === 'All') {
            return tasks;
        }
        return tasks.filter(task => task.type === TypeArr[currentTab].name);
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
                    </li>
                ))}
            </TypeTab>
            <Desc>
                {filteredTasks().map((task, index) => (
                    <TaskItem key={index}>
                        <TaskContent>{task.title}</TaskContent>
                        <TaskType>{TypeArr[currentTab].name}</TaskType>
                    </TaskItem>
                ))}
            </Desc>
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
    left: 37%;
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
    justify-content: space-between;
    margin-bottom: 20px;
`;

const TaskContent = styled.div`
    flex: 1;
`;

const TaskType = styled.div`
    flex-shrink: 0;
    color: ${theme.color.primary20};
`;

export default Tab;
