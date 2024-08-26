import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Header from "./components/header";
import CheckList from "./components/checklist/checkListContainer";
import UpComingTask from "./components/checklist/upComingTask";
import NavBar from "./components/navbar";
import { useState } from "react";
import { Status, List } from "./components/constants";

const App = () => {
  const [currentStatus, setCurrentStatus] = useState<Status>("All");

  const handleStatusChange = (status: Status) => {
    setCurrentStatus(status);
  };

  const totalCount = List.length;

  const filteredList =
    currentStatus === "All"
      ? List.filter((item) => item.status !== "Waiting")
      : List.filter((item) => item.status === currentStatus);

  console.log("전체 리스트:", List);
  console.log("필터링된 리스트:", filteredList);

  return (
    <Container>
      <TodoBox>
        <Header />
        <NavBar
          totalCount={totalCount}
          currentStatus={currentStatus}
          onStatusChange={handleStatusChange}
        />
        <CheckList items={filteredList} />
        <UpComingTask />
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
