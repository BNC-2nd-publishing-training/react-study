import styled from "@emotion/styled";
import CheckListContainer from ".";
import { ListItem } from "../constants";

interface CheckListProps {
  items: ListItem[];
}

const CheckList = ({ items }: CheckListProps) => {
  return (
    <Container>
      {items.map((item) => (
        <CheckListContainer
          key={item.id}
          title={item.title}
          status={item.status}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
  width: 423px;
  height: 258px;
  overflow-y: scroll;
`;
export default CheckList;
