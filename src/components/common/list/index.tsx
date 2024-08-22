import { ListProps } from "./type";
import * as S from "./style";
import TodoItem from "../todoitem";
import Tag from "../tag";

const List = ({ status, todo, onToggle }: ListProps) => {
  return (
    <S.ListContainer>
      <TodoItem todo={todo} onToggle={onToggle} />
      <Tag status={status} />
    </S.ListContainer>
  );
};

export default List;
