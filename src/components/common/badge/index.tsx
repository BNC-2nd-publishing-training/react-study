import * as _ from "./style";
import { BadgeProps } from "./type";

const Badge = ({ label, count }: BadgeProps) => {
  return (
    <_.Container>
      <_.BadgeContainer>
        <_.Count>{count}</_.Count>
      </_.BadgeContainer>
      <_.Text>{label}</_.Text>
    </_.Container>
  );
};

export default Badge;
