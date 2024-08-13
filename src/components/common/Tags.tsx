import styled from "@emotion/styled";
import { ListStatusType } from "@/utils/interfaces/listStatusType";
import { color, font } from "@/styles";
import { css } from "@emotion/react";

interface ITagsProps {
  status: ListStatusType;
}
const Tags = ({ status }: ITagsProps) => {
  return (
    <Container status={status}>
      <span>{status}</span>
    </Container>
  );
};

export default Tags;

const Container = styled.div<{
  status: ListStatusType;
}>`
  width: 75px;
  padding: 7px 0px;
  border-radius: 14px;

  ${font.textSmall}
  text-align: center;

  ${({ status }) =>
    status === "Approved"
      ? css`
          background-color: ${color.primary10};
          color: ${color.primary20};
        `
      : status === "In progress"
      ? css`
          background-color: ${color.green10};
          color: ${color.green30};
        `
      : status === "In review"
      ? css`
          background-color: ${color.red10};
          color: ${color.red30};
        `
      : status === "Waiting" &&
        css`
          background-color: ${color.gray10};
          color: ${color.gray60};
        `}
`;
