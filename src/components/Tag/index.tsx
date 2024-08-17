import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface TagProps {
  status?: "Approved" | "In progress" | "In review" | "Waiting";
}
const statusColors = {
  Approved: {
    background: theme.color.primary10,
    color: theme.color.primary20,
  },
  "In progress": {
    background: theme.color.green10,
    color: theme.color.green30,
  },
  "In review": {
    background: theme.color.red10,
    color: theme.color.red30,
  },
  Waiting: {
    background: theme.color.gray10,
    color: theme.color.gray50,
  },
};
const Tag = ({ status = "Waiting" }: TagProps) => {
  const statusStyle = statusColors[status];

  return (
    <TagContainer background={statusStyle.background} color={statusStyle.color}>
      {status}
    </TagContainer>
  );
};

const TagContainer = styled.div<{ background: string; color: string }>`
  ${theme.font.textSmall};
  width: 75px;
  height: 28px;
  border-radius: 14px;
  padding: 7px 0px 7px 0px;
  gap: 10px;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  text-align: center;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Tag;
