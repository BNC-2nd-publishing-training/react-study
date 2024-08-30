import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

import { DeleteButtonProps } from "@/utils/interfaces/DeleteButtonProps";

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
    return (
        <Container>
            <DeleteBtn onClick={onClick}>Task 삭제하기</DeleteBtn>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DeleteBtn = styled.button`
    width: 230px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: ${theme.color.red30};
    color: white;
    cursor: pointer;
`;

export default DeleteButton;
