import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import DefaultLayout from "./layouts/DefaultLayouts";
import MainTodo from "./views/pages/MainTodo";

const App = () => {
    return (
        <Container>
            <MainTodo />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EBEFF8;  

    h1 {
        color: ${theme.color.blue30};
        font-size: ${theme.font.titleLarge.fontSize};
        font-weight: ${theme.font.titleLarge.fontWeight};
        line-height: ${theme.font.titleLarge.lineHeight};
    }
`;

export default App;
