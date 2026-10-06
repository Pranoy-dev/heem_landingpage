import type { ReactNode } from "react";

export function LegalHeader({ title, effective }: { title: ReactNode; effective?: string }) {
  return (
    <header className="border-b border-border pb-10">
      <h1 className="text-5xl leading-[1] text-espresso sm:text-7xl">{title}</h1>
      {effective && <p className="mt-6 text-sm text-muted-foreground">Effective date: {effective}</p>}
    </header>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-14 text-3xl text-espresso">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-10 text-xl text-espresso">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-[17px] leading-relaxed text-espresso/75">{children}</p>;
}

export function UL({ children, ordered = false }: { children: ReactNode; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={`mt-4 space-y-2.5 pl-5 text-[17px] leading-relaxed text-espresso/75 marker:text-clay ${ordered ? "list-decimal" : "list-disc"}`}
    >
      {children}
    </Tag>
  );
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-espresso underline decoration-clay/50 underline-offset-4 hover:decoration-clay">
      {children}
    </a>
  );
}

export function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-espresso">{children}</strong>;
}
