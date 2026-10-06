"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Heart } from "lucide-react";
import { AppStoreBadge } from "@/components/app-store-badge";
import { FeedScreen } from "@/components/app-screens";
import { PhoneMockup } from "@/components/phone-mockup";
import savedScreen from "@/assets/screens/saved.png";
import { roomPhotos } from "@/lib/content";
import { marketplaces } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
const tabletQuery = "(min-width: 768px)";

function useIsTabletUp() {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(tabletQuery);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia(tabletQuery).matches,
    () => false
  );
}

const pieces = ["vintage armchair", "teak sideboard", "design lamp", "dining table", "wool rug"];

function RotatingPiece() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % pieces.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <span
      className="@container relative my-[0.02em] block h-[1.15em] overflow-hidden text-clay italic [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
    >
      <span className="sr-only">{pieces.join(", ")}</span>
      <AnimatePresence initial={false}>
        <motion.span
          key={pieces[index]}
          aria-hidden="true"
          className="absolute inset-x-0 top-0 flex h-full items-center"
          initial={reduce ? false : { y: 18, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -18, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-[min(1em,12.2cqi)] leading-none whitespace-nowrap">{pieces[index]}</span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const showPhoneVisual = useIsTabletUp();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-24 pb-6 sm:pt-36 md:pb-14 lg:pb-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="max-w-xl">
          <h1 className="animate-rise text-[clamp(2.75rem,7vw,5.6rem)] leading-[0.95] text-espresso">
            Find a
            <RotatingPiece />
            <span className="whitespace-nowrap">Second-hand.</span> Fast.
          </h1>
          <p className="animate-rise mt-5 max-w-md text-base leading-relaxed text-espresso/75 [animation-delay:180ms] sm:mt-7 sm:text-lg">
            Blocket, Tradera, Facebook Marketplace and Mjuk, all in one feed, filtered to your style.
          </p>
          <div
            id="hero-cta"
            className="animate-rise mt-8 flex flex-col items-stretch gap-4 [animation-delay:280ms] sm:mt-10 sm:flex-row sm:items-center sm:gap-6"
          >
            <AppStoreBadge className="w-full justify-center sm:w-auto" />
            <a
              href="#how"
              className="group hidden items-center justify-center gap-2 py-2 text-sm font-medium text-espresso/80 hover:text-espresso md:inline-flex"
            >
              See how it works
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {showPhoneVisual && (
          <div className="relative flex justify-center lg:hidden">
            <div
              className="absolute top-1/2 left-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-soft"
              aria-hidden="true"
            />
            <div className="animate-rise relative [animation-delay:200ms]">
              <PhoneMockup className="w-[230px]">
                <FeedScreen preload />
              </PhoneMockup>
            </div>
          </div>
        )}

        <div className="relative mx-auto hidden h-[640px] w-full max-w-[540px] lg:block">
          <motion.div
            style={{ y: photoY }}
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease }}
            className="absolute top-0 right-0 h-[86%] w-[76%] overflow-hidden rounded-[32px]"
          >
            <Image
              src={`${roomPhotos.hero}&w=1100&q=75`}
              alt="A warm living room with a low wooden table and soft seating"
              fill
              sizes="420px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            style={{ y: phoneY }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.25, ease }}
            className="absolute bottom-0 left-4"
          >
            <PhoneMockup className="w-[262px]">
              <FeedScreen preload />
            </PhoneMockup>
          </motion.div>

          <FloatingChip className="top-[5%] right-[6%]" delay={0.7}>
            <span className="size-2 rounded-full bg-sage" /> {marketplaces[0]}
          </FloatingChip>
          <FloatingChip className="top-[24%] -right-6" delay={0.85} float="[animation-delay:-2s]">
            <span className="size-2 rounded-full bg-clay" /> {marketplaces[2]}
          </FloatingChip>
          <FloatingChip className="top-[44%] right-[10%]" delay={1} float="[animation-delay:-4s]">
            <span className="size-2 rounded-full bg-espresso" /> {marketplaces[1]}
          </FloatingChip>
          <FloatingChip className="top-[62%] -right-3" delay={1.1} float="[animation-delay:-3s]">
            <span className="size-2 rounded-full bg-[#c9a77c]" /> {marketplaces[3]}
          </FloatingChip>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.15, ease }}
            className="absolute right-2 bottom-[6%] flex w-[200px] items-center gap-3 rounded-2xl bg-paper/95 p-2.5 shadow-[0_20px_40px_-20px_rgba(42,33,27,0.45)] backdrop-blur"
          >
            <div className="relative size-12 shrink-0 overflow-hidden rounded-xl bg-linen">
              <Image
                src={savedScreen}
                alt=""
                sizes="140px"
                className="absolute max-w-none"
                style={{ width: 133, height: 289, left: -73, top: -118 }}
              />
            </div>
            <div className="min-w-0">
              <p className="flex items-center gap-1 text-[11px] font-medium text-clay-deep">
                <Heart className="size-3 fill-clay text-clay" /> Saved
              </p>
              <p className="truncate text-xs font-medium text-espresso">Luna rattan armchair</p>
              <p className="text-[11px] text-muted-foreground">Sika Design · 6 400 kr</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({
  children,
  className,
  delay,
  float = "",
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
  float?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease }}
      className={`absolute z-10 ${className}`}
    >
      <span
        className={`animate-float inline-flex items-center gap-2 rounded-full bg-paper/95 px-3.5 py-2 text-xs font-medium text-espresso shadow-[0_12px_30px_-14px_rgba(42,33,27,0.5)] backdrop-blur ${float}`}
      >
        {children}
      </span>
    </motion.div>
  );
}
