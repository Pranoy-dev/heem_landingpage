import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export function FaqList() {
  return (
    <Accordion className="border-t border-border">
      {faqs.map((f) => (
        <AccordionItem key={f.q} value={f.q} className="border-b border-border">
          <AccordionTrigger className="py-5 font-heading text-lg text-espresso hover:no-underline sm:py-6 sm:text-2xl">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-espresso/70">
            <p>{f.a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-16 py-16 sm:py-24 lg:py-32">
      <div className="container-page grid gap-8 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Questions</p>
          <h2 id="faq-title" className="mt-4 text-[2.5rem] leading-[1.05] text-espresso sm:text-6xl">
            A few things <em className="text-clay">people ask.</em>
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-espresso/70 sm:mt-6">
            Something else? Visit{" "}
            <Link href="/support" className="underline underline-offset-4 hover:text-espresso">
              support
            </Link>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-espresso">
              {site.email}
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <FaqList />
        </Reveal>
      </div>
    </section>
  );
}
