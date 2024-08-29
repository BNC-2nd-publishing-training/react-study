import { Todo } from "@/components/common/todoitem/type";

export interface UpcommingTodoListProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  onTodoClick: (todo: Todo) => void;
}
