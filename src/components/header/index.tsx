import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { AddBtn } from "@/assets/images";

const Header = () => {
  return (
    <HeaderContainer>
      <p>Today Task</p>
      <AddButton>
        <img src={AddBtn}/>
      </AddButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: ${theme.font.titleLarge};
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
