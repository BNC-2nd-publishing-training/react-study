import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

interface NewButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
const NewButton = ({ onClick, children }: NewButtonProps) => {
  return (
    <StyledNewButton type="button" onClick={onClick} aria-label="추가하기">
      {children}
    </StyledNewButton>
  );
};

const StyledNewButton = styled.button`
  width: 480px;
  height: 50px;
  border-radius: 4px;
  margin-top: 110px;
  justify-content: center;
  background-color: ${theme.color.primary20};
  font-weight: ${theme.font.titleMedium.fontWeight};
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.white};
`;
export default NewButton;
