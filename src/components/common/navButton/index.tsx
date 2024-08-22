import { NavButtonProps } from "./type";
import * as S from "./style";
import Badge from "../badge";

const NavButton = ({
  selected = false,
  title,
  count = 0,
  ...props
}: NavButtonProps) => {
  return (
    <S.NavButtonContainer selected={selected} {...props}>
      <S.TitleContent selected={selected}>
        <Badge count={count} label={title} />
      </S.TitleContent>
    </S.NavButtonContainer>
  );
};

export default NavButton;
