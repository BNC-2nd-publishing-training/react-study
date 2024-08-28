import React from "react";
import styled from "@emotion/styled";
import Badge from "@/components/TagUI/Badge";
import { theme } from "@/styles/theme";

interface BadgeButtonGroupProps {
  totalTasksCount: number;
  selectedTag: string;
  onButtonClick: (tag: string) => void;
}

const BadgeButtonGroup = ({
  totalTasksCount,
  selectedTag,
  onButtonClick,
}: BadgeButtonGroupProps) => {
  return (
    <Container>
      <BadgeAndButtonsWrapper>
        <BadgeAndAllWrapper isSelected={selectedTag === "All"}>
          <Badge count={totalTasksCount} />
          <StyledButton
            type="All"
            isSelected={selectedTag === "All"}
            onClick={() => onButtonClick("All")}>
            All
          </StyledButton>
        </BadgeAndAllWrapper>
        <StyledButton
          type="In review"
          isSelected={selectedTag === "In review"}
          onClick={() => onButtonClick("In review")}>
          In review
        </StyledButton>
        <StyledButton
          type="In progress"
          isSelected={selectedTag === "In progress"}
          onClick={() => onButtonClick("In progress")}>
          In progress
        </StyledButton>
        <StyledButton
          type="Waiting"
          isSelected={selectedTag === "Waiting"}
          onClick={() => onButtonClick("Waiting")}>
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

const StyledButton = styled.button<{ isSelected: boolean; type: string }>`
  font-size: ${theme.font.textMedium};
  font-weight: ${theme.font.textSmall.fontWeight};
  color: ${({ type }) => (type === "All" ? theme.color.gray50 : "black")};
  padding: 0 5px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: ${({ type }) => (type === "All" ? "-47px" : "-20px")};
    bottom: -20px;
    width: ${({ type }) =>
      type === "All" ? "calc(100% + 60px)" : "calc(100% + 40px)"};
    height: 1px;
    background-color: ${({ isSelected }) =>
      isSelected ? theme.color.primary20 : "transparent"};
  }
`;

export default BadgeButtonGroup;
