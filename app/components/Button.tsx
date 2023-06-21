"use client";
import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
  flex
  justify-center
  rounded-md
  px-3
  py-2
  text-sm
  font-semibold
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-2
  `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-grey-900" : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-[#1318C4] hover:bg-[##3844ae] focus-visible:outline-[#0719C4]" 
      )} 
    >
      {children}
    </button>
  );
};

export default Button;
