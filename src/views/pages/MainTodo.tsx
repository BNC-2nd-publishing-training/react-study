import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import styles from '@/styles/MainTodo/maintodo.module.css';
import PlusButton from "@/components/plusbutton";
import TodoAdd from "./TodoAdd";
import InReviewPage from "./InReviewPage";
import InProgressPage from "./InProgressPage";
import ApprovedPage from "./ApprovedPage";
import WaitingPage from "./WaitingPage";
import TaskModal from "@/components/TaskModal";
import { TagType } from '@/utils/interfaces/tag.types';

let nextId = 1;
const getNextId = () => nextId++;

const MainTodo = () => {
  const [tasks, setTasks] = useState<{ id: number; title: string; status: TagType }[]>([]);
  const [filter, setFilter] = useState<TagType | 'All Tasks'>('All Tasks');
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [checkedStates, setCheckedStates] = useState<{ [id: number]: boolean }>({});

  const handleAddTask = (title: string, status: TagType) => {
    const newId = getNextId();
    setTasks(prevTasks => [...prevTasks, { id: newId, title, status }]);
    setCheckedStates(prevStates => ({ ...prevStates, [newId]: false })); 
  };

  const handleEditTask = (id: number, newTitle: string, newStatus: TagType) => {
    setTasks(prevTasks => 
      prevTasks.map(task => task.id === id ? { ...task, title: newTitle, status: newStatus } : task)
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(prevTasks => 
      prevTasks.filter(task => task.id !== id)
    );
    setCheckedStates(prevStates => {
      const newStates = { ...prevStates };
      delete newStates[id];
      return newStates;
    });
  };

  const openTaskModal = (id: number) => {
    setSelectedTaskId(id);
    setIsModalOpen(true);
  };

  const closeTaskModal = () => {
    setSelectedTaskId(null);
    setIsModalOpen(false);
  };

  const handleCheckboxChange = (id: number, checked: boolean) => {
    setCheckedStates(prevStates => ({ ...prevStates, [id]: checked }));
  };

  const filteredTasks = {
    'All Tasks': tasks,
    'In Progress': tasks.filter(task => task.status === 'In progress'),
    'In Review': tasks.filter(task => task.status === 'In review'),
    'Approved': tasks.filter(task => task.status === 'Approved'),
    'Waiting': tasks.filter(task => task.status === 'Waiting'),
  };

  const nonWaitingTasks = filteredTasks['All Tasks'].filter(task => task.status !== 'Waiting');
  const waitingTasks = filteredTasks['All Tasks'].filter(task => task.status === 'Waiting');
  const totalTasksCount = tasks.length;

  return (
    <Container>
      <Header>
        <div className={styles.today_task}>Today Task</div>
        <PlusButtonWrapper>
          <PlusButton onAddTask={handleAddTask} />
        </PlusButtonWrapper>
      </Header>

      <ButtonWrapper>
        <MenuButton
          active={filter === 'All Tasks'}
          onClick={() => setFilter('All Tasks')}
        >
          <TaskCount>{totalTasksCount}</TaskCount> All 
        </MenuButton>
        <MenuButton
          active={filter === 'In review'}
          onClick={() => setFilter('In review')}
        >
          In Review
        </MenuButton>
        <MenuButton
          active={filter === 'In progress'}
          onClick={() => setFilter('In progress')}
        >
          In Progress
        </MenuButton>
        <MenuButton
          active={filter === 'Approved'}
          onClick={() => setFilter('Approved')}
        >
          Approved
        </MenuButton>
      </ButtonWrapper>

      {filter === 'All Tasks' && (
        <>
          <TodoAdd
            tasks={nonWaitingTasks}
            checkedStates={checkedStates}
            onCheckboxChange={handleCheckboxChange}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            openTaskModal={openTaskModal}
          />
          <Waiting>Upcoming Tasks</Waiting>
          <WaitingPage
            tasks={waitingTasks}
            checkedStates={checkedStates}
            onCheckboxChange={handleCheckboxChange}
          />
        </>
      )}
      {filter === 'In review' && (
        <InReviewPage
          tasks={filteredTasks['In Review']}
          checkedStates={checkedStates}
          onCheckboxChange={handleCheckboxChange}
        />
      )}
      {filter === 'In progress' && (
        <InProgressPage
          tasks={filteredTasks['In Progress']}
          checkedStates={checkedStates}
          onCheckboxChange={handleCheckboxChange}
        />
      )}
      {filter === 'Approved' && (
        <ApprovedPage
          tasks={filteredTasks['Approved']}
          checkedStates={checkedStates}
          onCheckboxChange={handleCheckboxChange}
        />
      )}
      {filter === 'Waiting' && (
        <WaitingPage
          tasks={filteredTasks['Waiting']}
          checkedStates={checkedStates}
          onCheckboxChange={handleCheckboxChange}
        />
      )}

      {selectedTaskId !== null && (
        <TaskModal
          isOpen={isModalOpen}
          onClose={closeTaskModal}
          taskTitle={tasks.find(task => task.id === selectedTaskId)?.title || ''}
          taskStatus={tasks.find(task => task.id === selectedTaskId)?.status || 'In progress'}
          onEdit={(newTitle, newStatus) => handleEditTask(selectedTaskId, newTitle, newStatus)}
          onDelete={() => handleDeleteTask(selectedTaskId)}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 517px;
  height: 840px;
  position: absolute;
  top: 90px;
  left: 50%;
  transform: t ranslateX(-50%);
  border-radius: 10px;
  border: 1px solid ${theme.color.gray20};
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 52px;
`;

const PlusButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: -40px;
`;

const MenuButton = styled.button<{ active: boolean }>`
  position: relative;
  width: 122px;
  height: 90px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ active }) => (active ? theme.color.gray60 : theme.color.black)};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ active }) => (active ? `2px solid ${theme.color.primary20}` : 'none')};
`;

const TaskCount = styled.span`
  margin-right: 8px;
  background-color: ${theme.color.primary10};
  color: ${theme.color.primary20};
  padding: 2px 6px;
  border-radius: 10px;
`;

const Waiting = styled.div`
  margin-left: 50px;
  color: ${theme.color.gray60};
`;

export default MainTodo;
