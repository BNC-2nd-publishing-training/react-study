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
  font-size: ${theme.font.textSmall.fontSize};
  font-weight: ${theme.font.textSmall.fontWeight};
  line-height: ${theme.font.textSmall.lineHeight};
  color: ${theme.color.primary20};
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  padding: 3px 8px;
  background-color: ${theme.color.primary10};
  margin-right: 8px;
`;

export default Badge;
