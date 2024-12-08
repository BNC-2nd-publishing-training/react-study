import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import FloatingButton from "./components/Button/Floating";
import Nav from "./components/Nav";
import CheckboxList from "./components/Checkbox/CheckboxList";
import Modal from "./components/Modal";

type DummyType = {
  status: "Approved" | "In progress" | "In review" | "Waiting";
  label: string;
};

const App = () => {
  const [activeStatus, setActiveStatus] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<"floatingButton" | "checkboxList">(
    "floatingButton"
  );
  const [selectedTask, setSelectedTask] = useState<DummyType | null>(null);
  const [dummyList, setDummyList] = useState<DummyType[]>([]); // 초기 상태를 빈 배열로 설정

  const filteredList =
    activeStatus === "All"
      ? dummyList
      : dummyList.filter((item) => item.status === activeStatus);

  const badgeValues = [
    dummyList.length,
    dummyList.filter((item) => item.status === "In review").length,
    dummyList.filter((item) => item.status === "In progress").length,
    dummyList.filter((item) => item.status === "Approved").length,
  ];

  const handleNavClick = (status: string) => {
    setActiveStatus(status);
  };

  const handleFloatingButtonClick = () => {
    setModalMode("floatingButton");
    setIsModalOpen(true);
  };

  const handleCheckboxListClick = (task: DummyType) => {
    setSelectedTask(task);
    setModalMode("checkboxList");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addTask = (label: string, status: string) => {
    if (label.trim()) {
      setDummyList((prevList) => [
        ...prevList,
        { label, status: status as DummyType["status"] },
      ]);
    }
  };

  const editTask = (label: string, status: string) => {
    if (selectedTask) {
      setDummyList((prevList) =>
        prevList.map((task) =>
          task.label === selectedTask.label
            ? { label, status: status as DummyType["status"] }
            : task
        )
      );
    }
  };

  const deleteTask = () => {
    if (selectedTask) {
      setDummyList((prevList) =>
        prevList.filter((task) => task.label !== selectedTask.label)
      );
    }
  };

  return (
    <Container>
      <TodolistContainer>
        <Header>
          <TodayTaskTitle>Today Task</TodayTaskTitle>
          <FloatingButton onClick={handleFloatingButtonClick} />
        </Header>
        <Nav badgeValues={badgeValues} onNavClick={handleNavClick} />
        <CheckboxListContainer>
          {filteredList.map((it) => (
            <CheckboxList
              key={it.label}
              status={it.status}
              label={it.label}
              onClick={() => handleCheckboxListClick(it)}
            />
          ))}
        </CheckboxListContainer>
        <UpcomingTaskTitleContainer>
          <UpcomingTaskTitle>Upcoming Tasks</UpcomingTaskTitle>
        </UpcomingTaskTitleContainer>
        <UpcomingTasksContainer>
          {dummyList
            .filter((item) => item.status === "Waiting")
            .map((it) => (
              <CheckboxList
                key={it.label}
                status={it.status}
                label={it.label}
                onClick={() => handleCheckboxListClick(it)}
              />
            ))}
        </UpcomingTasksContainer>
        {isModalOpen && (
          <Modal
            onClose={closeModal}
            onAddTask={addTask}
            onEditTask={editTask}
            onDeleteTask={deleteTask}
            mode={modalMode}
            selectedTask={selectedTask}
          />
        )}
      </TodolistContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.gray30};
`;

const CheckboxListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 47px;
  gap: 18px;
  overflow: auto;
  max-height: 320px;
`;

const UpcomingTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 47px 0px;
  gap: 18px;
  overflow-y: auto;
  max-height: 160px;
`;

const UpcomingTaskTitle = styled.span`
  color: ${theme.color.gray60};
  font-size: ${theme.font.titleMedium.fontSize};
  font-weight: ${theme.font.titleMedium.fontWeight};
  line-height: ${theme.font.titleMedium.lineHeight};
`;

const TodolistContainer = styled.div`
  width: 517px;
  height: 840px;
  background-color: ${theme.color.white};
  border-radius: 10px;
  border-left: 1px solid ${theme.color.gray20};
  border-right: 1px solid ${theme.color.gray20};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 52px 47px 0px;
`;

const UpcomingTaskTitleContainer = styled.div`
  display: flex;
  padding: 52px 47px 40px;
`;

const TodayTaskTitle = styled.h1`
  color: ${theme.color.black};
  font-size: ${theme.font.titleLarge.fontSize};
  font-weight: ${theme.font.titleLarge.fontWeight};
  line-height: ${theme.font.titleLarge.lineHeight};
`;

export default App;
