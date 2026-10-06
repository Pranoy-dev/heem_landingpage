import type { ReactNode } from "react";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="container-page pt-32 pb-24 sm:pt-40">
        <article className="mx-auto max-w-[720px]">{children}</article>
      </main>
      <div className="border-t border-border">
        <Footer />
      </div>
    </>
  );
}
