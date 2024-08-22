import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
interface ApprovedButtonProps {
  onClick: () => void;
}
const Approved = () => {
  return <ApprovedButton>Approved</ApprovedButton>;
};
const ApprovedButton = styled.button`
  font-weight: ${theme.font.titleMedium.fontWeight};
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.black};
  margin-top: 6.9%;
`;

export default Approved;
