import * as s from "./style";
import NavButton from "@/components/common/navButton";
import { TodoListProps } from "./type";
import { useCallback } from "react";
import List from "@/components/common/list";

const TodoList = ({ todoList: a, setTodoList, nowNav }: TodoListProps) => {
  const filteredTodoList = a
    .map((item, idx) => ({ ...item, originalIdx: idx }))
    .filter((item) =>
      nowNav === "All" ? item.status !== "Waiting" : item.status === nowNav
    );

  const handleToggle = useCallback(
    (id: number) => {
      setTodoList(
        a.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [a]
  );

  return (
    <>
      <NavButton
        selected={nowNav === "All"}
        title="All"
        count={TodoList.length}
      ></NavButton>
      <s.Container>
        {filteredTodoList.map((item) => (
          <List status={item.status} todo={item} onToggle={handleToggle}></List>
        ))}
      </s.Container>
    </>
  );
};

export default TodoList;
