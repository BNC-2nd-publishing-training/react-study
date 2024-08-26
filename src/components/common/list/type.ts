import { Todo } from "../todoitem/type";
import { TagStatus } from "../tag/type";

export interface ListProps {
  status: TagStatus;
  todo: Todo;
  onToggle: (id: number) => void;
  onClick: (todo: Todo) => void;
}
