import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

const StyledTextarea = styled.textarea`
  width: 480px;
  height: 130px;
  padding: 16px;
  outline: none;
  border: 1px solid ${theme.color.gray20};
  border-radius: 6px;
  background-color: ${theme.color.white};
  color: ${theme.color.black};
  font-size: ${theme.font.textMedium.fontSize};
  font-weight: ${theme.font.textMedium.fontWeight};
  line-height: ${theme.font.textMedium.lineHeight};
  resize: none;

  &::placeholder {
    color: ${theme.color.gray40};
  }
`;

const Textarea = () => {
  return (
    <StyledTextarea placeholder="Task 제목을 입력해주세요" />
  );
};

export default Textarea;
