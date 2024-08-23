import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import FloatingButton from "./components/Button/Floating";
import Nav from "./components/Nav";
import CheckboxList from "./components/Checkbox/CheckboxList";

type dummyType = {
  status: "Approved" | "In progress" | "In review" | "Waiting";
  label: string;
};

const dummyList: dummyType[] = [
  { status: "Approved", label: "간지나게 숨쉬기" },
  { status: "Approved", label: "간지나게 숨쉬기" },
  { status: "In review", label: "간지나게 숨쉬기" },
  { status: "In progress", label: "간지나게 숨쉬기" },
  { status: "Waiting", label: "간지나게 숨쉬기" },
];

const App = () => {
  const [activeStatus, setActiveStatus] = useState<string>("All");

  // 상태별 필터링된 리스트
  const filteredList =
    activeStatus === "All"
      ? dummyList.filter((item) => item.status !== "Waiting")
      : dummyList.filter((item) => item.status === activeStatus);

  // 상태별로 Nav에 표시할 배지 값
  const badgeValues = [
    dummyList.length,
    dummyList.filter((item) => item.status === "In review").length,
    dummyList.filter((item) => item.status === "In progress").length,
    dummyList.filter((item) => item.status === "Approved").length,
  ];

  // 상태 변경 핸들러
  const handleNavClick = (status: string) => {
    setActiveStatus(status);
  };

  return (
    <Container>
      <TodolistContainer>
        <Header>
          <TodayTaskTitle>Today Task</TodayTaskTitle>
          <FloatingButton />
        </Header>
        <Nav badgeValues={badgeValues} onNavClick={handleNavClick} />
        <CheckboxListContainer>
          {filteredList.map((it) => (
            <CheckboxList key={it.label} status={it.status} label={it.label} />
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
              />
            ))}
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
