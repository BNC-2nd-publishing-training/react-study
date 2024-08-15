import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const Popup = () => {
    return (
        <>
            <PopUpOverlay />
            <PopUpBox>
                <Input>
                    <h1>Create Task</h1>
                    <InputTitle
                        type="text"
                        placeholder="Task 제목을 입력해주세요"
                    />
                    <TagSelector />
                </Input>
                <AddTaskButton>Task 추가하기</AddTaskButton>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
        padding: 2vh;
        font-size: 1.5rem;
        font-weight: bold;
    }
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
    padding: 0.5rem;
    border: 1px solid ${theme.color.gray40};
    border-radius: 4px;
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};
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
