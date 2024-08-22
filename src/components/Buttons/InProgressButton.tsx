import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
interface InProgressButtonProps {
  onClick: () => void;
}
const InProgress = () => {
  return <InProgressButton>In progress</InProgressButton>;
};
const InProgressButton = styled.button`
  font-weight: ${theme.font.titleMedium.fontWeight};
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.black};
  margin-top: 6.9%;
`;
export default InProgress;
