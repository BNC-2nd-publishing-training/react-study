import styled from "@emotion/styled";

import { ListStatusType } from "@/utils/interfaces/listStatusType";
import CheckBox from "./CheckBox";
import Tags from "./Tags";

interface IListProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status: ListStatusType;
  label: string;
}
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
