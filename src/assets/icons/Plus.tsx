import React from 'react';

interface PlusIconProps {
  color?: string;
  size?: number;
}

const PlusIcon: React.FC<PlusIconProps> = ({ color = 'white', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 15.6667H15.1667V21.5C15.1667 22.1417 14.6417 22.6667 14 22.6667C13.3583 22.6667 12.8333 22.1417 12.8333 21.5V15.6667H7.00001C6.35834 15.6667 5.83334 15.1417 5.83334 14.5C5.83334 13.8583 6.35834 13.3333 7.00001 13.3333H12.8333V7.50001C12.8333 6.85834 13.3583 6.33334 14 6.33334C14.6417 6.33334 15.1667 6.85834 15.1667 7.50001V13.3333H21C21.6417 13.3333 22.1667 13.8583 22.1667 14.5C22.1667 15.1417 21.6417 15.6667 21 15.6667Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusIcon;