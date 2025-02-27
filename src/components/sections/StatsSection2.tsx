"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { StatsBox } from "../ui/StatsBox";

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

export function StatsSection2() {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? "-20vh" : "-50vh", "0vh"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-lightGrey overflow-hidden min-h-screen md:min-h-0"
    >
      <div
        className="relative container mx-auto px-4 py-16 z-10"
        style={{ willChange: "transform" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatsBox
              key={index}
              stat={stat}
              scrollYProgress={scrollYProgress}
              // isMobile={isMobile}
              index={index}
              text={
                index === 1
                  ? "This number continues to grow as more sites are discovered"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
