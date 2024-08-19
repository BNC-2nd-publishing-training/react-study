import { ListProps } from "./type";
import * as _ from "./style";
import TodoItem from "../todoitem";
import Tag from "../tag";

const List = ({ status, todo, onToggle }: ListProps) => {
  return (
    <div>
      <_.ListContainer>
        <TodoItem todo={todo} onToggle={onToggle} />
        <Tag status={status} />
      </_.ListContainer>
    </div>
  );
};

export default List;
