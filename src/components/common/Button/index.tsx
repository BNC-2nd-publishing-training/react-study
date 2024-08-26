import { ButtonProps } from "./type";
import * as S from "./style";

const Button = ({
  onClick,
  disabled = false,
  text,
  width,
  height,
  color,
}: ButtonProps) => {
  return (
    <S.Button
      onClick={onClick}
      disabled={disabled}
      width={width}
      height={height}
      color={color}
    >
      {text}
    </S.Button>
  );
};

export default Button;
