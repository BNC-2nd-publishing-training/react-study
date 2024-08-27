import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";
import { ButtonStyleProps } from "./type";

export const Button = styled.button<ButtonStyleProps>`
  border: none;
  border-radius: 4px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${theme.font.titleMedium};
  background-color: ${(props) => props.color};
  color: ${theme.color.white};
`;
