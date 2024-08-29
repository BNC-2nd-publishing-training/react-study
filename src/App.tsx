import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Header from "./components/header";
import CheckList from "./components/checklist/checkListContainer";
import UpComingTask from "./components/checklist/upComingTask";
import NavBar from "./components/navbar";
import { useEffect, useState } from "react";
import { Status, ListItem, AllStatus } from "./components/constants";
import DefaultModal from "./components/modal";

const App = () => {
  const [currentStatus, setCurrentStatus] = useState<AllStatus>("All");
  const [tasks, setTasks] = useState<ListItem[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleStatusChange = (status: AllStatus) => {
    setCurrentStatus(status);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const addTask = (title: string, status: Status) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      status,
    };
    console.log("title", title, "status", status);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const filteredList =
    currentStatus === "All"
      ? tasks
      : tasks.filter((item) => item.status === currentStatus);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  return (
    <Container>
      <TodoBox>
        <Header />
        <NavBar
          totalCount={tasks.length}
          currentStatus={currentStatus}
          onStatusChange={handleStatusChange}
        />
        <CheckList items={filteredList} />
        <UpComingTask />
        {isOpenModal && (
          <DefaultModal
            closeModal={closeModal}
            addTask={addTask}
            setTasks={setTasks}
          />
        )}
      </TodoBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray30};
`;

const TodoBox = styled.div`
  width: 517px;
  height: 840px;
  background-color: ${theme.color.white};
  border-radius: 0 1px;
  padding: 52px 47px 32px 47px;
`;

export default App;
