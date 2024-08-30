// Task 모달 레이아웃

import { PropsWithChildren } from "react";
import styled from "@emotion/styled";

const TaskModalLayout = ({ children }: PropsWithChildren) => {
    return (
        <Container>
            <CreateTaskModal>{children}</CreateTaskModal>
            <Back />
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
`;

const CreateTaskModal = styled.div`
    width: 630px;
    height: 645px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
    box-sizing: border-box;
    z-index: 10000;
`;

const Back = styled.div`

`;

export default TaskModalLayout;