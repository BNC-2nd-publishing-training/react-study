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
        <Header>
          <button onClick={closeModal}>
            <CloseIcon />
          </button>
        </Header>
        <TitleContainer>
          <h1>{title}</h1>
        </TitleContainer>
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
  width: 645px;
  background-color: white;
  padding: 26px 24px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  @media screen and(max-width: 700px) {
    width: 95dvw;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin: 4px 0px 40px 0px;
  h1 {
    ${font.titleLarge}
  }
`;

const ChildrenContainer = styled.div`
  padding: 0px 50px;
`;
