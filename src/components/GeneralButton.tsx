import { color, font } from "@/styles";
import styled from "@emotion/styled";

interface IGeneralButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isCancel?: boolean;
}
const GeneralButton = ({
  children,
  isCancel = false,
  ...buttonProps
}: IGeneralButton) => {
  return (
    <Container {...buttonProps} isCancel={isCancel}>
      {children}
    </Container>
  );
};
export default GeneralButton;

const Container = styled.button<{
  isCancel: boolean;
}>`
  padding: 13px;
  border-radius: 4px;
  color: ${color.white};
  width: 100%;

  ${font.titleMedium}
  background-color: ${({ isCancel }) =>
    isCancel ? color.red30 : color.primary20};
`;
