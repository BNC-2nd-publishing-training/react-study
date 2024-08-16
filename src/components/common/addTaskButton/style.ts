import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const AddTaskButton = styled.div`
  width: 480px;
  height: 50px;
  ${theme.font.textMedium};
  color: ${theme.color.white};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.primary20};
`;
