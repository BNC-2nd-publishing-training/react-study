import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  width: 480px;
  height: 42px;
  position: relative;
`;

export const SelecteValue = styled.div<{ isOpen: boolean }>`
  border: 1px solid ${theme.color.gray40};
  background-color: ${theme.color.white};
  display: flex;
  align-items: center;
  padding: 16px;
  width: 480px;
  height: 42px;
  border-radius: ${({ isOpen }) => (isOpen ? "4px 4px 0 0" : "4px")};
  position: relative;
`;

export const Placeholder = styled.span`
  ${theme.font.textMedium};
  color: ${theme.color.gray40};
`;

export const SelecteBox = styled.li`
  border: 1px solid ${theme.color.gray40};
  border-top: none;
  background-color: ${theme.color.white};
  width: 480px;
  border-radius: 0 0 4px 4px;
  position: absolute;
`;

export const Option = styled.ul`
  padding: 10px 16px;
  ${theme.font.textMedium};
  color: ${theme.color.black};
`;
