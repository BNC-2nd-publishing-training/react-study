import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import CheckList from "./checkListContainer";
import { List } from "../constants";

const UpComingTask = () => {
  const upcomingTodos = List.filter((item) => item.status === "Waiting");

  return (
    <>
      <Title>Upcoming Tasks</Title>
      <Container>
        <CheckList items={upcomingTodos} />
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 40x;
  width: 422px;
  height: 230px;
overflow-y: scroll;

`;

const Title = styled.div`
  margin-top: 92px;
  font-size: ${theme.font.titleMedium.fontSize};
  font-weight: ${theme.font.titleMedium.fontWeight};
  line-height: ${theme.font.titleMedium.lineHeight};
  color: ${theme.color.gray60};
`;

export default UpComingTask;
