import { Reveal } from "@/components/reveal";
import { marketplaces } from "@/lib/site";

export function Marketplaces() {
  return (
    <section aria-labelledby="marketplaces-title" className="hidden border-y border-border/70 bg-paper/60 py-10 sm:py-14 md:block">
      <Reveal className="container-page flex flex-col items-center gap-6 text-center sm:gap-8 lg:flex-row lg:justify-between lg:text-left">
        <h2 id="marketplaces-title" className="text-2xl text-espresso sm:text-3xl">
          Four marketplaces. <em className="text-clay">One feed.</em>
        </h2>
        <ul className="grid w-full max-w-sm grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10">
          {marketplaces.map((name) => (
            <li
              key={name}
              className="font-heading text-lg leading-snug text-espresso/65 transition-colors hover:text-espresso sm:text-2xl"
            >
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
