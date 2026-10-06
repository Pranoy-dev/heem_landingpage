"use client";

import { motion } from "motion/react";
import { useSyncExternalStore, type ReactNode } from "react";

const phoneQuery = "(max-width: 1023px)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(phoneQuery);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const isPhone = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(phoneQuery).matches,
    () => false
  );

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: isPhone ? 0.6 : 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
