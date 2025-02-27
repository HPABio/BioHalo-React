"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";

const jitterAmplitude = 3;
const baseDuration = 0.5;

// Generate base offsets for each color channel
const generateBaseOffsets = (seed: number) => {
  return Array.from(
    { length: 5 },
    (_, i) => (Math.random() * 2 - 1) * jitterAmplitude
  );
};

const useJitterVariants = (
  index: number,
  hoveredIndex: number | null,
  colorOffsets: {
    x: number[] | null;
    y: number[] | null;
  }
) => {
  return useMemo(() => {
    // If no letter is hovered or no offsets, return static state
    if (hoveredIndex === null || !colorOffsets.x || !colorOffsets.y) {
      return {
        initial: { x: 0, y: 0 },
        animate: { x: 0, y: 0 },
      };
    }

    // Calculate distance and scale factor
    const distance = Math.abs(index - hoveredIndex);
    // Scale reduces by 30% per letter distance
    const scale = Math.max(0, 1 - distance * 0.3);

    // Scale the base offsets by the distance factor
    const scaledXOffsets = colorOffsets.x.map((x) => x * scale);
    const scaledYOffsets = colorOffsets.y.map((y) => y * scale);

    return {
      initial: { x: 0, y: 0 },
      animate: {
        x: scaledXOffsets,
        y: scaledYOffsets,
        transition: {
          duration: baseDuration,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut",
        },
      },
    };
  }, [index, hoveredIndex, colorOffsets]);
};

interface ChromaticTextProps {
  text: string;
}

export const ChromaticText = ({ text }: ChromaticTextProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const letters = text.split("");

  // Generate separate base offsets for each color
  const [colorOffsets, setColorOffsets] = useState<{
    red: { x: number[] | null; y: number[] | null };
    green: { x: number[] | null; y: number[] | null };
    blue: { x: number[] | null; y: number[] | null };
  }>({
    red: { x: null, y: null },
    green: { x: null, y: null },
    blue: { x: null, y: null },
  });

  // When hover changes, generate new base offsets for each color
  useEffect(() => {
    if (hoveredIndex !== null) {
      setColorOffsets({
        red: {
          x: generateBaseOffsets(0),
          y: generateBaseOffsets(1),
        },
        green: {
          x: generateBaseOffsets(2),
          y: generateBaseOffsets(3),
        },
        blue: {
          x: generateBaseOffsets(4),
          y: generateBaseOffsets(5),
        },
      });
    } else {
      setColorOffsets({
        red: { x: null, y: null },
        green: { x: null, y: null },
        blue: { x: null, y: null },
      });
    }
  }, [hoveredIndex]);

  return (
    <h1 className="relative text-9xl font-bold">
      {letters.map((letter, i) => {
        const distance =
          hoveredIndex === null ? Infinity : Math.abs(i - hoveredIndex);
        const scale =
          hoveredIndex === null ? 0 : Math.max(0, 1 - distance * 0.3);
        const applyEffect = scale > 0;

        return (
          <span
            key={`wrapper-${i}`}
            className="relative inline-block"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.span
              className={`absolute text-[rgb(255,0,0)] mix-blend-screen ${
                applyEffect ? "blur-[2px]" : ""
              }`}
              initial={{ x: 0, y: 0 }}
              variants={useJitterVariants(i, hoveredIndex, colorOffsets.red)}
              animate={hoveredIndex !== null ? "animate" : "initial"}
            >
              {letter}
            </motion.span>
            <motion.span
              className={`absolute text-[rgb(0,255,0)] mix-blend-screen ${
                applyEffect ? "blur-[2px]" : ""
              }`}
              initial={{ x: 0, y: 0 }}
              variants={useJitterVariants(i, hoveredIndex, colorOffsets.green)}
              animate={hoveredIndex !== null ? "animate" : "initial"}
            >
              {letter}
            </motion.span>
            <motion.span
              className={`absolute text-[rgb(0,0,255)] mix-blend-screen ${
                applyEffect ? "blur-[2px]" : ""
              }`}
              initial={{ x: 0, y: 0 }}
              variants={useJitterVariants(i, hoveredIndex, colorOffsets.blue)}
              animate={hoveredIndex !== null ? "animate" : "initial"}
            >
              {letter}
            </motion.span>
            <span className="text-white/0">{letter}</span>
          </span>
        );
      })}
    </h1>
  );
};
