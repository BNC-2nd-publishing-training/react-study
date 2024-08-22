import * as S from "./style";
import { TagProps } from "./type";

const Tag = ({ status }: TagProps) => {
  return <S.TagContainer status={status}>{status}</S.TagContainer>;
};

export default Tag;
