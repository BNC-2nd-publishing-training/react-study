import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

export const TextAreaContainer = styled.textarea`
  width: 480px;
  height: 130px;
  padding-left: 16px;
  padding-top: 14px;
  border-radius: 6px;
  border: 1px solid ${theme.color.gray40};
  background-color: ${theme.color.white};
  ${theme.font.textMedium};
  color: ${theme.color.black};
  resize: none;
  outline: none;
`;
