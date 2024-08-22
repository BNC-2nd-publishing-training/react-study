import * as S from "./style";
import { BadgeProps } from "./type";

const Badge = ({ label, count }: BadgeProps) => {
  return (
    <S.Container>
      <S.BadgeContainer>
        {label === "All" && <S.Count>{count}</S.Count>}
      </S.BadgeContainer>
      <S.Text>{label}</S.Text>
    </S.Container>
  );
};

export default Badge;
