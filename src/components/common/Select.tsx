import { useState } from "react";
import styled from "@emotion/styled";

import { color, font } from "@/styles";
import { css } from "@emotion/react";
import { ListStatusType } from "@/utils/interfaces/ListStatusType";

interface ISelectProps {
  defaultText: string;
  options: ListStatusType[];
  value: ListStatusType;
  setValue: React.Dispatch<React.SetStateAction<ListStatusType>>;
}

const Select = ({ defaultText, options, value, setValue }: ISelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChangeValue = (value: ListStatusType) => {
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
            <ValueList onClick={() => onChangeValue(o)} key={o}>
              {o}
            </ValueList>
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
  height: 42px;
`;
const Container = styled.div`
  position: relative;
  min-width: fit-content;
  width: 100%;
`;

const ValueContainer = styled.button<{ isOpen: boolean }>`
  ${ValueContainerStyle}
  text-align: start;
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

const OptionContainer = styled.ul`
  position: absolute;
  top: 42px;
  left: 0px;
  width: 100%;
  border: solid ${color.gray40};
  border-radius: 0px 0px 4px 4px;
  border-width: 0px 1px 1px 1px;
  background-color: ${color.white};
`;
