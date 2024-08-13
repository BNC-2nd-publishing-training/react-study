import { TagContainer } from "./style";
import { TagProps } from "./type";

const TagComponent = ({ text, status }: TagProps) => {
  return <TagContainer status={status}>{text}</TagContainer>;
};

export default TagComponent;
