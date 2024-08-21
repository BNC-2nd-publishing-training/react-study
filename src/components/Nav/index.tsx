import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface NavItemProps {
  isActive: boolean;
}

function Nav() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = ["All", "In Review"];

  return (
    <NavContainer>
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          isActive={index === activeIndex}
          onClick={() => setActiveIndex(index)}
        >
          {item}
        </NavItem>
      ))}
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
`;

const NavItem = styled.div<NavItemProps>`
  width: 122px;
  height: 90px;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#000000" : "#898C9D")};
  font-weight: ${theme.font.textMedium.fontWeight};
  font-size: ${theme.font.textMedium.fontSize};
  line-height: ${theme.font.textMedium.lineHeight};

  &:after {
    content: "";
    display: block;
    width: 122px;
    height: 1px;
    background-color: ${(props) =>
      props.isActive ? "#623CE7" : "transparent"};
    margin-top: 38px;
    transition: background-color 0.3s ease;
  }
`;

export default Nav;
