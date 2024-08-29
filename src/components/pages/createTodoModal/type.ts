import { Todo } from "@/components/common/todoitem/type";
import { Dispatch, SetStateAction } from "react";

export interface CreateTodoModalProps {
  createTodoModal: boolean;
  setCreateTodoModal: Dispatch<SetStateAction<boolean>>;
  createTodo: (todo: Todo) => void;
}
