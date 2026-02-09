import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `flex min-h-[120px] w-full rounded-lg border border-white/10 bg-white/5
          px-4 py-3 text-base text-white placeholder:text-white/40
          transition-all duration-300 resize-none
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
Textarea.displayName = "Textarea";

export { Textarea };
