import { color } from "@/styles";
import React from "react";

interface AddIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const AddIcon = ({ size = 28, ...props }: AddIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.9999 15.6666H15.1666V21.5C15.1666 22.1416 14.6416 22.6666 13.9999 22.6666C13.3583 22.6666 12.8333 22.1416 12.8333 21.5V15.6666H6.99992C6.35825 15.6666 5.83325 15.1416 5.83325 14.5C5.83325 13.8583 6.35825 13.3333 6.99992 13.3333H12.8333V7.49998C12.8333 6.85831 13.3583 6.33331 13.9999 6.33331C14.6416 6.33331 15.1666 6.85831 15.1666 7.49998V13.3333H20.9999C21.6416 13.3333 22.1666 13.8583 22.1666 14.5C22.1666 15.1416 21.6416 15.6666 20.9999 15.6666Z"
      fill={color.white}
    />
  </svg>
);

export default AddIcon;
