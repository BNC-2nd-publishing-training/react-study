import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { MdOutlineClose as CloseIcon } from "react-icons/md";

interface CreateTaskModalProps {
  onClose: () => void;
}

export default function CreateTaskModal({ onClose }: CreateTaskModalProps) {
  return (
    <ModalContainer>
      <ModalContent>
        <TextInput>Create Task</TextInput>
        <CloseButton onClick={onClose}>
          <CloseIcon size={24} />
        </CloseButton>
      </ModalContent>
    </ModalContainer>
  );
}

const TextInput = styled.div`
  font-weight: ${theme.font.titleLarge.fontWeight};
  font-size: ${theme.font.titleLarge.fontSize};
  text-align: center;
  margin-top: 20px;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 630px;
  height: 645px;
  position: relative;
  z-index: 1001;
`;

const CloseButton = styled.button`
  color: black;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
`;
