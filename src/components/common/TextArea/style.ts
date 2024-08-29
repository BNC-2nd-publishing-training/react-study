import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

export const TextAreaContainer = styled.textarea`
  width: 480px;
  height: 130px;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid ${theme.color.gray40};
  background-color: ${theme.color.white};
  color: ${theme.color.black};
  ${theme.font.textMedium};
  resize: none;
  outline: none;

  &::placeholder {
    color: ${theme.color.gray40};
  }
`;
