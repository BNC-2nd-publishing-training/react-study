import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

const BadgeContainer = styled.div`
  display: inline-block;
  background-color: ${theme.color.primary10};
  color: ${theme.color.primary20};
  padding: 4px 8px;
  border-radius: 10px;
  font-size: ${theme.font.textSmall.fontSize};
  font-weight: ${theme.font.textSmall.fontWeight};
  line-height: ${theme.font.textSmall.lineHeight};
  text-align: center;
  margin-right: 8px;
`;

interface BadgeProps {
  number: number;
}

function Badge({ number }: BadgeProps) {
  return <BadgeContainer>{number}</BadgeContainer>;
}

export default Badge;
