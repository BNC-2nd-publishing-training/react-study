import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import NewButton from "@/components/Buttons/AddNewButton";

interface TodayTasksSectionProps {
  onAddButtonClick: () => void;
}

const AddButtonGroup = ({ onAddButtonClick }: TodayTasksSectionProps) => {
  return (
    <SectionWrapper>
      <Text1>Today Task</Text1>
      <NewButton onClick={onAddButtonClick} />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  position: absolute;
  top: 8%;
  left: 36%;
  margin-left: auto;
`;

const Text1 = styled.div`
  color: ${theme.color.black};
  font-size: ${theme.font.titleLarge.fontSize};
  font-weight: ${theme.font.titleLarge.fontWeight};
`;

export default AddButtonGroup;
