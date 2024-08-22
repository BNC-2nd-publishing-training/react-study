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

  ${({ status }) => {
    switch (status) {
      case "Approved":
        return css`
          background-color: ${color.primary10};
          color: ${color.primary20};
        `;
      case "In progress":
        return css`
          background-color: ${color.green10};
          color: ${color.green30};
        `;
      case "In review":
        return css`
          background-color: ${color.red10};
          color: ${color.red30};
        `;
      case "Waiting":
        return css`
          background-color: ${color.gray10};
          color: ${color.gray60};
        `;
    }
  }}
`;
