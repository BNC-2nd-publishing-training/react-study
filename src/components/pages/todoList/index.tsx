import * as S from "./style";
import NavButton from "@/components/common/navButton";
import { TodoListProps } from "./type";
import { useCallback, useState } from "react";
import List from "@/components/common/list";
import { TodoStatusType } from "./type";
import { Todo } from "@/components/common/todoitem/type";
import UpdateTodoModal from "../updateTodoModal";

const statusList: TodoStatusType[] = [
  "All",
  "Approved",
  "In progress",
  "In review",
];

const TodoList = ({
  todoList,
  setTodoList,
  nowNav,
  setNowNav,
}: TodoListProps) => {
  const [updateTodoModal, setUpdateTodoModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const filteredTodoList = todoList
    .map((item, idx) => ({ ...item, originalIdx: idx }))
    .filter((item) =>
      nowNav === "All" ? item.status !== "Waiting" : item.status === nowNav
    );

  const handleToggle = useCallback(
    (id: number) => {
      setTodoList(
        todoList.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [todoList, setTodoList]
  );

  const handleTodoClick = (todo: Todo) => {
    setSelectedTodo(todo);
    setUpdateTodoModal(true);
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    setTodoList(
      todoList.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    setUpdateTodoModal(false);
    setSelectedTodo(null);
  };

  const handleDeleteTodo = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    setUpdateTodoModal(false);
    setSelectedTodo(null);
  };

  return (
    <>
      <S.ButtonContainer>
        {statusList.map((status) => (
          <NavButton
            key={status}
            selected={nowNav === status}
            title={status}
            count={todoList.length}
            onClick={() => setNowNav(status)}
          />
        ))}
      </S.ButtonContainer>
      <S.ListContainer>
        {filteredTodoList.map((item) => (
          <List
            key={item.id}
            status={item.status}
            todo={item}
            onToggle={handleToggle}
            onClick={() => handleTodoClick(item)}
          />
        ))}
      </S.ListContainer>

      {selectedTodo && (
        <UpdateTodoModal
          updateTodoModal={updateTodoModal}
          setUpdateTodoModal={setUpdateTodoModal}
          selecteTodo={selectedTodo}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
        />
      )}
    </>
  );
};

export default TodoList;
