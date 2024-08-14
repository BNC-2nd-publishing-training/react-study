import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

// // 컨테이너 이름 변경 후 나누기
// // 정확한 간격, 크기 다시 한번 확인하고 맞추기

const Main = () => {
    return (
        <Container>
            <TaskContainer>
                <TaskHeader>
                    <Title>Today Task</Title>
                    <AddButton>+</AddButton>
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
    padding: 50px 40px;
`;

const Title = styled.div`
    color: ${theme.color.black};
    font: ${theme.font.titleLarge};
`;

const AddButton = styled.div`
    color: white;
    background-color: #623CE7; 
    width: 52px;
    height: 51px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export default Main;