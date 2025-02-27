"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ImageDeligation from "./ui/ImageDeligation";

interface CarouselItem {
  imageUrl: string;
  title: string;
  topic: string;
  description: string;
}

interface ImageCarouselProps {
  items?: CarouselItem[];
  isSticky?: boolean;
  smoothProgress?: boolean;
  height?: string;
}

export function ImageCarousel({
  items =ImageDeligation,
  isSticky = false,
  smoothProgress = false,
  height = "800px",
}: ImageCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Create smooth progress if enabled
  const progress = smoothProgress
    ? useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
      })
    : scrollYProgress;

  // Update current index based on scroll progress
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      setCurrentIdx(Math.floor(latest * items.length));
    });
    return () => unsubscribe();
  }, [progress, items.length]);

  // Create variants for different card states
  const cardVariants = {
    previous: {
      x: "-100%",
      y: "-5%",
      scale: 1.5,
      filter: "blur(30px)",
      zIndex: 11,
      opacity: 0,
    },
    current: {
      x: "0%",
      y: "0%",
      scale: 1,
      filter: "blur(0px)",
      zIndex: 10,
      opacity: 1,
    },
    next: {
      x: "50%",
      y: "10%",
      scale: 0.8,
      filter: "blur(10px)",
      zIndex: 9,
      opacity: 1,
    },
    afterNext: {
      x: "90%",
      y: "20%",
      scale: 0.5,
      filter: "blur(30px)",
      zIndex: 8,
      opacity: 1,
    },
    last: {
      x: "120%",
      y: "30%",
      scale: 0.3,
      filter: "blur(40px)",
      zIndex: 7,
      opacity: 0,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-visible ${isSticky ? "sticky top-0" : ""}`}
      style={{ height }}
    >
      <motion.div className="absolute w-[90%] max-w-[1140px] h-[80%] left-1/2 -translate-x-1/2">
        {items.map((item, index) => {
          const position = index - currentIdx;
          const variant =
            position === -1
              ? "previous"
              : position === 0
              ? "current"
              : position === 1
              ? "next"
              : position === 2
              ? "afterNext"
              : position === 3
              ? "last"
              : "hidden";

          return (
            <motion.div
              key={index}
              className="absolute left-0 w-[70%] h-full"
              initial="hidden"
              animate={variant}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-1/2 h-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-contain absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-1500"
                />
              </div>
              <motion.div
                className="absolute top-[10vh] -translate-y-1/2 w-[400px]"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  position === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-medium">{item.title}</h2>
                <h3 className="text-4xl font-medium mt-2">{item.topic}</h3>
                <p className="text-sm text-gray-600 mt-4">{item.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
