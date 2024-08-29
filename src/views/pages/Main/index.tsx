import { useState } from "react";
import TodoList from "@/components/pages/todoList";
import TodoUpcomingList from "@/components/pages/todoUpcomingList";
import CreateTaskButton from "@/components/common/createTaskButton";
import CreateTodoModal from "@/components/pages/createTodoModal";
import UpdateTodoModal from "@/components/pages/updateTodoModal";
import { Todo } from "@/components/common/todoitem/type";
import { TodoStatusType } from "@/components/pages/todoList/type";
import * as S from "./style";

const Main = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [upcomingTodo, setUpComingTodo] = useState<Todo[]>([]);
  const [nowNav, setNowNav] = useState<TodoStatusType>("All");
  const [createTodoModal, setCreateTodoModal] = useState<boolean>(false);
  const [selectedTodo, setSelecteTodo] = useState<Todo | null>(null);
  const [updateTodoModal, setUpdateTodoModal] = useState<boolean>(false);
  const [nextId, setNextId] = useState<number>(1);

  const handleAddTodo = (todo: Todo) => {
    const todoWithId = { ...todo, id: nextId };
    setNextId(nextId + 1);

    if (todoWithId.status === "Waiting") {
      setUpComingTodo((prev) => [...prev, todoWithId]);
    } else {
      setTodo((prev) => [...prev, todoWithId]);
    }
    setCreateTodoModal(false);
  };

  const handleUpdateTodo = (updateTodo: Todo) => {
    if (updateTodo.status === "Waiting") {
      setUpComingTodo((todo) =>
        todo.map((todo) => (todo.id === updateTodo.id ? updateTodo : todo))
      );
    } else {
      setTodo((todo) =>
        todo.map((todo) => (todo.id === updateTodo.id ? updateTodo : todo))
      );
    }
    setUpdateTodoModal(false);
    setSelecteTodo(null);
  };

  const handleDeleteTodo = (id: number) => {
    setTodo((todo) => todo.filter((todo) => todo.id !== id));
    setUpComingTodo((todo) => todo.filter((todo) => todo.id !== id));
    setSelecteTodo(null);
  };

  const handleTodoClick = (todo: Todo) => {
    setSelecteTodo(todo);
    setUpdateTodoModal(true);
  };

  return (
    <S.Container>
      <S.MainContainer>
        <S.Header>
          <p>Today Task</p>
          <CreateTaskButton onClick={() => setCreateTodoModal(true)} />
        </S.Header>
        <TodoList
          todoList={todo}
          setTodoList={setTodo}
          nowNav={nowNav}
          setNowNav={setNowNav}
          onTodoClick={handleTodoClick}
        />
        <TodoUpcomingList
          todoList={upcomingTodo}
          setTodoList={setUpComingTodo}
          onTodoClick={handleTodoClick}
        />
      </S.MainContainer>

      {createTodoModal && (
        <CreateTodoModal
          createTodoModal={createTodoModal}
          setCreateTodoModal={setCreateTodoModal}
          createTodo={handleAddTodo}
        />
      )}

      {selectedTodo && updateTodoModal && (
        <UpdateTodoModal
          updateTodoModal={updateTodoModal}
          setUpdateTodoModal={setUpdateTodoModal}
          selecteTodo={selectedTodo}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
        />
      )}
    </S.Container>
  );
};

export default Main;
