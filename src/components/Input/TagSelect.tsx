import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

type DropdownProps = {
  onSelect: (value: string) => void;
  initialTag?: string;
};

const TagDropdown = ({ onSelect, initialTag }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(initialTag || "");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <Container>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedValue || "Task의 상태를 선택해주세요"}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {["In review", "In progress", "Approved", "Waiting"].map((status) => (
            <DropdownItem key={status} onClick={() => handleSelect(status)}>
              {status}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 480px;
`;

const DropdownButton = styled.div`
  margin-top: 40%;
  width: 100%;
  height: 42px;
  border-radius: 4px;
  border: 1px solid gray;
  padding: 10px;
  color: ${theme.color.gray60};
  font-size: ${theme.font.textMedium.fontSize};

  position: relative;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;

  width: 100%;
  border: 1px solid ${theme.color.gray40};
`;

const DropdownItem = styled.div`
  padding: 10px 16px;
`;

export default TagDropdown;
