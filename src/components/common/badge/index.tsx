import * as S from "./style";
import { BadgeProps } from "./type";

const Badge = ({ label, count, selected }: BadgeProps) => {
  return (
    <>
      <S.Container>
        <S.BadgeContainer>
          {label === "All" && <S.Count>{count}</S.Count>}
        </S.BadgeContainer>
        <S.Text selected={selected}>{label}</S.Text>
      </S.Container>
    </>
  );
};

export default Badge;
