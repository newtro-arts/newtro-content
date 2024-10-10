"use client";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button = ({ onClick, children, className, disabled }: ButtonProps) => (
  <button
    onClick={onClick}
    type="button"
    className={`cursor-pointer bg-green hover:bg-green text-black leading-normal inline-flex min-w-[153px] items-center justify-center rounded-xl p-3 text-xl ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
