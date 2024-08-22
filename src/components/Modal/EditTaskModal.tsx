import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import TitleText from "../Text/TitleText";
import InputBox from "../Input/InputBox";
import SelectBox from "../Input/SelectBox";
import { Icon } from "@iconify/react";
import { PopupProps } from "@/utils/interfaces/PopupProps";
import Button from "../Button/Button";
import { SelectBoxProps } from "@/utils/interfaces/SelectBoxProps";
import { useTodoContext } from "@/context/TodoContext";
import { TodoProps } from "@/utils/interfaces/TodoProps";

const EditTaskModal = ({ onClose }: PopupProps) => {
    const { selectedTodo, setSelectedTodo } = useTodoContext();
    const [inputValue, setInputValue] = useState<string>(selectedTodo?.text || "");
    const [selectedStatus, setSelectedStatus] = useState<SelectBoxProps>({
        label: selectedTodo?.status || "",
        value: selectedTodo?.status || ""
    });

    const closePopup = () => {
        if (onClose) onClose();
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    };

    const handleSelectChange = (option: SelectBoxProps) => {
        setSelectedStatus(option);
    };

    const handleTaskUpdate = () => {
        if (selectedTodo) {
            const updatedTodo = {
                ...selectedTodo,
                text: inputValue,
                status: selectedStatus.value || ""
            };
            console.log(updatedTodo);
            const storedTodos = localStorage.getItem("tasks");
            if (storedTodos) {
                const todos: TodoProps[] = JSON.parse(storedTodos);
    
                const updatedTodos = todos.map(todo =>
                    todo.id === updatedTodo.id ? updatedTodo : todo
                );
    
                localStorage.setItem("tasks", JSON.stringify(updatedTodos));
                
                setSelectedTodo(null);
                closePopup();
            }
        }
    };
    

    const handleTaskDelete = () => {
        if (selectedTodo) {
            const id = selectedTodo.id;
            console.log(id);
            if (id) {
                const storedTodos = localStorage.getItem("tasks");
                if (storedTodos) {
                    const todos: TodoProps[] = JSON.parse(storedTodos);

                    const updatedTodos = todos.filter(todo => todo.id !== id);

                    console.log(updatedTodos);

                    localStorage.setItem("tasks", JSON.stringify(updatedTodos));

                    setSelectedTodo(null);
                    closePopup();
                }
            }
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
                        <TitleText text="Edit Task" />
                        <InputContainer>
                            <InputBox
                                placeholder="Task 제목을 입력해주세요"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <SelectBox
                                onChange={handleSelectChange}
                                value={selectedStatus.value}
                            />
                        </InputContainer>
                    </Group>
                    <ButtonContainer>
                        <Button text="Task 삭제하기" backgroundColor={theme.color.red30} onClick={handleTaskDelete} />
                        <Button text="Task 수정하기" backgroundColor={theme.color.primary20} onClick={handleTaskUpdate} />
                    </ButtonContainer>
                </PaddingBox>
            </PopupBox>
        </Background>
    );
};

// Styled components remain unchanged

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

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
`;

const IconBox = styled.button`
    position: absolute;
    right: 0;
    padding: 15px;
    cursor: pointer;
    line-height: 0;
`;

const CloseIcon = styled(Icon)`
    font-size: 30px;
`;

export default EditTaskModal;
