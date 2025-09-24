import React from "react";

const GoogleButton = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="h-[46px] cursor-pointer border border-blue-100 flex items-center gap-2 px-3 rounded-[4px] my-2 bg-[rgba(210,227,252,0.3)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path
            fill="#FFC107"
            d="M21.805 10.041H21V10H12v4h5.652c-0.825 2.329 -3.04 4 -5.652 4 -3.313 0 -6 -2.687 -6 -6s2.687 -6 6 -6c1.53 0 2.921 0.577 3.981 1.52l2.829 -2.829C17.023 3.026 14.634 2 12 2 6.478 2 2 6.478 2 12s4.478 10 10 10 10 -4.478 10 -10c0 -0.67 -0.069 -1.325 -0.195 -1.958"
          />
          <path
            fill="#FF3D00"
            d="m3.153 7.346 3.285 2.409C7.327 7.554 9.48 6 12 6c1.53 0 2.921 0.577 3.981 1.52l2.829 -2.829C17.023 3.026 14.634 2 12 2 8.159 2 4.828 4.168 3.153 7.346"
          />
          <path
            fill="#4CAF50"
            d="M12 22c2.583 0 4.93 -0.989 6.705 -2.596l-3.095 -2.619A5.95 5.95 0 0 1 12 18c-2.601 0 -4.809 -1.659 -5.641 -3.973l-3.261 2.513C4.753 19.778 8.114 22 12 22"
          />
          <path
            fill="#1976D2"
            d="M21.805 10.041H21V10H12v4h5.652a6.02 6.02 0 0 1 -2.043 2.785l0.002 -0.001 3.095 2.619C18.485 19.602 22 17 22 12c0 -0.67 -0.069 -1.325 -0.195 -1.958"
          />
        </svg>

        <span className="text-[16px] opacity-[0.8] font-Poppins">
          Sign In with Google
        </span>
      </div>
    </div>
  );
};

export default GoogleButton;
