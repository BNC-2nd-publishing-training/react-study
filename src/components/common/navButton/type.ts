import { TagStatus } from "../tag/type";

export interface NavButtonProps {
  selected?: boolean;
  title: TagStatus | "All";
  count?: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
