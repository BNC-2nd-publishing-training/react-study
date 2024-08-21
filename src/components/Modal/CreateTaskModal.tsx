import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import TitleText from "../Text/TitleText";
import InputBox from "../Input/InputBox";
import SelectBox from "../Input/SelectBox";
import { Icon } from "@iconify/react/dist/iconify.js";
import { PopupProps } from "@/utils/interfaces/PopupProps";
import Button from "../Button/Button";
import { useState, useCallback } from "react";
import { TodoProps } from "@/utils/interfaces/TodoProps";
import { SelectBoxProps } from "@/utils/interfaces/SelectBoxProps";

const CreateTaskModal = ({ onClose }: PopupProps ) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [selectedStatus, setSelectedStatus] = useState<SelectBoxProps | null>(null);

    const closePopup = useCallback(() => {
        if (onClose) onClose();
    }, [onClose]);

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    }, []);

    const handleSelectChange = useCallback((label: SelectBoxProps) => {
        setSelectedStatus(label);
    }, []);

    const createTask = () => {
        if (inputValue && selectedStatus) {
            const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as TodoProps[];

            const newTask: TodoProps = {
                id: (existingTasks.length + 1).toString(),
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
                <IconBox>
                    <CloseIcon icon="bi:x" onClick={closePopup} />
                </IconBox>
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
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const PopupBox = styled.div`
    position: relative;
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
    height: 100%;
    padding: 4vw;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    margin-bottom: 5vw;
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;
`;

const IconBox = styled.div`
    position: absolute;
    right: 0;
    padding: 15px;
    cursor: pointer;
`;

const CloseIcon = styled(Icon)`
    font-size: 30px;
`;

export default CreateTaskModal;
