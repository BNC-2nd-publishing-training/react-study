import { NavButtonProps } from "./type";
import * as S from "./style";
import Badge from "../badge";

const NavButton = ({
  selected = false,
  title,
  count = 0,
  onClick,
}: NavButtonProps) => {
  return (
    <S.NavButtonContainer selected={selected} onClick={onClick} type="button">
      <S.TitleContent>
        <Badge count={count} label={title} selected={selected} />
      </S.TitleContent>
    </S.NavButtonContainer>
  );
};

export default NavButton;
