import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Badge from "../Badge";

interface NavProps {
  badgeValues: number[];
  onNavClick: (status: string) => void; // 상태 변경 핸들러
}

const labels = ["All", "In review", "In progress", "Approved"];

const Nav = ({ badgeValues, onNavClick }: NavProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number, status: string) => {
    setActiveIndex(index);
    onNavClick(status); // 상태 변경 핸들러 호출
  };

  return (
    <NavContainer>
      {labels.map((label, index) => (
        <NavItem
          key={index}
          isActive={index === activeIndex}
          onClick={() => handleClick(index, label)}
        >
          <BadgeWrapper>
            {badgeValues[index] > 0 && <Badge value={badgeValues[index]} />}
            <span>{label}</span>
          </BadgeWrapper>
          <Line isActive={index === activeIndex} />
        </NavItem>
      ))}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 517px;
  height: 90px;
`;

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 122px;
  height: 90px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#000000" : "#898C9D")};
  font-weight: ${theme.font.textMedium.fontWeight};
  font-size: ${theme.font.textMedium.fontSize};
  line-height: ${theme.font.textMedium.lineHeight};
  position: relative;
`;

const Line = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 1px;
  background-color: ${(props) => (props.isActive ? "#623CE7" : "transparent")};
  position: absolute;
  bottom: 0;
  transition: background-color 0.3s ease;
`;

export default Nav;
