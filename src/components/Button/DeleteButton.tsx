import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface DeleteButtonProps {
    onClick: () => void; // Add this prop
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
    return (
        <Container>
            <DeleteBtn onClick={onClick}>Task 삭제하기</DeleteBtn>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const DeleteBtn = styled.button`
    width: 230px;
    height: 50px;
    border-radius: 5px;
    background-color: ${theme.color.red30};
    color: white;
    cursor: pointer;  // 버튼에 커서가 나타나도록 설정
    border: none;     // 버튼의 기본 테두리 제거
    outline: none;    // 버튼 클릭 시 테두리 제거
    font-size: 16px;  // 버튼 텍스트 크기 조정
`;

export default DeleteButton;
