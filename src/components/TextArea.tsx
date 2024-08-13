import { color, font } from "@/styles";
import styled from "@emotion/styled";

interface ITextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  height?: string;
}

const TextArea = ({
  width = "100%",
  height = "130px",
  ...props
}: ITextAreaProps) => {
  return <Container {...props} style={{ width, height }} />;
};

export default TextArea;

const Container = styled.textarea`
  ${font.textMedium}
  padding: 14px 16px;
  border: 1px solid ${color.gray40};
  border-radius: 6px;
  resize: none;

  &::placeholder {
    color: ${color.gray40};
  }
`;
