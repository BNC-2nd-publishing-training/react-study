import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const Main = () => {
    return(
        <MainStyle>
        </MainStyle>
    );
};

const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    h1{
        font-size: ${theme.font.titleLarge.fontSize};
        font-weight: ${theme.font.titleMedium.fontWeight};
    }
`;

export default Main;