import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";
import { ButtonStyleProps } from "./type";

export const Button = styled.button<ButtonStyleProps>`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${theme.font.titleMedium};
  background-color: ${(props) => props.color};
  color: ${theme.color.white};
`;
