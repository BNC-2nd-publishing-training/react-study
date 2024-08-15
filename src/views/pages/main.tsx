import { useState, useCallback } from "react";
import AddTodoModal from "@/components/addTodoButton";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import 'bootstrap-icons/font/bootstrap-icons.css';

function OpenAddModal() {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const onClickAddButton = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    return (
        <Container>
            <TaskContainer>
                <TaskHeader>
                    <Title>Today Task</Title>
                    {isOpenModal && (
                        <AddTodoModal onClickAddButton={onClickAddButton}>
                            여기에 이제 todo 입력창 추가하면 됨
                        </AddTodoModal>
                    )}
                    <AddButton onClick={onClickAddButton}><i className="bi bi-plus-lg plus"></i></AddButton>
                </TaskHeader>
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
    padding: 50px 55px;
`;

const Title = styled.div`
    color: ${theme.color.black};
    font-size: ${theme.font.titleLarge.fontSize};
    font-weight: ${theme.font.titleLarge.fontWeight};
    line-height: ${theme.font.titleLarge.lineHeight};
    padding-top: 20px;
`;

const AddButton = styled.div`
    color: white;
    background-color: #623CE7; 
    width: 52px;
    height: 51px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0 0 10px #623CE7;

    .plus {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    &:hover {
        transform: translateY(-1px);
    }
`;

export default OpenAddModal;