import { Todo } from "@/components/common/todoitem/type";
import { Dispatch, SetStateAction } from "react";

export interface UpdateTodoModalProps {
  updateTodoModal: boolean;
  setUpdateTodoModal: Dispatch<SetStateAction<boolean>>;
  selecteTodo: Todo | null;
  updateTodo: (updatedTask: Todo) => void;
  deleteTodo: (id: number) => void;
}
