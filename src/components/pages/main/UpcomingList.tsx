import styled from "@emotion/styled";
import { List } from "@/components/common";
import { color, font } from "@/styles";
import { ITodoListType } from "@/utils/interfaces/TodoListType";
import { changeCheckStatus } from "@/utils/functions/changeTodoList";

interface IUpcomingList {
  todoList: ITodoListType[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodoListType[]>>;
}
const UpcomingList = ({ todoList, setTodoList }: IUpcomingList) => {
  const filteredTodoList = todoList
    .map((item, idx) => ({ ...item, originalIdx: idx }))
    .filter((item) => item.status === "Waiting");
  return (
    <Container>
      <h1>Upcoming Tasks</h1>
      <ListContainer>
        {filteredTodoList.map((item) => (
          <List
            {...item}
            key={item.originalIdx + item.label + item.status}
            onChange={() =>
              changeCheckStatus({
                todoList,
                setTodoList,
                idx: item.originalIdx,
              })
            }
            todoList={todoList}
            setTodoList={setTodoList}
            idx={item.originalIdx}
          />
        ))}
      </ListContainer>
    </Container>
  );
};

export default UpcomingList;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 47px;
  h1 {
    ${font.titleMedium}
    color:${color.gray60};
    margin-bottom: 40px;
  }
  margin-top: 40px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 166px;
  overflow-y: scroll;
`;
