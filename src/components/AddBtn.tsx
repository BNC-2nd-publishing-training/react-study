import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { GrAdd } from "react-icons/gr";

const AddButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Container {...props}>
        <GrAdd/>
    </Container>
  );
};
export default AddButton;

const Container = styled.button`
  width:  calc(${theme.font.titleLarge.fontSize} + 20px);
  height: calc(${theme.font.titleLarge.fontSize} + 20px);
  padding: 11px 12px;
  background-color: ${theme.color.primary20};
  border-radius: 12px 0px 12px 12px;
  box-shadow: 0px 2px 10px 0px rgba(98, 60, 231, 0.5);
  color: ${theme.color.white};
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`;