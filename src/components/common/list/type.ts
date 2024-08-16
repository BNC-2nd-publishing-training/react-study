import { TagStatus } from "../tag/type";
import { Todo } from "../todoitem/type";

export interface ListProps {
  status: TagStatus;
  onToggle: (id: number) => void;
  todos: Todo[];
}
