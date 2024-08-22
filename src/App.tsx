import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Tag from "./components/Tag";
import Button from "./components/Button";
import FloatingButton from "./components/Button/Floating";
import Badge from "./components/Badge";
import Checkbox from "./components/Checkbox";
import Nav from "./components/Nav";
import CheckboxList from "./components/Checkbox/CheckboxList";

const App = () => {
  return (
    <Container>
      <TodolistContainer>
        <Header>
          <TodayTaskTitle>Today Task</TodayTaskTitle>
          <FloatingButton />
        </Header>
        <Nav />
        <CheckboxListContainer>
          <CheckboxList status="Approved" label="허용" />
          <CheckboxList status="Approved" label="허용" />
          <CheckboxList status="Approved" label="허용" />
        </CheckboxListContainer>
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
`;

const UpcomingTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 47px;
  gap: 18px;
  overflow: auto;
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

const TodayTaskTitle = styled.h1`
  color: ${theme.color.black};
  font-size: ${theme.font.titleLarge.fontSize};
  font-weight: ${theme.font.titleLarge.fontWeight};
  line-height: ${theme.font.titleLarge.lineHeight};
`;

export default App;
