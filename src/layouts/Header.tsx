import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { PopupProps } from '@/utils/interfaces/PopupType';
import AddBtn from "@/components/AddBtn";

const Header: React.FC<PopupProps> = ({ onClose }) => {
    return (
        <HeaderStyle>
            <h1>Today Task</h1>
            <AddBtn onClick={onClose} aria-label="Add Task" />
        </HeaderStyle>
    );
};

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 4vw 3vw 0;

    h1 {
        font-size: ${theme.font.titleLarge.fontSize};
        font-weight: ${theme.font.titleLarge.fontWeight};
    }
`;

export default Header;
