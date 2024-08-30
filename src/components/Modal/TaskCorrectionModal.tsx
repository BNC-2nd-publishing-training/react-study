import React, { useState } from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import 'bootstrap-icons/font/bootstrap-icons.css';
import SelectType from "@/components/Button/SelectButton";
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
    const [selectedType, setSelectedType] = useState<string>(task?.type || 'Task 상태를 선택해주세요');

    if (!task) return null;

    const handleUpdate = () => {
        if (task) {
            onUpdate({ ...task, title: editedTitle, type: selectedType });
            onClose();
        }
    };

    const handleDelete = () => {
        if (task) {
            onDelete(task.id);
            onClose();
        }
    };

    return (
        <Container>
            <Back onClick={onClose} />
            <Modal>
                <ModalTitle>Create Task</ModalTitle>
                <CloseButton onClick={onClose}>
                    <i className="bi bi-x-lg CloseButton"></i>
                </CloseButton>

                <TaskContent>
                    <textarea
                        className="TaskContentInput"
                        placeholder="작업 내용을 입력하세요"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                </TaskContent>
                
                <SelectType
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />

                <Buttons>
                    <DeleteButton onClick={handleDelete} /> 
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

    .TaskContentInput {
        width: 100%;
        height: 100%;
        padding: 16px; /* 원하는 패딩 값으로 조정 */
        border: 2px solid ${theme.color.gray30};
        font-size: 16px;
        line-height: 1.5; /* 줄 높이 조정 */
        resize: none;
        box-sizing: border-box; /* 패딩이 요소의 크기에 포함되도록 설정 */
        
        /* 포커스 스타일 제거 */
        outline: none; /* 기본 아웃라인 제거 */
        border-color: ${theme.color.gray30}; /* 포커스 시 변하지 않도록 설정 */
        box-shadow: none; /* 포커스 시 그림자 제거 */
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px 61px;
    box-sizing: border-box;
    margin-top: 33%;
    margin-left: 0%;
    z-index: 10000;
`;

export default CorrectionTask;
