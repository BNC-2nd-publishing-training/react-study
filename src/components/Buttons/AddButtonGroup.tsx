import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import NewButton from "@/components/Buttons/AddNewButton";
import { todayTasksSectionProps } from "@/utils/interfaces/todayTasksSectionProps";

const AddButtonGroup = ({ onAddButtonClick }: todayTasksSectionProps) => {
  return (
    <SectionWrapper>
      <Text1>Today Task</Text1>
      <NewButton
        onClick={onAddButtonClick}
        type="button"
        aria-label="task 추가하기"
      />
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
