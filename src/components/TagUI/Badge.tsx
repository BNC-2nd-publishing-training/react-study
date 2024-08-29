import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { badgeProps } from "@/utils/interfaces/badgeProps";

const Badge = ({ count }: badgeProps) => {
  return (
    <BadgeWrapper>
      <BadgeNumber>{count}</BadgeNumber>
    </BadgeWrapper>
  );
};

const BadgeWrapper = styled.div`
  padding: 4px 8px 4px 8px;
  border-radius: 10px;
  height: fixed;
  background-color: ${theme.color.primary10};
`;

const BadgeNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13px;
  height: 14px;
  color: ${theme.color.primary20};
  font-size: ${theme.font.textSmall.fontSize};
`;

export default Badge;
