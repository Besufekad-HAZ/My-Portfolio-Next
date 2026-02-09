import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-primary hover:bg-accent-hover hover:shadow-[0_0_25px_rgba(0,255,153,0.4)] active:scale-95",
        primary:
          "bg-primary-light text-white border border-white/10 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,255,153,0.2)]",
        outline:
          "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-primary hover:shadow-[0_0_25px_rgba(0,255,153,0.4)] active:scale-95",
        ghost: "text-white/80 hover:text-accent hover:bg-white/5",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-base tracking-wide",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
