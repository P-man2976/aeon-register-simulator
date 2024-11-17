"use client";
import { cn } from "@/utils";
import React, { ComponentProps } from "react";

const Button = React.forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  ({ ...props }, ref) => (
    <button
      {...props}
      className={cn(
        "flex size-fit justify-center whitespace-nowrap rounded-full bg-[#f11f12] px-8 py-3 text-xl font-bold text-white transition-all hover:bg-red-700",
        props.className
      )}
      ref={ref}
    />
  )
);
Button.displayName = "Button";

export default Button;
