import { AddIcon } from "@/assets/icons";
import { color } from "@/styles";
import styled from "@emotion/styled";

const AddButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Container {...props}>
      <AddIcon />
    </Container>
  );
};
export default AddButton;

const Container = styled.button`
  padding: 11px 12px;
  background-color: ${color.primary20};
  border-radius: 12px 0px 12px 12px;
  box-shadow: 0px 2px 10px 0px rgba(98, 60, 231, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;
