import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface InReviewButtonProps {
  isSelected: boolean;
  onClick: () => void;
}

const InReview = ({ isSelected, onClick }: InReviewButtonProps) => {
  return (
    <InReviewButton isSelected={isSelected} onClick={onClick}>
      In review
    </InReviewButton>
  );
};

const InReviewButton = styled.button<{ isSelected: boolean }>`
  font-weight: ${theme.font.titleMedium.fontWeight};
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${({ isSelected }) =>
    isSelected ? theme.color.black : theme.color.gray50};
  margin-top: 6.9%;
  background: none;
  border: none;
  cursor: pointer;
`;

export default InReview;
