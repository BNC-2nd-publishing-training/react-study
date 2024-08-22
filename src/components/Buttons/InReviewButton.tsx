import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
interface InReviewButtonProps {
  onClick: () => void;
}
const InReview = () => {
  return <InReviewButton>In review</InReviewButton>;
};
const InReviewButton = styled.button`
  font-weight: ${theme.font.titleMedium.fontWeight};
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.black};
  margin-top: 6.9%;
`;
export default InReview;
