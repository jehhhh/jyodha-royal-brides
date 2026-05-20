import React from 'react';

const LotusIcon = ({ size = 24, color = 'currentColor', className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 21C12 21 16 16 16 12C16 8 12 3 12 3C12 3 8 8 8 12C8 16 12 21 12 21Z" fill={color} fillOpacity="0.2"/>
      <path d="M12 21C12 21 21 17 21 12C21 7 16 8 16 12C16 16 12 21 12 21Z" />
      <path d="M12 21C12 21 3 17 3 12C3 7 8 8 8 12C8 16 12 21 12 21Z" />
      <path d="M12 21C12 21 23 20 23 15C23 10 18 10 18 14C18 18 12 21 12 21Z" />
      <path d="M12 21C12 21 1 20 1 15C1 10 6 10 6 14C6 18 12 21 12 21Z" />
    </svg>
  );
};

export default LotusIcon;
