import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import TitleText from "../Text/TitleText";
import InputBox from "../Input/InputBox";
import SelectBox from "../Input/SelectBox";
import { Icon } from "@iconify/react/dist/iconify.js";
import { PopupProps } from "@/utils/interfaces/PopupProps";
import Button from "../Button/Button";
import { useState } from "react";

interface Task {
    text: string;
    status: string;
}

const CreatTaskModal = (props: PopupProps) => {
    const [inputValue, setInputValue] = useState("");
    const [selectedStatus, setSelectedStatus] = useState<any>(null);

    const closePopup = () => {
        if (props.onClose) {
            props.onClose();
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    };

    const handleSelectChange = (selectedOption: string) => {
        setSelectedStatus(selectedOption);
    };

    const createTask = () => {
        if (inputValue && selectedStatus) {
            const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as Task[];

            const newTask: Task = {
                text: inputValue,
                status: selectedStatus.label,
            };
            existingTasks.push(newTask);

            localStorage.setItem('tasks', JSON.stringify(existingTasks));

            console.log("Task 저장:", newTask);

            setInputValue("");
            setSelectedStatus(null);
            closePopup();
        } else {
            alert("Task의 제목 혹은 상태를 모두 입력해주세요.");
        }
    };

    return (
        <Background>
            <PopupBox>
                <CloseIcon icon="bi:x" onClick={closePopup} />
                <PaddingBox>
                    <Group>
                        <TitleText text="Create Task" />
                        <InputContainer>
                            <InputBox
                                placeholder="Task 제목을 입력해주세요"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <SelectBox onChange={handleSelectChange} />
                        </InputContainer>
                    </Group>
                    <Button
                        text="Task 추가하기"
                        backgroundColor={theme.color.primary20}
                        onClick={createTask}
                    />
                </PaddingBox>
            </PopupBox>
        </Background>
    );
};

const Background = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
`;

const PopupBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 35vw;
    height: 38vw;
    background-color: ${theme.color.white};
    border-radius: 10px;
`;

const PaddingBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80%;
    row-gap: 40px;
    padding: 0 4vw;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    width: 100%;
    margin-bottom: 5vw;
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    width: 100%;
    align-items: center;
`;

const CloseIcon = styled(Icon)`
    font-size: 30px;
    right: 0;
    padding: 15px;
    cursor: pointer;
`;

export default CreatTaskModal;

