import { List, NavButton } from "@/components/common";
import { Storage } from "@/utils/functions/localstoarge";
import { ListStatusType } from "@/utils/interfaces/ListStatusType";
import { ITodoListType } from "@/utils/interfaces/TodoListType";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

type NavListType = ListStatusType | "All";
const navList: NavListType[] = ["All", "Approved", "In progress", "In review"];

const DummyData: ITodoListType[] = [
  {
    status: "Approved",
    label: "간지나게 숨쉬기",
  },
  {
    status: "In progress",
    label: "간지나게 숨쉬기",
  },
  {
    status: "In review",
    label: "간지나게 숨쉬기",
  },
  {
    status: "Waiting",
    label: "간지나게 숨쉬기",
  },
];

const TodoList = () => {
  const NavType = Storage.getItem("type") || "All";
  const [nowNav, setNowNav] = useState(NavType);

  const onClickNav = (data: NavListType) => {
    setNowNav(data);
  };
  useEffect(() => {
    Storage.setItem("type", nowNav);
  }, [nowNav]);

  return (
    <Container>
      <NavFilter>
        {navList.map((nav) => (
          <NavButton
            title={nav}
            key={nav}
            selected={nowNav === nav}
            onClick={() => onClickNav(nav)}
          />
        ))}
      </NavFilter>
      <TodoContainer>
        {DummyData.map((v, idx) => (
          <List
            status={v.status}
            label={v.label}
            key={idx + v.label + v.status}
          />
        ))}
      </TodoContainer>
    </Container>
  );
};

export default TodoList;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const NavFilter = styled.nav`
  display: flex;
  overflow: auto;
  padding: 0px 14px;
`;

const TodoContainer = styled.div`
  margin-top: 10px;
  padding: 10px 47px 0px 47px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 200px;
  overflow-y: auto;
`;
