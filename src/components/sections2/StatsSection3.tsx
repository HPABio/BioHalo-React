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

export function StatsSection3({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className={`relative bg-yellow-500 border-red-500 border-b-12 overflow-hidden min-h-screen ${className || ''}`}
    >
      {stats.map((stat, index) => (
        <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-8  h-[33vh] w-full">
          {index % 2 === 0 ? (
            <>
              <div className=" bg-purple-400 w-full flex justify-center items-center h-full relative">
                <StatsBox
                  classNamesContainer="w-fit h-fit top-10 bg-lightGrey"
                  classNamesTitle="text-9xl md:text-9xl font-bold text-tealAccent mb-2"
                  classNamesSubTitle="text-mintAccent text-center text-2xl font-bold -mt-5"
                  key={index}
                  stat={stat}
                  scrollYProgress={scrollYProgress}
                  index={index}
                  text=""
                />
              </div>
              <div className=" w-full bg-green-500 h-full">
              </div>
            </>
          ) : (
            <>
              <div className=" w-full h-full bg-red-500">
              </div>
              <div className="bg-blue-500 w-full flex justify-center items-center h-full relative">
                <StatsBox
                  classNamesContainer="w-fit h-fit top-10 bg-lightGrey"
                  classNamesTitle="text-9xl md:text-9xl font-bold text-tealAccent mb-2"
                  classNamesSubTitle="text-mintAccent text-center text-2xl font-bold -mt-5"
                  key={index}
                  stat={stat}
                  scrollYProgress={scrollYProgress}
                  index={index}
                  text=""
                />
              </div>
            </>
          )}
        </div>
      ))}
      <div
        className="relative bg-green-400 container mx-auto px-4 hidden py-16 z-10"
        style={{ willChange: "transform" }}
      >
        <div className="grid bg-yellow-500 grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatsBox
              key={index}
              stat={stat}
              scrollYProgress={scrollYProgress}
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
