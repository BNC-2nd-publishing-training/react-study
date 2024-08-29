import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { publicButtonProps } from "@/utils/interfaces/publicButtonProps";

const Verify = ({ onClick }: publicButtonProps) => {
  return (
    <StyledVerifyButton onClick={onClick} type="button" aria-labe="확인하기">
      확인
    </StyledVerifyButton>
  );
};

const StyledVerifyButton = styled.button`
  position: absolute;
  margin-left: 15vw;
  margin-top: 68%;
  width: 230px;
  height: 50px;
  border-radius: 4px;
  background-color: ${theme.color.primary20};
  font-weight: ${theme.font.titleMedium.fontWeight};
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.white};
`;

export default Verify;
