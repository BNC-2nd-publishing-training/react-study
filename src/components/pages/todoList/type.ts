import { Todo } from "@/components/common/todoitem/type";

export type TodoStatusType = "Approved" | "In progress" | "In review" | "All";

export interface TodoListProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  nowNav: TodoStatusType;
  setNowNav: React.Dispatch<React.SetStateAction<TodoStatusType>>;
  onTodoClick: (todo: Todo) => void;
}
