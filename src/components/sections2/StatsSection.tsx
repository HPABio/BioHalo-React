"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import dropletsImageDark from "@/assets/images/droplets-dark.jpg";
import { useRef, useState, useEffect } from "react";
import { AnimatedCounterScroll } from "../ui/AnimatedCounterScroll";
//import dropletsImage from '@/assets/images/Droplets1.jpg'
//import BioHaloBackground from '@/assets/images/BioHalo-background-compressed.jpeg'

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

export function StatsSection({ className }: { className?: string }) {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null); // This line is used to get the reference of the section element

  console.log("Rerendering StatsSection");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(`Scroll Y position: ${value}`);
  });

  return (
    <section
      ref={sectionRef}
      className={`relative bg-lightGrey overflow-hidden min-h-screen md:min-h-0 ${className || ''}`}
    >
      {/* Background Image */}
{/*       <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <Image src={dropletsImageDark} alt="Droplets" fill className="object-cover" />
      </div> */}

      {/* Content */}
      <div
        className="relative container mx-auto px-4 py-16 z-10"
        style={{ willChange: "transform" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-black/20 p-8 rounded-lg text-center shadow-xl"
            >
              <h3 className="text-5xl md:text-[clamp(2.5rem,3cqw,3rem)] font-bold text-tealAccent mb-2">
                <AnimatedCounterScroll
                  value={`${stat.prefix}${stat.number}${stat.suffix || ""}`}
                  scrollYProgress={scrollYProgress}
                  scrollEndThreshold={isMobile ? 0.45 : 0.4}
                />
              </h3>
              <p className="text-mintAccent text-lg pt-2 font-bold -mt-4" style={{lineHeight: "1"}}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
