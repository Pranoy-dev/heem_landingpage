"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/components/wordmark";
import { AppleLogo } from "@/components/app-store-badge";
import { APP_STORE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-border/60 bg-oat/75 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-20" aria-label="Main">
        <Wordmark />
        <ul className="hidden items-center gap-9 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-espresso/75 transition-colors hover:text-espresso">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={APP_STORE_URL}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-espresso px-4 text-sm font-medium text-paper transition-colors hover:bg-black"
        >
          <AppleLogo className="size-4" />
          Get the app
        </a>
      </nav>
    </header>
  );
}
