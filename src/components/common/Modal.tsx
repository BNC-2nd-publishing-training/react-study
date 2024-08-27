import { CloseIcon } from "@/assets/icons";
import { font } from "@/styles";
import styled from "@emotion/styled";

interface IModalProps {
  title: string;
  children?: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ title, children, setIsOpen }: IModalProps) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Backdrop onClick={closeModal}>
      <Container onClick={stopPropagation}>
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
        <Title>{title}</Title>
        <ChildrenContainer>{children}</ChildrenContainer>
      </Container>
    </Backdrop>
  );
};

export default Modal;

const Backdrop = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 630px;
  height: 645px;
  background-color: white;
  padding: 60px 75px;
  border-radius: 10px;
  position: relative;

  display: flex;
  flex-direction: column;

  @media screen and(max-width: 700px) {
    width: 95dvw;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  right: 24px;
  top: 26px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  ${font.titleLarge}
`;

const ChildrenContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
