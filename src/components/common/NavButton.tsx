import { color, font } from "@/styles";
import { ListStatusType } from "@/utils/interfaces/listStatusType";
import styled from "@emotion/styled";
import Badge from "./Badge";

interface INavButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  title: ListStatusType | "All";
  count?: number;
}

const NavButton = ({
  selected = false,
  title,
  count,
  ...props
}: INavButton) => {
  return (
    <Container selected={selected} {...props}>
      {title === "All" && count && <Badge count={count} />}
      <TitleContent selected={selected}>{title}</TitleContent>
    </Container>
  );
};

export default NavButton;

const Container = styled.button<{
  selected: boolean;
}>`
  width: 122px;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-bottom: ${({ selected }) =>
    selected ? `1px solid ${color.primary20}` : "1px solid transparent"};
`;

const TitleContent = styled.span<{
  selected: boolean;
}>`
  ${font.textMedium}
  color:${({ selected }) => (selected ? color.black : color.gray50)}
`;
