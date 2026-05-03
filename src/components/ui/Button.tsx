import type { ButtonHTMLAttributes } from "react";

type ButtonSize = "sm" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  children: React.ReactNode;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-6, py-2 text-sm w-15",
  lg: "py-3 px-6 text-base",
};

export function Button({
  size = "sm",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-poppins font-semibold rounded-sm transition-all duration-200 cursor-pointer bg-[#DB3507] text-[#F5F5F5] hover:bg-[#cf4e14] active:scale-95 shadow-md hover:shadow-orange-500/30 hover:shadow-lg ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
