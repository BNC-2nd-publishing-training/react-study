import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray30};
`;

export const MainContainer = styled.div`
  background-color: ${theme.color.white};
  width: 517px;
  height: 840px;
  border: solid ${theme.color.gray20};
  border-width: 0px 1px 0px 1px;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  margin: 52px 47px 0px 47px;
  justify-content: space-between;
  align-items: center;

  p {
    ${theme.font.titleLarge}
  }
`;
