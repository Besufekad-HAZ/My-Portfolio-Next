import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-12 w-full rounded-lg border border-white/10 bg-white/5
          px-4 py-3 text-base text-white placeholder:text-white/40
          transition-all duration-300
          focus:border-accent focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-accent/50
          disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
