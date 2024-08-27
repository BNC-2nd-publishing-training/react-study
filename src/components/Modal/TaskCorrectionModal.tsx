import React from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import 'bootstrap-icons/font/bootstrap-icons.css';
import SelectBox from "@/components/Button/SelectButton";

import DeleteButton from "@/components/Button/DeleteButton";
import UpdateButton from "@/components/Button/UpdateButton";

interface CorrectionTaskProps {
    task: Task | null;
    onClose: () => void;
}

const CorrectionTask: React.FC<CorrectionTaskProps> = ({ task, onClose }) => {
    if (!task) return null;

    return (
        <Container>
            <Back onClick={onClose} />  {/* 모달 외부 클릭 시 닫히도록 설정 */}
            <Modal>
                <ModalTitle>Create Task</ModalTitle>
                <CloseButton onClick={onClose}>
                    <i className="bi bi-x-lg CloseButton"></i>
                </CloseButton>

                <TaskContent>
                    <input
                        type="text"
                        placeholder="작업 내용을 입력하세요"
                        value={task.title}
                        readOnly
                    />
                </TaskContent>
                <SelectBox />

                <Buttons>
                    <DeleteButton />
                    <UpdateButton />
                </Buttons>
            </Modal>
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
    z-index: 9999;  /* 우선순위 높이기 */
`;

const Modal = styled.div`
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
    z-index: 10000;  /* Container보다 더 높은 z-index */
`;

const Back = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;  /* 모달보다 뒤에 위치 */
`;

const ModalTitle = styled.div`
    margin-top: 45px;
    font-size: ${theme.font.titleLarge};
`;

const CloseButton = styled.div`
    position: absolute;
    top: 18%;
    right: 35%;
    cursor: pointer;
`;

const TaskContent = styled.div`
    width: 480px;
    height: 130px;
    margin-top: 40px;
    box-sizing: border-box;

    input {
        width: 100%;
        height: 100%;
        padding: 8px;
        border: 2px solid ${theme.color.gray30};
        font-size: 16px;
    }

    input::placeholder {
        text-align: top;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px 66px;
    box-sizing: border-box;
    margin-top: 33%;
    margin-left: 3%;
`;

export default CorrectionTask;
