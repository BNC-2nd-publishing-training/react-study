import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import TitleText from "../Text/TitleText";
import InputBox from "../Input/InputBox";
import SelectBox from "../Input/SelectBox";
import { Icon } from "@iconify/react/dist/iconify.js";
import { PopupProps } from "@/utils/interfaces/PopupProps";
import Button from "../Button/Button";
import { useState } from "react";

const EditTaskModal = (props: PopupProps) => {
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
        console.log(selectedOption,'선택')
        setSelectedStatus(selectedOption);
    };

    return(
        <Background>
            <PopupBox>
                <CloseIcon icon="bi:x" onClick={closePopup}/>
                <PaddingBox>
                    <Group>
                        <TitleText text="Edit Task"/>
                        <InputContainer>
                            <InputBox 
                                placeholder="Task 제목을 입력해주세요"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <SelectBox onChange={handleSelectChange}/>
                        </InputContainer>
                    </Group>
                    <ButtonContainer>
                        <Button text="Task 삭제하기" backgroundColor={theme.color.red30}/>
                        <Button text="Task 수정하기" backgroundColor={theme.color.primary20}/>
                    </ButtonContainer>
                </PaddingBox>
            </PopupBox>
        </Background>
    )
}

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

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
`;

const CloseIcon = styled(Icon)`
    font-size: 30px;
    right: 0;
    padding: 15px;
    cursor: pointer;
`;

export default EditTaskModal;
