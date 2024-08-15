import { useState, useCallback } from "react";
import AddTodoModal from "@/components/addTodoButton";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Main() {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const onClickPlusButton = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    return (
        <Container>
            <TaskContainer>
                <TaskHeader>
                    <Title>Today Task</Title>
                    {isOpenModal && (
                        <AddTodoModal onClickPlusButton={onClickPlusButton}>
                            <ModalTitle>Create Task</ModalTitle>
                            <CloseButton><i className="bi bi-x-lg CloseIcon"></i></CloseButton>
                            <TaskContent>
                                <input type="text" placeholder="Task 제목을 입력해주세요"></input>
                            </TaskContent>
                            <TaskType>
                                <input type="text" placeholder="Task의 상태를 선택해주세요"></input>
                            </TaskType>
                            <AddButton>
                                <button>Task 추가하기</button>
                            </AddButton>
                        </AddTodoModal>
                    )}
                    <PlusButton onClick={onClickPlusButton}><i className="bi bi-plus-lg PlusIcon"></i></PlusButton>
                </TaskHeader>

                <TaskBody>
                    <TaskCounter>10</TaskCounter>
                    <TaskStatus>ALL</TaskStatus>
                    <ShowType>In Review</ShowType>
                </TaskBody>
            </TaskContainer>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${theme.color.gray30};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TaskContainer = styled.div`
    background-color: ${theme.color.white};
    width: 517px;
    height: 840px;
    border-radius: 10px;
`;

const TaskHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 50px;
`;

const Title = styled.div`
    color: ${theme.color.black};
    font-size: ${theme.font.titleLarge.fontSize};
    font-weight: ${theme.font.titleLarge.fontWeight};
    line-height: ${theme.font.titleLarge.lineHeight};
    padding-top: 20px;
`;

const PlusButton = styled.div`
    color: white;
    background-color: #623CE7; 
    width: 52px;
    height: 51px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0 0 10px #623CE7;
    corsur: pointer;

    .PlusIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        corsur: pointer;
    }

    &:hover {
        transform: translateY(-1px);
    }
`;

const TaskBody = styled.div`
    display: flex;
    margin-top: -20px;
    margin-left: 48px;
`;

const TaskCounter = styled.div`
    width: 29px;
    height: 20px;
    background-color: ${theme.color.primary10};
    text-align: center;
    border-radius: 10px;
    font-size: 12px;
    color: ${theme.color.primary20};
`;

const TaskStatus = styled.div`

`;

const ShowType = styled.div`
`;

const ModalTitle = styled.p`
    font-size: 1.5rem;
    margin-top: 30px;
`;

const CloseButton = styled.button`
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
        border: 10px soild gray;
    }

    input::placeholder {
        text-align: top;
    }
`;

const TaskType = styled.div`
    width: 480px;
    height: 42px;
    margin-top: 30px;
    
    input {
        width: 100%;
        height: 100%;
    }
`;

const AddButton = styled.div`
    width: 480px;
    height: 50px;
    border-radius: 5px;
    background-color: ${theme.color.primary20};
    corsur: pointer;
    text-align: center;
    margin-top: 210px;

    button {
        color: white;
        height: 100%;
    }
`;

export default Main;