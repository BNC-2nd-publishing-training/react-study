import React from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import EditBtn from "@/components/EditBtn";
import { PopupProps } from '@/utils/interfaces/PopupType';

const Popup: React.FC<PopupProps> = ({ onClose }) => {

    return (
        <>
            <PopUpOverlay onClick={onClose} />
            <PopUpBox>
                <AddPop>
                    <EditBtn onClick={onClose} />
                    <Input>
                        <h1>Create Task</h1>
                        <InputTitle
                            type="text"
                            placeholder="Task 제목을 입력해주세요"
                        />
                        <TagSelector name="Task의 상태를 선택해주세요">
                            <option value="todo">To Do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                        </TagSelector>
                    </Input>
                    <AddTaskButton>Task 추가하기</AddTaskButton>
                </AddPop>
            </PopUpBox>
        </>
    );
};

const PopUpOverlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.color.black};
    opacity: 0.5;
    z-index: 1;
`;

const PopUpBox = styled.div`
    position: fixed;
    width: 35vw;
    height: 65vh;
    padding: 3vw;
    border-radius: 8px;
    background-color: ${theme.color.white};
    z-index: 2;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    h1 {
        padding: 2vh;
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

const AddPop = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vh;
`;

const InputTitle = styled.input`
    width: 100%;
    height: 10vh;
    padding: 0.5rem;
    display: flex;
    border: 1px solid ${theme.color.gray40};
    border-radius: 4px;
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};
    line-height: 1.5; /* Added line-height for better readability */
    &::placeholder {
        text-align: left;
        color: ${theme.color.gray60}; /* Optional: adjust placeholder text color */
    }
`;

const TagSelector = styled.select`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${theme.color.gray40};
    border-radius: 4px;
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight}; 
`;

const AddTaskButton = styled.button`
    width: 100%;
    padding: 0.75rem 2rem;
    background-color: ${theme.color.primary20};
    color: ${theme.color.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: ${theme.font.titleMedium.fontSize};
    font-weight: ${theme.font.titleMedium.fontWeight};
`;

export default Popup;
