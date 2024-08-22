import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

export const Header = styled.div`
  ${theme.font.titleMedium};
  color: ${theme.color.gray60};
  margin: 0px 47px;
`;

export const Container = styled.div`
  margin: 47px 40px 32px;
  height: 230px;
  overflow: auto;
`;
