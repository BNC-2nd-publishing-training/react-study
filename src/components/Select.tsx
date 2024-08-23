import { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

interface SelectProps {
  options: string[];
  placeholder: string;
  onChange: (selectedOption: string) => void;
}

const SelectContainer = styled.div`
  width: 480px;
  font-size: ${theme.font.textMedium.fontSize};
  font-weight: ${theme.font.textMedium.fontWeight};
  line-height: ${theme.font.textMedium.lineHeight};
`;

const SelectHeader = styled.div<{ isOpen: boolean; isSelected: boolean }>`
  width: 100%;
  height: 42px;
  padding: 0 16px;
  border: 0.5px solid ${theme.color.gray40};
  border-radius: ${props => props.isOpen ? '4px 4px 0 0' : '4px'};
  color: ${props => props.isSelected ? theme.color.black : theme.color.gray60};
  background-color: ${theme.color.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const OptionsContainer = styled.div`
  border: 0.5px solid ${theme.color.gray40};
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: ${theme.color.white};
`;

const Option = styled.div`
  padding: 11.5px 16px;
  cursor: pointer;
  font-size: ${theme.font.textMedium.fontSize};
  font-weight: ${theme.font.textMedium.fontWeight};
  line-height: ${theme.font.textMedium.lineHeight};
  color: ${theme.color.black};
  &:hover {
    background-color: ${theme.color.gray10};
  }
`;

function Select({ options, placeholder, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <SelectContainer>
      <SelectHeader 
        onClick={handleToggle} 
        isOpen={isOpen} 
        isSelected={!!selectedOption}
      >
        {selectedOption || placeholder}
      </SelectHeader>
      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <Option key={option} onClick={() => handleSelect(option)}>
              {option}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </SelectContainer>
  );
}

export default Select;