import React, { useState } from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import 'bootstrap-icons/font/bootstrap-icons.css';
import SelectBox from "@/components/Button/SelectButton";
import DeleteButton from "@/components/Button/DeleteButton";
import UpdateButton from "@/components/Button/UpdateButton";

interface Task {
    id: number;
    title: string;
    type: string;
}

interface CorrectionTaskProps {
    task: Task | null;
    onClose: () => void;
    onUpdate: (updatedTask: Task) => void;
    onDelete: (taskId: number) => void;
}

const CorrectionTask: React.FC<CorrectionTaskProps> = ({ task, onClose, onUpdate, onDelete }) => {
    const [editedTitle, setEditedTitle] = useState<string>(task?.title || '');

    // 작업이 없으면 null을 반환
    if (!task) return null;

    // 업데이트 핸들러
    const handleUpdate = () => {
        if (task) {
            onUpdate({ ...task, title: editedTitle });
            onClose(); // 업데이트 후 모달 닫기
        }
    };

    // 삭제 핸들러
    const handleDelete = () => {
        if (task) {
            onDelete(task.id); // 삭제 핸들러 호출
            onClose(); // 삭제 후 모달 닫기
        }
    };

    return (
        <Container>
            <Back onClick={onClose} />
            <Modal>
                <ModalTitle>작업 수정하기</ModalTitle>
                <CloseButton onClick={onClose}>
                    <i className="bi bi-x-lg CloseButton"></i>
                </CloseButton>

                <TaskContent>
                    <input
                        type="text"
                        placeholder="작업 내용을 입력하세요"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                </TaskContent>
                <SelectBox />

                <Buttons>
                    <DeleteButton onClick={handleDelete} /> {/* 삭제 버튼에 핸들러 추가 */}
                    <UpdateButton onClick={handleUpdate} />
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
    z-index: 9999;
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
    z-index: 10000;
`;

const Back = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;
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
    z-index: 10000;
`;

export default CorrectionTask;
