import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

function DeleteButton() {
    return (
        <Container>
            <DeleteBtn>Task 삭제하기</DeleteBtn>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const DeleteBtn = styled.button`
    width: 230px;
    height: 50px;
    border-radius: 5px;
    background-color: ${theme.color.red30};
    color: white;
`;

export default DeleteButton;