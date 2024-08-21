import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { FaCheck } from "react-icons/fa";

const Checkbox = () => {
  const [isChecked, check] = useState(false);
  const CheckboxChange = () => check(!isChecked);
  return (
    <CheckboxContainer isChecked={isChecked} onClick={CheckboxChange}>
      {isChecked && <FaCheck color="white" size={12} />}
      <HiddenCheckbox type="checkbox" checked={isChecked} readOnly />
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div<{ isChecked: boolean }>`
  width: 16px;
  height: 16px;
  background-color: ${({ isChecked }) =>
    isChecked ? theme.color.primary20 : theme.color.primary10};
  border-radius: 2px;
  border: 0.2px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

export default Checkbox;
