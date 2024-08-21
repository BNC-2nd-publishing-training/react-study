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
  ${theme.font.textMedium}
  font-size: ${theme.font.textMedium};
  font-weight: ${theme.font.textMedium};
  line-height: ${theme.font.textMedium};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  resize: none;
  padding: 14px 16px;
  border: 1px solid ${theme.color.gray40};
  border-radius: 6px;

  &::placeholder {
    color: ${theme.color.gray40};
    ${theme.font.textMedium}
  }
`;

export default Textarea;
