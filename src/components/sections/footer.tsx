import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { legalLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer id="site-footer" className="mt-auto pt-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:py-14">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <div className="max-w-xs">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-espresso/65">
              We find second-hand furniture that fits your style. You buy it on the marketplace we send you to.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm sm:gap-x-16 sm:gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="py-1.5 text-espresso/75 hover:text-espresso">
                {l.label}
              </Link>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="col-span-2 py-1.5 break-all text-espresso/75 hover:text-espresso"
            >
              {site.email}
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground sm:mt-12 sm:flex-row sm:justify-between">
          <p>
            Heem is operated by {site.company.name} (org. nr {site.company.orgNumber}), {site.company.address}
          </p>
          <p className="shrink-0">© {new Date().getFullYear()} {site.company.name}</p>
        </div>
      </div>
    </footer>
  );
}
