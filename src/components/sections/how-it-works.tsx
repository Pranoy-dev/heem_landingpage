"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { ListingScreen, QuizScreen, RoomScreen, SavedScreen, StyleScreen } from "@/components/app-screens";
import { PhoneMockup } from "@/components/phone-mockup";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Show us what you like",
    body: "Four short rounds. Each time, tap the room that feels most like you. No forms to fill in.",
    Screen: QuizScreen,
  },
  {
    title: "See your style",
    body: "Heem names what it picked up, so you can tell straight away if it got you right.",
    Screen: StyleScreen,
  },
  {
    title: "Pick a room",
    body: "Bedroom, kitchen, office or living room. Heem builds a room in your style and puts real listings in it, so you can picture a piece before you chase it.",
    Screen: RoomScreen,
  },
  {
    title: "Save the good ones",
    body: "Your feed is second-hand furniture that fits you, not everything for sale. Tap the heart on the ones worth keeping.",
    Screen: SavedScreen,
  },
  {
    title: "Go and get it",
    body: "Open a listing and one tap takes you to the marketplace selling it. Heem doesn't sell anything. You buy it there.",
    Screen: ListingScreen,
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const ActiveScreen = steps[active].Screen;

  return (
    <section id="how" aria-labelledby="how-title" className="scroll-mt-16 py-16 sm:py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 id="how-title" className="mt-4 text-[2.5rem] leading-[1.05] text-espresso sm:text-6xl">
            Pick a style. <em>We find it.</em>
          </h2>
        </Reveal>

        <StepsCarousel />

        <div className="mt-8 hidden gap-20 lg:grid lg:grid-cols-2">
          <ol>
            {steps.map((step, i) => (
              <Step key={step.title} index={i} active={active === i} onActive={setActive} {...step} />
            ))}
          </ol>

          <div>
            <div className="sticky top-[calc(50vh-300px)] flex h-[600px] items-center justify-center">
              <div className="absolute size-[460px] rounded-full bg-sage-soft" aria-hidden="true" />
              <PhoneMockup className="relative">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={active}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ActiveScreen />
                  </motion.div>
                </AnimatePresence>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepsCarousel() {
  const trackRef = useRef<HTMLOListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { root: track, threshold: 0.6 }
    );
    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[i];
    if (track && card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft - 20, behavior: "smooth" });
  };

  return (
    <div className="mt-10 lg:hidden" role="region" aria-roledescription="carousel" aria-label="How Heem works">
      <ol
        ref={trackRef}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:scroll-px-8 sm:px-8"
      >
        {steps.map(({ title, body, Screen }, i) => (
          <li
            key={title}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            data-index={i}
            aria-roledescription="slide"
            aria-label={`Step ${i + 1} of ${steps.length}`}
            className="flex h-[calc(100svh-9rem)] w-[calc(100vw-4.5rem)] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-border/70 bg-paper md:h-auto"
          >
            <div className="shrink-0 px-5 pt-5 md:px-6 md:pt-6">
              <span className="font-heading text-3xl text-clay/80 italic md:text-4xl">0{i + 1}</span>
              <h3 className="mt-2 text-xl text-espresso md:mt-3 md:text-2xl">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-espresso/70 md:mt-2 md:text-[15px]">{body}</p>
            </div>
            <div className="relative mt-3 flex min-h-0 flex-1 items-center justify-center px-4 pt-2 pb-5 md:mt-6 md:block md:px-4 md:pt-4 md:pb-8">
              <div
                className="absolute top-1/2 left-1/2 size-[72%] max-h-64 max-w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-soft md:size-[300px] md:max-h-none md:max-w-none"
                aria-hidden="true"
              />
              <PhoneMockup className="relative h-full max-h-full w-auto max-w-full md:mx-auto md:h-auto md:w-full md:max-w-[260px]">
                <Screen />
              </PhoneMockup>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex items-center justify-center gap-2">
        {steps.map((step, i) => (
          <button
            key={step.title}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to step ${i + 1}: ${step.title}`}
            aria-current={active === i ? "step" : undefined}
            className="grid size-8 place-items-center"
          >
            <span
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                active === i ? "w-6 bg-espresso" : "w-2 bg-espresso/25"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function Step({
  index,
  title,
  body,
  active,
  onActive,
}: (typeof steps)[number] & {
  index: number;
  active: boolean;
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <li ref={ref} className="flex min-h-[75vh] flex-col justify-center">
      <Reveal>
        <div className={cn("opacity-35 transition-opacity duration-500", active && "opacity-100")}>
          <span className="font-heading text-6xl text-clay/80 italic">0{index + 1}</span>
          <h3 className="mt-4 text-4xl text-espresso">{title}</h3>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-espresso/70">{body}</p>
        </div>
      </Reveal>
    </li>
  );
}
