// Task 생성창 이동 버튼
// CreateTaskModal 컴포넌트에서 분리해서 들어올 것

import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";

import { ModalDefaultType } from "@/utils/interfaces/ModalDefaultType";

const AddTaskModal = ({
    onClickPlusButton,
    children,
}: PropsWithChildren<ModalDefaultType>) => {
    return (
        <Container>
            <CreateTaskModal>{children}</CreateTaskModal>
            <Back
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();

                    if (onClickPlusButton) {
                        onClickPlusButton();
                    }
                }}
            />
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
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
`;

export default AddTaskModal;