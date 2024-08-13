import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";
import { TagStatus } from "./type";
import styled from "@emotion/styled";

export const TagContainer = styled.div<{ status: TagStatus }>`
  width: 75px;
  height: 28px;
  border-radius: 14px;
  text-align: center;
  ${({ status }) => {
    switch (status) {
      case "approved":
        return css`
          color: ${theme.color.primary20};
          background-color: ${theme.color.primary10};
        `;

      case "in-progress":
        return css`
          color: ${theme.color.green10};
          background-color: ${theme.color.green30};
        `;

      case "in-review":
        return css`
          color: ${theme.color.red10};
          background-color: ${theme.color.red30};
        `;

      case "waiting":
        return css`
          color: ${theme.color.gray10};
          background-color: ${theme.color.gray60};
        `;
    }
  }}
`;
