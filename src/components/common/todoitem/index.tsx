import * as _ from "./style";
import { TodoItemProps } from "./type";

const TodoItem = ({ todo, onToggle }: TodoItemProps) => {
  console.log("Rendering TodoItem:", todo);

  return (
    <_.TodoItemContainer>
      <_.CheckboxContainer
        checked={todo.completed}
        onClick={() => onToggle(todo.id)}
      >
        <_.HiddenCheckbox
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </_.CheckboxContainer>
      <_.TodoText>{todo.text}</_.TodoText>
    </_.TodoItemContainer>
  );
};

export default TodoItem;
