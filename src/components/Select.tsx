import { useState } from "react";
import styled from "@emotion/styled";

import { color, font } from "@/styles";
import { css } from "@emotion/react";

interface ISelectProps {
  defaultText: string;
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Select = ({ defaultText, options, value, setValue }: ISelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChangeValue = (value: string) => {
    setValue(value);
    setIsOpen(false);
  };

  return (
    <Container>
      <ValueContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        {value ? <p>{value}</p> : <DefaultLabel>{defaultText}</DefaultLabel>}
      </ValueContainer>
      {isOpen && (
        <OptionContainer>
          {options.map((o) => (
            <ValueList onClick={() => onChangeValue(o)}>{o}</ValueList>
          ))}
        </OptionContainer>
      )}
    </Container>
  );
};

export default Select;

const ValueContainerStyle = css`
  padding: 11px 16px;
  width: 100%;
  cursor: pointer;
`;
const Container = styled.div`
  position: relative;
  min-width: fit-content;
  width: 100%;
`;

const ValueContainer = styled.div<{ isOpen: boolean }>`
  ${ValueContainerStyle}
  border: 1px solid ${color.gray40};
  border-radius: ${({ isOpen }) => (isOpen ? "4px 4px 0px 0px" : "4px")};
`;
const ValueList = styled.li`
  ${ValueContainerStyle}
`;

const DefaultLabel = styled.label`
  ${font.textMedium}
  color:${color.gray40};
  white-space: nowrap;
`;

const OptionContainer = styled.ol`
  position: absolute;
  top: 45px;
  left: 0px;
  width: 100%;
  border: 1px solid ${color.gray40};
  border-radius: 0px 0px 4px 4px;
  background-color: ${color.white};
`;
