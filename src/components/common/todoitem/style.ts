import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";
import checkImg from "../../../assets/images/check.png";

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const HiddenCheckbox = styled.input`
  display: none;
`;

export const CheckboxContainer = styled.div<{ checked?: boolean }>`
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
  border: 0.5px solid ${theme.color.gray60};
  border-radius: 4px;
  background-color: ${({ checked }) =>
    checked ? theme.color.primary20 : theme.color.white};
  background-image: ${({ checked }) =>
    checked
      ? "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22white%22%3E%3Cpath d=%22M9 16.17l-3.17-3.17L4 14.41l5 5 12-12-1.41-1.41L9 16.17z%22/%3E%3C/svg%3E')"
      : "none"};
  background-size: 14px 12px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TodoText = styled.span`
  ${theme.font.textMedium};
`;
