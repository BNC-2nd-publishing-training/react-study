import styled from "@emotion/styled";

import CheckBox from "./CheckBox";
import Tags from "./Tags";
import { ITodoListType } from "@/utils/interfaces/TodoListType";
import { useState } from "react";
import { UpdateTask } from "../pages/main";

interface IListProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ITodoListType {
  todoList: ITodoListType[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodoListType[]>>;
  idx?: number;
}

const List = ({
  status,
  label,
  isChecked,
  onChange,
  setTodoList,
  todoList,
  idx,
  ...props
}: IListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <UpdateTask
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        status={status}
        label={label}
        todoList={todoList}
        setTodoList={setTodoList}
        idx={idx}
      />
      <Container onClick={() => setIsOpen(true)}>
        <CheckBox
          label={label}
          isChecked={isChecked}
          onChange={onChange}
          {...props}
        />
        <Tags status={status} />
      </Container>
    </>
  );
};

export default List;

const Container = styled.li`
  width: 100%;

  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
