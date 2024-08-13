import { ReactNode } from "react";

export type TagStatus = "approved" | "in-progress" | "in-review" | "waiting";

export interface TagProps {
  text: string;
  status: TagStatus;
}

export interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
}
