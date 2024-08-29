import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";
import { TagStatus } from "./type";
import styled from "@emotion/styled";

export const TagContainer = styled.div<{ status: TagStatus }>`
  display: flex;
  width: 75px;
  height: 28px;
  border-radius: 14px;
  ${theme.font.textSmall};
  text-align: center;
  align-items: center;
  justify-content: center;
  ${({ status }) => {
    switch (status) {
      case "Approved":
        return css`
          color: ${theme.color.primary20};
          background-color: ${theme.color.primary10};
        `;

      case "In progress":
        return css`
          color: ${theme.color.green30};
          background-color: ${theme.color.green10};
        `;

      case "In review":
        return css`
          color: ${theme.color.red30};
          background-color: ${theme.color.red10};
        `;

      case "Waiting":
        return css`
          color: ${theme.color.gray10};
          background-color: ${theme.color.gray60};
        `;
    }
  }}
`;
