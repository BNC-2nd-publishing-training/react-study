import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

export interface IDropdownProps {
  width?: string;
  height?: string;
  placeholder?: string;
  options: string[];
  onChange?: (selectedOption: string) => void;
}

const Dropdown = ({
  width = "480px",
  height = "42px",
  placeholder = "Task의 상태를 선택해주세요",
  options,
  onChange,
}: IDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(placeholder);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <DropdownWrapper width={width} height={height}>
      <DropdownContainer
        width={width}
        height={height}
        onClick={handleToggle}
        isOpen={isOpen}
      >
        <SelectedOption isSelected={selectedOption !== placeholder}>
          {selectedOption}
        </SelectedOption>
      </DropdownContainer>
      {isOpen && (
        <OptionsContainer>
          {options.map((option, index) => (
            <Option
              key={option}
              onClick={() => handleSelect(option)}
              isLast={index === options.length - 1}
            >
              {option}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div<{ width?: string; height?: string }>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${theme.font.textMedium.fontSize};
  line-height: ${theme.font.textMedium.lineHeight};
`;

const DropdownContainer = styled.div<{
  width?: string;
  height?: string;
  isOpen: boolean;
}>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${theme.color.gray40};
  border-radius: ${({ isOpen }) => (isOpen ? "6px 6px 0 0" : "6px")};
  background-color: ${theme.color.white};
  display: flex;
  align-items: center;
  padding: 0 14px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
`;

const SelectedOption = styled.div<{ isSelected: boolean }>`
  flex: 1;
  color: ${({ isSelected }) =>
    isSelected ? theme.color.black : theme.color.gray40};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid ${theme.color.gray40};
  border-top: none;
  border-radius: 0 0 6px 6px;
  background-color: ${theme.color.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  z-index: 10;
`;

const Option = styled.div<{ isLast: boolean }>`
  padding: 8px 14px;
  color: ${theme.color.black};
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.gray10};
  }
`;

export default Dropdown;
