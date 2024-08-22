import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import { List, NavButton } from "@/components/common";

import { Storage } from "@/utils/functions/localstoarge";
import { ListStatusType } from "@/utils/interfaces/ListStatusType";
import { ITodoListType } from "@/utils/interfaces/TodoListType";
import { changeCheckStatus } from "@/utils/functions/changeTodoList";

type NavListType = ListStatusType | "All";
const navList: NavListType[] = ["All", "Approved", "In progress", "In review"];

interface ITodoListProps {
  todoList: ITodoListType[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodoListType[]>>;
}

const TodoList = ({ todoList, setTodoList }: ITodoListProps) => {
  const NavType = Storage.getItem("type") || "All";
  const [nowNav, setNowNav] = useState(NavType);

  const onClickNav = (data: NavListType) => {
    setNowNav(data);
  };

  useEffect(() => {
    Storage.setItem("type", nowNav);
  }, [nowNav]);

  const filteredTodoList = todoList
    .map((item, idx) => ({ ...item, originalIdx: idx }))
    .filter((item) =>
      nowNav === "All" ? item.status !== "Waiting" : item.status === nowNav
    );

  const allTodoListLen = todoList.filter(
    (item) => item.status !== "Waiting"
  ).length;

  return (
    <Container>
      <NavFilter>
        {navList.map((nav) => (
          <NavButton
            title={nav}
            key={nav}
            selected={nowNav === nav}
            onClick={() => onClickNav(nav)}
            count={allTodoListLen}
          />
        ))}
      </NavFilter>
      <TodoContainer>
        {filteredTodoList.map((v, idx) => (
          <List
            key={idx + v.label + v.status}
            {...v}
            onChange={() =>
              changeCheckStatus({
                todoList,
                setTodoList,
                idx: v.originalIdx,
              })
            }
            todoList={todoList}
            setTodoList={setTodoList}
            idx={v.originalIdx}
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
  justify-content: center;
  margin-bottom: 40px;
`;

const TodoContainer = styled.div`
  padding: 0px 47px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 258px;
  overflow-y: auto;
`;
