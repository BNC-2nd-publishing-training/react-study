import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const NavButtonContainer = styled.button<{ selected: boolean }>`
  width: 122px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid
    ${({ selected }) => (selected ? theme.color.primary20 : "transparent")};
`;

export const TitleContent = styled.div`
  display: flex;
  justify-content: center;
`;
