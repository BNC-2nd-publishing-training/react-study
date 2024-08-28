import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface VerifyButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Verify = ({ onClick }: VerifyButtonProps) => {
  return (
    <StyledVerifyButton onClick={onClick} type="button" aria-labe="확인하기">
      확인
    </StyledVerifyButton>
  );
};

const StyledVerifyButton = styled.button`
  position: absolute;
  margin-left: 15vw;
  margin-top: 60%;
  width: 230px;
  height: 50px;
  border-radius: 4px;
  background-color: ${theme.color.primary20};
  font-weight: ${theme.font.titleMedium.fontWeight};
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.white};
`;

export default Verify;
