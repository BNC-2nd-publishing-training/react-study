import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { AddBtn } from "@/assets/images";
import { useState } from 'react';
import DefaultModal from "../modal";
import { Status , ListItem} from "../constants";



const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false); 
  const [list, setList] = useState<ListItem[]>([]);  

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const addTask = (title: string, status: Status) => {
    const newTask = {
      id: list.length + 1,  // 고유 ID 생성
      title: title,
      status: status,
    };
    setList([...list, newTask]);  // 리스트 업데이트
    setIsOpenModal(false);  // 모달 닫기
    console.log("New task added:", newTask);
  };


  return (
    <HeaderContainer>
      <p>Today Task</p>
      <AddButton onClick={openModal}>
        <img src={AddBtn}/>
      </AddButton>
      {isOpenModal && <DefaultModal  addTask={addTask} closeModal={closeModal} />}
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
  padding: 12px, 12px, 11px, 12px;
`;

export default Header;
