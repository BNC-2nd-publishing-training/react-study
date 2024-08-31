import styled from "@emotion/styled";

import Tag from "@/components/Tag";
import Checkbox from "..";

interface IListProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: "Approved" | "In progress" | "In review" | "Waiting";
  label: string;
}
const CheckboxList = ({ status, label, ...props }: IListProps) => {
  return (
    <Container>
      <Checkbox label={label} {...props} />
      <Tag status={status} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export default CheckboxList;
