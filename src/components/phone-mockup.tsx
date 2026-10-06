import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneMockup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-[280px] rounded-[48px] bg-espresso p-[10px] shadow-[0_40px_80px_-30px_rgba(42,33,27,0.55),inset_0_0_0_2px_rgba(255,255,255,0.08)]",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-black">{children}</div>
    </div>
  );
}
