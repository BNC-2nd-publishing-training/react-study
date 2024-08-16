export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
