import React from 'react';

const VietBeautyLogo: React.FC = () => (
  <div className="flex items-center gap-2 text-emerald-700">
    <svg
      width="32"
      height="32"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm"
      aria-hidden
    >
      <path
        d="M32 6C19 14.5 12 25.9 12 36.5C12 48.5 21 58 32 58C43 58 52 48.5 52 36.5C52 25.9 45 14.5 32 6Z"
        fill="#1DB7A6"
      />
      <path
        d="M32 10.5C22.5 17 17 26.4 17 35.2C17 45.2 24 52.5 32 52.5C40 52.5 47 45.2 47 35.2C47 26.4 41.5 17 32 10.5Z"
        fill="#28C7B6"
      />
      <path
        d="M32 16V48M32 29L41.5 22M32 35L42 31.5M32 41L39.5 39"
        stroke="#0E7C74"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 29L23 22M32 35L22 31.5M32 41L24.5 39"
        stroke="#0E7C74"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <div className="leading-tight">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-emerald-800">Viet Beauty</p>
      <p className="text-[10px] text-emerald-700">Dược mỹ phẩm chính hãng</p>
    </div>
  </div>
);

export default VietBeautyLogo;
