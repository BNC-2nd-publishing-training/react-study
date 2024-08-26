import styled from "@emotion/styled";
import CheckListContainer from ".";
import { List } from "../constants";

interface CheckListProps {
  items: typeof List;
}

const CheckList = ({ items }: CheckListProps) => {
  return (
    <Container>
      {items.map((item, index) => (
        <CheckListContainer
          key={index}
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
