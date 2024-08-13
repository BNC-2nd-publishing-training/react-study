import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import AddTodoBtn from "./Button/AddTodoBtn";

const Header = () => {
    return(
        <HeaderStyle>
            <h1>Today Task</h1>
            <AddTodoBtn/>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.div`
    display: flex;
    flex-derection: row;
    justify-content: space-between;
    align-items: center;
    padding: 50px 50px 0 50px;

    h1{
        font-size: ${theme.font.titleLarge.fontSize};
        font-weight: ${theme.font.titleMedium.fontWeight};
    }
`;

export default Header;