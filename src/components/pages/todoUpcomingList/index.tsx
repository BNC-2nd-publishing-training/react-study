import { useState } from "react";
import * as S from "./style";
import { UpcommingTodoListProps } from "./type";
import List from "@/components/common/list";
import UpdateTodoModal from "../updateTodoModal";
import { Todo } from "@/components/common/todoitem/type";

const TodoUpcomingList = ({
  todoList,
  setTodoList,
}: UpcommingTodoListProps) => {
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [updateTodoModal, setUpdateTodoModal] = useState<boolean>(false);

  const handleToggle = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

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
      <S.Header>
        <p>Upcoming Tasks</p>
      </S.Header>
      <S.Container>
        {todoList.map((item) => (
          <List
            key={item.id}
            status={item.status}
            todo={item}
            onToggle={handleToggle}
            onClick={() => handleTodoClick(item)}
          />
        ))}
      </S.Container>

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

export default TodoUpcomingList;
