import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const NavButtonContainer = styled.button<{ selected: boolean }>`
  width: 122px;
  height: 90px;
  display: felx;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid
    ${({ selected }) => (selected ? theme.color.primary20 : `none`)};
`;

export const TitleContent = styled.span<{ selected: boolean }>`
  ${theme.font.textMedium}
  color:${({ selected }) => (selected ? theme.color.black : theme.color.gray50)}
`;
