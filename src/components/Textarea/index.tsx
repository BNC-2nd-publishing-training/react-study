import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  height?: string;
}

const Textarea = ({
  width = "480px",
  height = "130px",
  ...props
}: ITextareaProps) => {
  return <TextareaContainer width={width} height={height} {...props} />;
};

const TextareaContainer = styled.textarea<{ width?: string; height?: string }>`
  font-size: ${theme.font.textMedium.fontSize};
  font-weight: ${theme.font.textMedium.fontWeight};
  line-height: ${theme.font.textMedium.lineHeight};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  resize: none;
  padding: 14px 16px;
  border: 1px solid ${theme.color.gray40};
  border-radius: 6px;

  &::placeholder {
    color: ${theme.color.gray40};
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};
    line-height: ${theme.font.textMedium.lineHeight};
  }
`;

export default Textarea;
