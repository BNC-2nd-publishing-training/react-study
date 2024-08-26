import { TagStatus } from "../tag/type";

export interface SelectBoxProps {
  placeholder: string;
  options: TagStatus[];
  selectedValue: TagStatus | null;
  onChange: (value: TagStatus) => void;
}
