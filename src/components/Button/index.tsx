import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
}

const Button = ({ width = "480px", ...props }: ButtonProps) => {
  return <ButtonContainer width={width} {...props} />;
};

const ButtonContainer = styled.button<{ width?: string }>`
  width: ${({ width }) => width};
  height: 50px;
  border-radius: 4px;
  font-family: ${theme.font.titleMedium};
  background-color: ${theme.color.primary20};
  color: ${theme.color.white};
`;

export default Button;
