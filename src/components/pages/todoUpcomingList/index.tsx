import * as s from "./style";
import { UpcommingTodoListProps } from "./type";
import { useCallback } from "react";
import List from "@/components/common/list";

const TodoUpcomingList = ({
  todoList: a,
  setTodoList,
}: UpcommingTodoListProps) => {
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
      <s.Header>
        <p>Upcoming Tasks</p>
      </s.Header>
      <s.Container>
        {a.map((item) => (
          <List status={item.status} todo={item} onToggle={handleToggle}></List>
        ))}
      </s.Container>
    </>
  );
};

export default TodoUpcomingList;
