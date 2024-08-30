// Task 수정 버튼

import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

import { UpdateButtonProps } from "@/utils/interfaces/UpdateButtonProps";

const UpdateButton = ({ onClick }: UpdateButtonProps) => {
    return (
        <Container>
            <UpdateBtn onClick={onClick}>Task 수정하기</UpdateBtn>
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

const UpdateBtn = styled.button`
    width: 230px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: ${theme.color.primary20};
    color: white;
    cursor: pointer;
`;

export default UpdateButton;
