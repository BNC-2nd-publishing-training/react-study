import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Header from "./components/header";

const App = () => {
  return (
    <Container>
      <TodoBox>
        <Header />
      </TodoBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.gray30};
`;

const TodoBox = styled.div`
  width: 517px;
  height: 840px;
  background-color: ${theme.color.white};
  border-radius: 0 1px;
  padding: 52px 47px 32px 47px;
`;

export default App;
