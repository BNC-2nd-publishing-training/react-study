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
  background-color: ${theme.color.primary10};
  border-radius: 10px;
  width: 29px;
  height: 20px;
`;

export const Count = styled.div`
  color: ${theme.color.primary20};
  font-size: 12px;
`;

export const Text = styled.p`
  ${theme.font.textMedium};
  color: ${theme.color.gray50};
`;
