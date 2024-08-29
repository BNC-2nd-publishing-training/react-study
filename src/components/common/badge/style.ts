import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 20px;
  background-color: ${theme.color.primary10};
  border-radius: 10px;
  color: ${theme.color.primary20};
  font-size: 12px;
`;

export const Text = styled.p<{ selected: boolean }>`
  ${theme.font.textMedium};
  color: ${({ selected }) =>
    selected ? theme.color.black : theme.color.gray50};
`;
