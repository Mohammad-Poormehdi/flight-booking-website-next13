"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return (
    <input
      dir="rtl"
      ref={ref}
      className="w-full rounded-lg px-3 py-2 border"
      {...props}
    />
  );
});
Input.displayName = "Input";
export default Input;
