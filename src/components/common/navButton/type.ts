import { TagStatus } from "../tag/type";

export interface NavButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  title: TagStatus | "All";
  count?: number;
}
