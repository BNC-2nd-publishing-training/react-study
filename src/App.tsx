import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import FloatingButton from "./components/Button/Floating";
import Nav from "./components/Nav";
import CheckboxList from "./components/Checkbox/CheckboxList";

const dummyList: {
  status: "Approved" | "In progress" | "In review" | "Waiting";
  label: string;
}[] = [
  {
    status: "Approved",
    label: "간지나게 숨쉬기",
  },
  {
    status: "Approved",
    label: "간지나게 숨쉬기",
  },
  {
    status: "In review",
    label: "간지나게 숨쉬기",
  },
  {
    status: "In progress",
    label: "간지나게 숨쉬기",
  },
];

const App = () => {
  const badgeValues = [10, 10, 5, 0];

  return (
    <Container>
      <TodolistContainer>
        <Header>
          <TodayTaskTitle>Today Task</TodayTaskTitle>
          <FloatingButton />
        </Header>
        <Nav badgeValues={badgeValues} />
        <CheckboxListContainer>
          {dummyList.map((it) => (
            <CheckboxList status={it.status} label={it.label} />
          ))}
        </CheckboxListContainer>
        <UpcomingTaskTitleContainer>
          <UpcomingTaskTitle>Upcoming Tasks</UpcomingTaskTitle>
        </UpcomingTaskTitleContainer>
        <UpcomingTasksContainer>
          <CheckboxList status="Waiting" label="간지나게 숨쉬기" />
        </UpcomingTasksContainer>
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
