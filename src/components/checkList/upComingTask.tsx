import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import CheckList from "./checkListContainer";
const UpComingTask = () => {
  return (
    <Container>
      <p>Upcoming Tasks</p>
      <CheckList />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 92px;
  width: 422px;
  height: 230px;
  overflow-y: scroll;
  p {
    font-size: ${theme.font.titleMedium.fontSize};
    font-weight: ${theme.font.titleMedium.fontWeight};
    line-height: ${theme.font.titleMedium.lineHeight};
    color: ${theme.color.gray60};
  }
`;

export default UpComingTask;
