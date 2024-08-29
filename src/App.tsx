import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Header from "./components/header";
import CheckList from "./components/checklist/checkListContainer";
import UpComingTask from "./components/checklist/upComingTask";
import NavBar from "./components/navbar";
import { useState } from "react";
import { ListItem, AllStatus } from "./components/constants";

import { Status } from "./components/constants";

const App = () => {
  const [currentStatus, setCurrentStatus] = useState<AllStatus>("All");
  const [tasks, setTasks] = useState<ListItem[]>([]);

  const handleStatusChange = (status: AllStatus) => {
    setCurrentStatus(status);
  };

  const addTask = (title: string, status: Status) => {
    const newTask: ListItem = {
      id: tasks.length + 1,
      title,
      status,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const filteredList =
    currentStatus === "All"
      ? tasks.filter((item) => item.status !== "Waiting")
      : tasks.filter((item) => item.status === currentStatus);

  return (
    <Container>
      <TodoBox>
        <Header addTask={addTask} />
        <NavBar
          totalCount={tasks.length}
          currentStatus={currentStatus}
          onStatusChange={handleStatusChange}
        />
        <CheckList items={filteredList} />
        <UpComingTask tasks={tasks} />
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
