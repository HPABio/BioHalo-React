"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { StatsBox } from "../ui/StatsBox";
import CardPulseBorder from "../ui/CardPulseBorder";
import CardSpotlight from "../ui/CardSpotlight";
import { StatsBundled } from "../StatsBundled";
import { StatsBundled2 } from "../StatsBundled";

const stats = [
  {
    number: "25",
    prefix: "+",
    suffix: "bn €",
    label: "Global Annual PFAS Market",
  },
  {
    number: "20000",
    prefix: "+",
    label: "Contaminated Sites in Europe",
  },
  {
    number: "50",
    prefix: "+",
    suffix: "bn €",
    label: "Health-Related Costs",
  },
];

export function StatsSection6({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  /*   useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value);
  });
 */
  return (
    <section
      ref={sectionRef}
      className={`relative bg-lightGrey pt-10 overflow-hidden min-h-[60vh] ${
        className || ""
      }`}
    >
      {/* Main container - Adding flex-col to properly stack children */}
      <div className="w-full pt-16 flex flex-col items-center">
        <div className="w-full h-auto ">
          <StatsBundled2
            className="w-full h-auto"
            ref={sectionRef}
            scrollYProgress={scrollYProgress}
          />
        </div>
        {/* Grid container */}
      </div>
    </section>
  );
}
