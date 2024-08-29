import * as S from "./style";
import { ModalProps } from "./type";

const Modal = ({ children, isOpen, setModal }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <S.Container onClick={() => setModal(false)}>
          <S.Modal onClick={(e) => e.stopPropagation()}>{children}</S.Modal>
        </S.Container>
      )}
    </>
  );
};

export default Modal;
