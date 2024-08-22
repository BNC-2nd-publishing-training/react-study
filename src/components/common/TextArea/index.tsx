import * as S from "./style";
import { TextAreaProps } from "./type";

const TextArea = ({ placeholder, value, onChange }: TextAreaProps) => {
  return (
    <S.TextAreaContainer
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextArea;
