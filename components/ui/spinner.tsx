import { Loader2Icon } from "lucide-react";
import type * as React from "react";

import { cn } from "@/lib/utils";

type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
  wrapperClassName?: string;
};

function Spinner({ className, wrapperClassName, ...props }: SpinnerProps) {
  return (
    <span
      aria-live="polite"
      aria-busy="true"
      className={cn(
        "inline-flex items-center justify-center",
        wrapperClassName,
      )}
      {...props}
    >
      <Loader2Icon
        aria-hidden="true"
        className={cn("size-4 animate-spin", className)}
      />
      <span className="sr-only">Loading</span>
    </span>
  );
}

export { Spinner };
