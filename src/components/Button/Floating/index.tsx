import RoundAdd from "@/assets/icons/RoundAdd";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const FloatingButton = () => {
  return (
    <FloatingButtonContainer>
      <RoundAdd />
    </FloatingButtonContainer>
  );
};

const FloatingButtonContainer = styled.button`
  width: 52px;
  height: 51px;
  border-radius: 12px 0px 12px 12px;
  padding: 11px 12px 11px 12px;
  background-color: ${theme.color.primary20};
  color: ${theme.color.white};
  box-shadow: 0px 2px 10px 0px rgba(98, 60, 231, 0.5);
`;

export default FloatingButton;
