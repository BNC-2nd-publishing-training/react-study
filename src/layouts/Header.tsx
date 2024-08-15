import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import AddBtn from "@/components/AddBtn";

const Header = () => {
    return(
        <HeaderStyle>
            <h1>Today Task</h1>
            <AddBtn/>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4vw 3vw 0;
    h1{
        font-size: ${theme.font.titleLarge.fontSize};
        font-weight: ${theme.font.titleMedium.fontWeight};
    }
`;

export default Header;