import { TagContainer } from "./style";
import { TagProps } from "./type";

const Tag = ({ status }: TagProps) => {
  return <TagContainer status={status}>{status}</TagContainer>;
};

export default Tag;
