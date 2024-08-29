import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.p`
  ${theme.font.titleLarge};
  margin-top: 60px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 200px;
`;
