import { ListStatusType } from "../interfaces/ListStatusType";
import { ITodoListType } from "../interfaces/TodoListType";

interface IChangeCheckStatus {
  todoList: ITodoListType[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodoListType[]>>;
  idx?: number;
}
const changeCheckStatus = ({
  todoList,
  setTodoList,
  idx,
}: IChangeCheckStatus) => {
  const updatedTodoList = [...todoList];
  if (idx !== undefined && idx >= 0 && idx < updatedTodoList.length) {
    updatedTodoList[idx] = {
      ...updatedTodoList[idx],
      isChecked: !updatedTodoList[idx].isChecked,
    };

    setTodoList(updatedTodoList);
  }
};

interface IChangeTodoListProps extends IChangeCheckStatus {
  label: string;
  status: ListStatusType;
}

const changeTodoList = ({
  todoList,
  setTodoList,
  idx,
  label,
  status,
}: IChangeTodoListProps) => {
  if (idx !== undefined && idx >= 0 && idx < todoList.length) {
    const updatedTodoList = [...todoList];
    updatedTodoList[idx] = {
      ...updatedTodoList[idx],
      label,
      status,
    };
    setTodoList(updatedTodoList);
  }
};

const deleteTodoList = ({ todoList, setTodoList, idx }: IChangeCheckStatus) => {
  if (idx !== undefined && idx >= 0 && idx < todoList.length) {
    const updatedTodoList = todoList.filter((_, index) => index !== idx);

    setTodoList(updatedTodoList);
  }
};

export { changeCheckStatus, changeTodoList, deleteTodoList };
