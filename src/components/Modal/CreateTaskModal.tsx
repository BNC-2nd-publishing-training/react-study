import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import 'bootstrap-icons/font/bootstrap-icons.css';

import AddTask from "@/components/Button/addTaskButton";
import SelectBox from "@/components/Button/SelectButton"; // Updated import
import { useTaskContext } from '@/components/Modal/CreateTask';

function CreateTask() {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const [taskInput, setTaskInput] = useState<string>('');
    const [selectedType, setSelectedType] = useState<string>('Task 상태를 선택해주세요'); // Default type
    const { addTask } = useTaskContext(); // Remove selectedType from context

    const onOpenModal = () => {
        setOpenModal(true);
    };

    const onCloseModal = () => {
        setOpenModal(false);
    };

    const addTaskHandler = () => {
        if (taskInput.trim() && selectedType !== 'Task 상태를 선택해주세요') { // Ensure a type is selected
            addTask(taskInput, selectedType);
            setTaskInput('');
            setSelectedType('Task 상태를 선택해주세요'); // Reset selected type
            onCloseModal();
        }
    };

    return (
        <Container>
            <TaskHeader>
                <Title>Today Task</Title>
                <PlusButton onClick={onOpenModal}>
                    <i className="bi bi-plus-lg PlusButton"></i>
                </PlusButton>
            </TaskHeader>
            {isOpenModal && (
                <Modal>
                    <AddTask onClickPlusButton={onOpenModal}>
                        <ModalTitle>Create Task</ModalTitle>
                        <CloseButton onClick={onCloseModal}>
                            <i className="bi bi-x-lg CloseButton"></i>
                        </CloseButton>
                        <TaskContent>
                            <input
                                type="text"
                                placeholder="Task 제목을 입력해주세요"
                                value={taskInput}
                                onChange={(e) => setTaskInput(e.target.value)}
                            />
                        </TaskContent>
                        <SelectBox 
                            selectedType={selectedType}
                            setSelectedType={setSelectedType}
                        />
                        <AddButton onClick={addTaskHandler}>
                            <button>Task 추가하기</button>
                        </AddButton>
                    </AddTask>
                </Modal>
            )}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const TaskHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 55px;
    gap: 200px;
`;

const Title = styled.div`
    padding-top: 20px;  
    color: ${theme.color.black};
    font-size: ${theme.font.titleLarge.fontSize};
    font-weight: ${theme.font.titleLarge.fontWeight};
    line-height: ${theme.font.titleLarge.lineHeight};
`;

const PlusButton = styled.div`
    width: 52px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 0 10px ${theme.color.primary20};
    background-color: ${theme.color.primary20};
    color: white;
    cursor: pointer;

    .PlusButton {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    &:hover {
        transform: translateY(-1px);
    }
`;

const Modal = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10001;
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
        border: 2px solid ${theme.color.gray30};
    }

    input::placeholder {
        text-align: top;
    }
`;

const AddButton = styled.div`
    width: 480px;
    height: 50px;
    text-align: center;
    margin-top: 235px;
    background-color: ${theme.color.primary20};
    border-radius: 5px;
    cursor: pointer;

    button {
        height: 100%;
        color: white;
    }
`;

export default CreateTask;
