import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const CreateTaskButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.primary20};
  width: 52px;
  height: 51px;
  border-radius: 12px 0px 12px 12px;
  box-shadow: 0px 2px 10px 0px #623ce780;
  border: none;
  cursor: pointer;
`;
