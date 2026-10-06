"use client";

import { useEffect, useState } from "react";
import { AppStoreBadge } from "@/components/app-store-badge";
import { Wordmark } from "@/components/wordmark";
import { cn } from "@/lib/utils";

export function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const footer = document.getElementById("site-footer");

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === heroCta) {
          setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0);
        } else if (entry.target === footer) {
          setAtFooter(entry.isIntersecting);
        }
      }
    });

    if (heroCta) observer.observe(heroCta);
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !atFooter;

  return (
    <div
      inert={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-paper/90 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 ease-out lg:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container-page flex items-center justify-between gap-4">
        <div className="min-w-0">
          <Wordmark className="text-2xl" />
          <p className="truncate text-xs text-muted-foreground">Second-hand furniture, fast</p>
        </div>
        <AppStoreBadge className="h-11 shrink-0 px-5 text-sm" />
      </div>
    </div>
  );
}
