import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
}

const Button = ({ width = "480px", type, ...props }: ButtonProps) => {
  return <ButtonContainer width={width} type={type} {...props} />;
};

const ButtonContainer = styled.button<{ width?: string }>`
  width: ${({ width }) => width};
  height: 50px;
  border-radius: 4px;
  font-size: ${theme.font.titleMedium.fontSize};
  font-weight: ${theme.font.titleMedium.fontWeight};
  line-height: ${theme.font.titleMedium.lineHeight};
  background-color: ${theme.color.primary20};
  color: ${theme.color.white};
`;

export default Button;
