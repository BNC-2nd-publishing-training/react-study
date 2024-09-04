import React from 'react';
import styled from "@emotion/styled";
import Reset_Center from "@/styles/reset-center"
import { theme } from "@/styles/theme";
import { GrAdd } from "react-icons/gr";

const AddBtn = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Container {...props}>
        <GrAdd />
    </Container>
  );
};

const Container = styled(Reset_Center.withComponent('button'))`
  width: 52px;
  height: 51px;
  background-color: ${theme.color.primary20};
  border-radius: 12px 0px 12px 12px;
  box-shadow: 0px 2px 10px 0px rgba(98, 60, 231, 0.5);
  color: ${theme.color.white};
  font-size: ${theme.font.textMedium.fontSize};

  border: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

export default AddBtn;
