import * as S from "./style";
import NavButton from "@/components/common/navButton";
import { TodoListProps } from "./type";
import { useCallback } from "react";
import List from "@/components/common/list";
import { TodoStatusType } from "./type";

const statusList: TodoStatusType[] = [
  "All",
  "Approved",
  "In progress",
  "In review",
  "Waiting",
];

const TodoTaskList = ({ todoList, setTodoList, nowNav }: TodoListProps) => {
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
    [todoList]
  );

  return (
    <>
      {statusList.map((status) => (
        <NavButton
          key={status} // key 속성으로 고유한 값을 제공
          selected={nowNav === status}
          title={status}
          count={
            status === "All"
              ? todoList.length
              : todoList.filter((todo) => todo.status === status).length
          }
        />
      ))}
      <S.Container>
        {filteredTodoList.map((item) => (
          <List status={item.status} todo={item} onToggle={handleToggle}></List>
        ))}
      </S.Container>
    </>
  );
};

export default TodoTaskList;
