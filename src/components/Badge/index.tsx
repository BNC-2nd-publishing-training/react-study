import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export interface IBadgeProps {
  value: number;
}

const Badge = ({ value }: IBadgeProps) => {
  return <BadgeContainer>{value}</BadgeContainer>;
};

const BadgeContainer = styled.div`
  ${theme.font.textSmall};
  color: ${theme.color.primary20};
  width: 29px;
  height: 20px;
  border-radius: 10px;
  padding: 4px 8px;
  background-color: ${theme.color.primary10};
`;

export default Badge;
