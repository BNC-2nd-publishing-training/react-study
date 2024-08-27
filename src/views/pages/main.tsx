import styled from "@emotion/styled";
import { AddButton } from "@/components/common";
import { CreateTask, TodoList, UpcomingList } from "@/components/pages/main";
import { color, font } from "@/styles";
import { useEffect, useState } from "react";
import { Storage } from "@/utils/functions/localstoarge";
import { ITodoListType } from "@/utils/interfaces/TodoListType";

const MainPage = () => {
  const [createTaskOpen, setCreateTaskOpen] = useState<boolean>(false);
  const stoargeTodoList = JSON.parse(Storage.getItem("todoList") || "[]");

  const [todoList, setTodoList] = useState<ITodoListType[]>(stoargeTodoList);
  useEffect(() => {
    Storage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Background>
      <CreateTask
        isOpen={createTaskOpen}
        setIsOpen={setCreateTaskOpen}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <Container>
        <Header>
          <h1>Today Task</h1>
          <AddButton onClick={() => setCreateTaskOpen(true)} />
        </Header>
        <ListContainer>
          <TodoList todoList={todoList} setTodoList={setTodoList} />
          <UpcomingList todoList={todoList} setTodoList={setTodoList} />
        </ListContainer>
      </Container>
    </Background>
  );
};

export default MainPage;

const Background = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: ${color.gray30};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.main`
  width: 517px;
  height: 840px;
  background-color: ${color.white};
  border: solid ${color.gray20};
  border-width: 0px 1px;
  border-radius: 10px;
  padding: 52px 0px 32px 0px;

  display: flex;
  flex-direction: column;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Header = styled.header`
  padding: 0px 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    ${font.titleLarge}
  }
`;
