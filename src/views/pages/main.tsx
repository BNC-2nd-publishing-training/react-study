import styled from "@emotion/styled";
import { AddButton } from "@/components/common";
import { TodoList, UpcomingList } from "@/components/pages/main";
import { color, font } from "@/styles";

const MainPage = () => {
  return (
    <Background>
      <Container>
        <Header>
          <h1>Today Task</h1>
          <AddButton />
        </Header>
        <TodoList />
        <UpcomingList />
      </Container>
    </Background>
  );
};

export default MainPage;

const Background = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: ${color.gray30};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.main`
  width: 517px;
  background-color: ${color.white};
  border: solid ${color.gray20};
  border-width: 0px 1px;
  border-radius: 10px;
  padding: 30px 0px;

  display: flex;
  flex-direction: column;
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 100%;
  }
`;

const Header = styled.header`
  padding: 0px 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    ${font.titleLarge}
  }
`;
