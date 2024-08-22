import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const All = () => {
  return <AllButton>All</AllButton>;
};
const AllButton = styled.button`
  font-size: ${theme.font.textMedium};
  font-weight: ${theme.font.textSmall.fontWeight};
  color: ${theme.color.gray50};
  margin-top: 7%;
  margin-left: 39%;
`;
export default All;
