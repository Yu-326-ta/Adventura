"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorColor?: string;
    showValue?: boolean;
    max?: number;
    valueLabel?: string;
  }
>(
  (
    {
      className,
      value,
      indicatorColor = "bg-primary",
      showValue = false,
      max = 100,
      valueLabel,
      ...props
    },
    ref
  ) => (
    <div className="flex items-center gap-2 w-full">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-md border border-slate-800 bg-slate-950/50 backdrop-blur-sm",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all duration-500",
            indicatorColor
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
        <div className="absolute inset-0 border border-slate-400/10 border-dashed" />
        <div className="absolute inset-0 border-r-2 border-r-white/20" />
      </ProgressPrimitive.Root>
      {showValue && (
        <div className="min-w-[3rem] text-sm font-mono">
          {valueLabel || `${value}/${max}`}
        </div>
      )}
    </div>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
