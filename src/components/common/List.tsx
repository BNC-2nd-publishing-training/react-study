import styled from "@emotion/styled";

import CheckBox from "./CheckBox";
import Tags from "./Tags";
import { ITodoListType } from "@/utils/interfaces/TodoListType";

interface IListProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ITodoListType {}

const List = ({ status, label, ...props }: IListProps) => {
  return (
    <Container>
      <CheckBox label={label} {...props} />
      <Tags status={status} />
    </Container>
  );
};

export default List;

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
