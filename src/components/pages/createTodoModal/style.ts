import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const Header = styled.p`
  ${theme.font.titleLarge};
  display: flex;
  justify-content: center;
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

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;
