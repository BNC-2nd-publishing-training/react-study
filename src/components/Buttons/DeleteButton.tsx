import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { publicButtonProps } from "@/utils/interfaces/publicButtonProps";

const Delete = ({ onClick }: publicButtonProps) => {
  return (
    <StyledDeleteButton onClick={onClick} type="button" aria-labe="삭제하기">
      삭제하기
    </StyledDeleteButton>
  );
};

const StyledDeleteButton = styled.button`
  position: absolute;
  margin-right: 14vw;
  margin-top: 60%;
  width: 230px;
  height: 50px;
  border-radius: 4px;
  background-color: ${theme.color.red30};
  font-weight: ${theme.font.titleMedium.fontWeight};
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.white};
`;

export default Delete;
