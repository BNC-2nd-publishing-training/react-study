import { NavButtonProps } from "./type";
import * as _ from "./style";
import Badge from "../badge";
import { ListProps } from "../list/type";

const NavButton = ({
  selected = false,
  title,
  count = 0,
  ...props
}: NavButtonProps) => {
  return (
    <_.NavButtonContainer selected={selected} {...props}>
      <_.TitleContent selected={selected}>
        <Badge count={count} label={title} />
      </_.TitleContent>
    </_.NavButtonContainer>
  );
};

export default NavButton;
