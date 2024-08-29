import React from "react";
import styled from "@emotion/styled";
import Badge from "@/components/TagUI/Badge";
import { theme } from "@/styles/theme";
import { badgeButtonGroupProps } from "@/utils/interfaces/badgeButtonGroupProps";

const BadgeButtonGroup = ({
  totalTasksCount,
  selectedTag,
  onButtonClick,
}: badgeButtonGroupProps) => {
  return (
    <Container>
      <BadgeAndButtonsWrapper>
        <BadgeAndAllWrapper isSelected={selectedTag === "All"}>
          <Badge count={totalTasksCount} />
          <StyledButton
            buttonType="All"
            isSelected={selectedTag === "All"}
            onClick={() => onButtonClick("All")}
            aria-label="전체보기">
            All
          </StyledButton>
        </BadgeAndAllWrapper>
        <StyledButton
          buttonType="In review"
          isSelected={selectedTag === "In review"}
          onClick={() => onButtonClick("In review")}
          aria-label="In review 태그 보기">
          In review
        </StyledButton>
        <StyledButton
          buttonType="In progress"
          isSelected={selectedTag === "In progress"}
          onClick={() => onButtonClick("In progress")}
          aria-label="In progress 태그 보기">
          In progress
        </StyledButton>
        <StyledButton
          buttonType="Waiting"
          isSelected={selectedTag === "Waiting"}
          onClick={() => onButtonClick("Waiting")}
          aria-label="Waiting 태그 보기">
          Waiting
        </StyledButton>
      </BadgeAndButtonsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7%;
  margin-left: 36vw;
`;

const BadgeAndButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const BadgeAndAllWrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled.button<{ isSelected: boolean; buttonType: string }>`
  font-size: ${theme.font.textMedium};
  font-weight: ${theme.font.textSmall.fontWeight};
  color: ${({ buttonType }) =>
    buttonType === "All" ? theme.color.gray50 : "black"};
  padding: 0 5px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: ${({ buttonType }) => (buttonType === "All" ? "-47px" : "-20px")};
    bottom: -20px;
    width: ${({ buttonType }) =>
      buttonType === "All" ? "calc(100% + 60px)" : "calc(100% + 40px)"};
    height: 1px;
    background-color: ${({ isSelected }) =>
      isSelected ? theme.color.primary20 : "transparent"};
  }
`;

export default BadgeButtonGroup;
