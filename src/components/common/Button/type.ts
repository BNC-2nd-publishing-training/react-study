export interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  text: string;
  width: string;
  height: string;
  color: string;
}

export interface ButtonStyleProps {
  width: string;
  height: string;
  color: string;
}
