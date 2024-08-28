import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface UpdateButtonProps {
    onClick?: () => void;
}

const UpdateButton: React.FC<UpdateButtonProps> = ({ onClick }) => {
    return (
        <Container>
            <UpdateBtn onClick={onClick}>Task 수정하기</UpdateBtn>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const UpdateBtn = styled.button`
    width: 230px;
    height: 50px;
    border-radius: 5px;
    background-color: ${theme.color.primary20};
    color: white;
    cursor: pointer;
`;

export default UpdateButton;
