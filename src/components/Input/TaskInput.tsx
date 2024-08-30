import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { createTaskProps } from "@/utils/interfaces/createTaskProps";

const CreateTask: React.FC<createTaskProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <CreateTextArea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const CreateTextArea = styled.textarea`
  width: 480px;
  height: 130px;
  position: absolute;
  z-index: 1000;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px;
  border: 0.2px solid gray;
  padding: 10px;
  font-weight: ${theme.font.textMedium.fontWeight};
  font-size: ${theme.font.textMedium.fontSize};
  color: ${theme.color.gray60};
  resize: none;
  line-height: 1.2;
  ::placeholder {
    font-size: ${theme.font.textMedium.fontSize};
    color: ${theme.color.gray60};
    vertical-align: top;
  }
`;

export default CreateTask;
