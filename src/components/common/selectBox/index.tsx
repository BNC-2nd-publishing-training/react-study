import { useState } from "react";
import { SelectBoxProps } from "./type";
import * as S from "./style";
import { TagStatus } from "../tag/type";

const SelectBox = ({
  placeholder,
  options = [],
  selectedValue,
  onChange,
}: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: TagStatus) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <S.Container>
      <S.SelecteValue isOpen={isOpen} onClick={handleToggleDropdown}>
        {selectedValue ? (
          selectedValue
        ) : (
          <S.Placeholder>{placeholder}</S.Placeholder>
        )}
      </S.SelecteValue>
      {isOpen && (
        <S.SelecteBox>
          {options.map((option) => (
            <S.Option
              key={option}
              onClick={() => handleOptionClick(option as TagStatus)}
            >
              {option}
            </S.Option>
          ))}
        </S.SelecteBox>
      )}
    </S.Container>
  );
};

export default SelectBox;
