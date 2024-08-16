import { ListProps } from "./type";
import * as _ from "./style";
import TodoItem from "../todoitem";
import Tag from "../tag";

const List = ({ status, todos, onToggle }: ListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <_.ListContainer key={todo.id}>
          <TodoItem todo={todo} onToggle={onToggle} />
          <Tag status={status} />
        </_.ListContainer>
      ))}
    </div>
  );
};

export default List;
