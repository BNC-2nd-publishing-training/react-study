import { color, font } from "@/styles";
import styled from "@emotion/styled";

interface IGeneralButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isCancel?: boolean;
  width?: string;
}
const GeneralButton = ({
  isCancel = false,
  width = "100%",
  ...buttonProps
}: IGeneralButton) => {
  return (
    <Container
      type="button"
      {...buttonProps}
      isCancel={isCancel}
      width={width}
    />
  );
};
export default GeneralButton;

const Container = styled.button<{
  isCancel: boolean;
  width: string;
}>`
  padding: 13px;
  border-radius: 4px;
  color: ${color.white};
  width: ${({ width }) => width};

  ${font.titleMedium}
  background-color: ${({ isCancel }) =>
    isCancel ? color.red30 : color.primary20};
`;
