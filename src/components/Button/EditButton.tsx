import styled from "@emotion/styled";
import Button from "./Button";
import { theme } from "@/styles/theme";

const EditButton = () => {
    return(
        <ButtonContainer>
            <Button text="Task 삭제하기" backgroundColor={theme.color.red30}/>
            <Button text="Task 수정하기" backgroundColor={theme.color.primary20}/>
        </ButtonContainer>
    );
};

const ButtonContainer = styled.div`
    display: flex;
    column-gap: 20px;
    width: 100%;
`;

export default EditButton;