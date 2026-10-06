import Link from "next/link";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Heem home"
      className={cn("font-heading text-[28px] leading-none tracking-[-0.04em]", className)}
    >
      heem<span className="text-clay">.</span>
    </Link>
  );
}
