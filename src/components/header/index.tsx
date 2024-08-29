import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { AddBtn } from "@/assets/images";
import { useState } from 'react';
import DefaultModal from "../modal";
import { Status } from "../constants";

interface HeaderProps {
  addTask: (title: string, status: Status) => void;  
}


const Header = ({ addTask }: HeaderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false); 

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);


  return (
    <HeaderContainer>
      <p>Today Task</p>
      <AddButton onClick={openModal} aria-label='추가'>
        <img src={AddBtn}/>
      </AddButton>
      {isOpenModal && <DefaultModal onAddTask={addTask} closeModal={closeModal} />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: ${theme.font.titleLarge.fontSize};
    font-weight: ${theme.font.titleLarge.fontWeight};
    line-height: ${theme.font.titleLarge.lineHeight};
    color: ${theme.color.black};
  }
`;
const AddButton = styled.button`
  width: 52px;
  height: 51px;
  background-color: ${theme.color.primary20};
  border-radius: 12px 0 12px 12px;
  box-shadow: 0px 2px 10px 0px rgba(98, 60, 231, 0.5);
  padding: 12px 12px 11px 12px;
`;

export default Header;
