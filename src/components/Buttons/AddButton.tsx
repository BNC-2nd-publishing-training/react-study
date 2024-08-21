import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

export default function NewButton() {
  return <StyledNewButton>Task 추가하기</StyledNewButton>;
}

const StyledNewButton = styled.button`
  width: 480px;
  height: 50px;
  border-radius: 4px;
  margin-top: 110px;
  justify-content: center;
  background-color: #623ce7;
  font-weight: ${theme.font.titleMedium.fontWeight};
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.white};
`;
