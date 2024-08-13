import { List } from "@/components/common";
import { color, font } from "@/styles";
import { ITodoListType } from "@/utils/interfaces/TodoListType";
import styled from "@emotion/styled";
const DummyData: ITodoListType[] = [
  {
    status: "Approved",
    label: "간지나게 숨쉬기",
  },
  {
    status: "In progress",
    label: "간지나게 숨쉬기",
  },
  {
    status: "In review",
    label: "간지나게 숨쉬기",
  },
  {
    status: "Waiting",
    label: "간지나게 숨쉬기",
  },
];
const UpcomingList = () => {
  return (
    <Container>
      <h1>Upcoming Tasks</h1>
      <ListContainer>
        {DummyData.map((v, idx) => (
          <List
            status={v.status}
            label={v.label}
            key={idx + v.label + v.status}
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
  gap: 40px;
  h1 {
    ${font.titleMedium}
    color:${color.gray60}
  }
  margin-top: 40px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 200px;
  overflow-y: scroll;
`;
