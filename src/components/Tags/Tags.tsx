import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const Tags = () => {
  const tags = [
    {
      label: "In review ",
      bgColor: theme.color.green10,
      textColor: theme.color.green30,
    },
    {
      label: "In progress",
      bgColor: theme.color.red10,
      textColor: theme.color.red30,
    },
    {
      label: "Approved",
      bgColor: theme.color.primary10,
      textColor: theme.color.primary20,
    },
    {
      label: "Waiting",
      bgColor: theme.color.gray10,
      textColor: theme.color.gray60,
    },
  ];
  return (
    <TagsContainer>
      {tags.map((tag, index) => (
        <Tag key={index} bgColor={tag.bgColor} textColor={tag.textColor}>
          {tag.label}
        </Tag>
      ))}
    </TagsContainer>
  );
};
const Tag = styled.div<{ bgColor: string; textColor: string }>`
  padding-top: 6px;
  border-radius: 14px;
  text-align: center;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  font-size: ${theme.font.textSmall.fontSize};
  font-weight: ${theme.font.textSmall.fontWeight};
  width: 75px;
  height: 28px;
`;

const TagsContainer = styled.div`
  gap: 8px;
`;
export default Tags;
