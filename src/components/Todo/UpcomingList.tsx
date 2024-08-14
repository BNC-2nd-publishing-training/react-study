import styled from "@emotion/styled";
import Todo from "./Todo";
import { theme } from "@/styles/theme";
import { PopupProps } from "@/utils/interfaces/PopupProps";

const UpCommingList = (props:PopupProps) => {
    return(
        <UpCommingContainer>
            <Text>UpComming Task</Text>
            <TodoBox>
                <Todo/>
                <Todo/>
                <Todo/>
            </TodoBox>
        </UpCommingContainer>
    );
};

const UpCommingContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 40px;
`;

const TodoBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
`;


const Text = styled.h1`
    color: ${theme.color.gray60};
    font-size: ${theme.font.titleMedium.fontSize};
    font-weight: ${theme.font.titleMedium.fontWeight};
`;

export default UpCommingList;