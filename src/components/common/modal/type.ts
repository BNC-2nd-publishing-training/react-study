import React, { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;;
}
