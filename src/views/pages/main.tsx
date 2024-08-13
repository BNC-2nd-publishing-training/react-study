import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const Main = () => {
    return (
        <Container>
            <div>                                                               {/* TypeScript 실행 에러 해결 후 각각 컨테이너 이름 변경하기 */}
                <header>
                    <h1>Today Task</h1>
                    <button>+</button>                                          {/* TypeScript 실행 에러 해결 후 부트스트랩 아이콘으로 변경하기 */}
                </header>
            </div>
        </Container>
    );
};

// 컨테이너 이름 변경 후 나누기
// background-color: #EBEFF8; / font-size: 28px; 이런 부분 모두 TypeScript 에러 해결 후 theme에서 받아오는 것으로 변경하기
// 정확한 간격, 크기 다시 한번 확인하고 맞추기
const Container = styled.div` 
    background-color: #EBEFF8;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        background-color: white;
        width: 517px;
        height: 840px;
        border-radius: 10px;
    }

    header {
        display: flex;
        justify-content: space-between;
        padding: 50px 40px;
    }

    h1 {
        color: black;
        font-size: 28px;
        font-weight: 600;
        padding-top: 10px;
    }

    button {
        color: white;
        background-color: #623CE7; 
        width: 52px;
        height: 51px;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }
`;

export default Main;