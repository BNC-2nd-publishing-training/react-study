import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const Header = () => {
    return(
        <HeaderStyle>
            <h1>Today Task</h1>
            {/* 버튼 컴포넌트 필요 */}
            <button>+</button>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: ${theme.font.titleLarge.fontSize};
        font-weight: ${theme.font.titleMedium.fontWeight};
    }
`;

export default Header;