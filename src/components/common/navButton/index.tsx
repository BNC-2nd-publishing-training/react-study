import { NavButtonProps } from "./type";
import * as _ from "./style";
import Badge from "../badge";

const NavButton = ({
  selected = false,
  title,
  count,
  ...props
}: NavButtonProps) => {
  return (
    <_.NavButtonContainer selected={selected} {...props}>
      {count && <Badge count={count} label={title} />}
      <_.TitleContent selected={selected}>{title}</_.TitleContent>
    </_.NavButtonContainer>
  );
};

export default NavButton;
