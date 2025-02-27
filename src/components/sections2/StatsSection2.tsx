"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import dropletsImageDark from "@/assets/images/droplets-dark.jpg";
import { useRef, useState, useEffect } from "react";
import { AnimatedCounterScroll } from "../ui/AnimatedCounterScroll";

interface StatsBoxProps {
  stat: {
    number: string;
    prefix?: string;
    suffix?: string;
    label: string;
  };
  text?: string;
  scrollYProgress: any;
  isMobile: boolean;
  classNamesContainer?: string;
  classNamesTitle?: string;
  classNamesSubTitle?: string;
  index: number;
}

function StatsBox({
  stat,
  text = "",
  scrollYProgress,
  isMobile,
  classNamesContainer = "backdrop-blur-sm bg-black/20 p-8 rounded-lg text-center shadow-xl",
  classNamesTitle = "text-5xl md:text-7xl font-bold text-tealAccent mb-2",
  classNamesSubTitle = "text-mintAccent text-lg font-bold -mt-4",
  index,
}: StatsBoxProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={classNamesContainer}
    >
      <h3 className={classNamesTitle}>
        <AnimatedCounterScroll
          value={`${stat.prefix || ""}${stat.number}${stat.suffix || ""}`}
          scrollYProgress={scrollYProgress}
          scrollEndThreshold={isMobile ? 0.45 : 0.4}
        />
      </h3>
      <p className={classNamesSubTitle}>{stat.label}</p>
      {text && <p className="text-white/80 text-sm mt-4">{text}</p>}
    </motion.div>
  );
}

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
              isMobile={isMobile}
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
