import styled from "@emotion/styled";
import Tag from "@/components/Tag";
import Checkbox from "..";

interface IListProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: "Approved" | "In progress" | "In review" | "Waiting";
  label: string;
  onClick?: () => void;
}

const CheckboxList = ({ status, label, onClick, ...props }: IListProps) => {
  return (
    <Container onClick={onClick}>
      <Checkbox label={label} {...props} />
      <Tag status={status} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export default CheckboxList;
