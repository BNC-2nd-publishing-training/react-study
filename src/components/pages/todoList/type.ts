import { Todo } from "@/components/common/todoitem/type";
import { TagStatus } from "@/components/common/tag/type";

export type TodoStatusType = TagStatus | "All";

export interface TodoListProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  nowNav: TodoStatusType;
}
