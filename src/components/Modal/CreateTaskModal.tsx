// Task 생성창 컴포넌트 (기능 완성)
// Header와 AddButton 컴포넌트 분리하기 (중요!)

import { useState, useCallback } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import AddTask from "@/components/Button/addTaskButton";

import 'bootstrap-icons/font/bootstrap-icons.css'

function CreateTask() {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const onClickPlusButton = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    return (
        <Container>
            <TaskHeader>
                <Title>Today Task</Title>
                {isOpenModal && (
                    <AddTask onClickPlusButton={onClickPlusButton}>
                        <ModalTitle>Create Task</ModalTitle>
                        <CloseButton><i className="bi bi-x-lg CloseButton"></i></CloseButton>
                        <TaskContent>
                            <input type="text" placeholder="Task 제목을 입력해주세요"></input>
                        </TaskContent>
                        <AddButton>
                            <button>Task 추가하기</button>
                        </AddButton>
                    </AddTask>
                )}
                <PlusButton onClick={onClickPlusButton}><i className="bi bi-plus-lg PlusButton"></i></PlusButton>
            </TaskHeader>
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
    color: ${theme.color.black};
    font-size: ${theme.font.titleLarge.fontSize};
    font-weight: ${theme.font.titleLarge.fontWeight};
    line-height: ${theme.font.titleLarge.lineHeight};
    padding-top: 20px;
`;

const PlusButton = styled.div`
    width: 52px;
    height: 51px;
    color: white;
    background-color: ${theme.color.primary20};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 0 10px ${theme.color.primary20};
    corsur: pointer;

    .PlusButton {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        corsur: pointer;
    }

    &:hover {
        transform: translateY(-1px);
    }
`;

const ModalTitle = styled.div`
    margin-top: 30px;
    font-size: 1.5rem;
`;

const CloseButton = styled.div`
    position: absolute;
    right: 20px;
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
    margin-top: 210px;
    background-color: ${theme.color.primary20};
    border-radius: 5px;
    corsur: pointer;

    button {
        height: 100%;
        color: white;
    }
`;

export default CreateTask;