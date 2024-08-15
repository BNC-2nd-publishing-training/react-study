import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
// import { theme } from "@/emotion/styled";

// import ModalDefaultType from "@/utils/interfaces/ModalDefaultType";

interface ModalDefaultType {
    onClickAddButton: () => void;
}

function AddTodoModal({
    onClickAddButton,
    children,
}: PropsWithChildren<ModalDefaultType>) {
    return (
        <Container>
            <TaskModal>{children}</TaskModal>
            <Back
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();

                    if (onClickAddButton) {
                        onClickAddButton();
                    }
                }}
            />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;

    top: 0;
    left: 0;
`;

const TaskModal = styled.dialog`
    width: 630px;
    height: 645px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
    box-sizing: border-box;
    background-color: white;
    z-index: 10000;
`;

const Back = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.2);
`;

export default AddTodoModal;