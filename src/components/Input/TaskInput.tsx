import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface CreateTaskProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function CreateTask({
  value,
  onChange,
  placeholder,
}: CreateTaskProps) {
  return (
    <CreateInput placeholder={placeholder} value={value} onChange={onChange} />
  );
}

const CreateInput = styled.input`
  width: 480px;
  height: 130px;
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px;
  border: 0.2px solid gray;
  padding: 20px;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  ::placeholder {
    vertical-align: top;
    font-weight: ${theme.font.textMedium.fontWeight};
    font-size: ${theme.font.textMedium.fontSize};
    color: ${theme.color.gray60};
  }
`;
