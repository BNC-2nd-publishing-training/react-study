import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import DefaultLayout from "./layouts/DefaultLayouts";

const App = () => {
    return (
        <Container>
            <h1>ToDoList</h1>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EBEFF8;  //배경색 설정

    h1 {
        color: ${theme.color.blue30};
        font-size: ${theme.font.titleLarge.fontSize};
        font-weight: ${theme.font.titleLarge.fontWeight};
        line-height: ${theme.font.titleLarge.lineHeight};
    }
`;

export default App;
