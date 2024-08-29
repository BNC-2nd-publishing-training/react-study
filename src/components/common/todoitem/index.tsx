import * as S from "./style";
import { TodoItemProps } from "./type";

const TodoItem = ({ todo, onToggle }: TodoItemProps) => {
  return (
    <S.TodoItemContainer>
      <S.CheckBox
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <S.TodoText>{todo.text}</S.TodoText>
    </S.TodoItemContainer>
  );
};

export default TodoItem;
