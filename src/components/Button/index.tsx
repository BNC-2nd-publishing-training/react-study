import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  backgroundColor?: string;
}

const Button = ({
  width = "480px",
  backgroundColor = theme.color.primary20,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      width={width}
      backgroundColor={backgroundColor}
      {...props}
    />
  );
};

const ButtonContainer = styled.button<{
  width?: string;
  backgroundColor?: string;
}>`
  margin-top: 20px;
  width: ${({ width }) => width};
  height: 50px;
  border-radius: 4px;
  font-size: ${theme.font.titleMedium.fontSize};
  font-weight: ${theme.font.titleMedium.fontWeight};
  line-height: ${theme.font.titleMedium.lineHeight};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${theme.color.white};
`;

export default Button;
