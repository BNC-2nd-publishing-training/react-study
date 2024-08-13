import { color, font } from "@/styles";
import styled from "@emotion/styled";

interface IBadgeProps {
  count: number;
}

const Badge = ({ count }: IBadgeProps) => {
  return <Container>{count}</Container>;
};

export default Badge;

const Container = styled.span`
  ${font.textSmall}

  background-color: ${color.primary10};
  color: ${color.primary20};
  padding: 4px 8px;
  border-radius: 10px;
`;
