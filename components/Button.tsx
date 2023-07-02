import React from "react";

interface ButtonProps {
  disable?: boolean;
  label: string;
  onClick?: () => void;
  className?: string;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  disable,
  className,
  onClick,
  label,
  active,
}) => {
  return (
    <button
      disabled={disable}
      aria-label="button"
      className={` px-3 py-2 rounded-xl w-full ${
        active ? "bg-blue-500 text-white" : "text-black border bg-white"
      } ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
