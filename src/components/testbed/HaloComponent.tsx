"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const HaloComponent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left - rect.width / 2,
          y: e.clientY - rect.top - rect.height / 2,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textVariants = {
    animate: {
      x: mousePosition.x * 0.1,
      y: mousePosition.y * 0.1,
      transition: { type: "spring", stiffness: 150, damping: 15 },
    },
  };

  const jitterVariants1 = {
    animate: {
      x: [0, 5, -3, 2, 0],
      y: [0, -2, 4, -3, 0],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const jitterVariants2 = {
    animate: {
      x: [0, -4, 6, -2, 0],
      y: [0, 3, -5, 2, 0],
      transition: {
        duration: 4.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const jitterVariants3 = {
    animate: {
      x: [0, 3, -5, 4, 0],
      y: [0, -4, 2, -3, 0],
      transition: {
        duration: 3.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const jitterVariants4 = {
    animate: {
      x: [0, -3, 4, -6, 0],
      y: [0, 5, -2, 4, 0],
      transition: {
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const jitterVariants5 = {
    animate: {
      x: [0, 4, -4, 3, 0],
      y: [0, -3, 5, -4, 0],
      transition: {
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-w-screen min-h-screen w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-mintAccent to-tealAccent">
      <div className="relative flex items-center justify-center min-h-screen overflow-visible">
        <div className="absolute inset-0 w-full h-full min-w-screen min-h-screen overflow-visible bg-red-500/0 "></div>
        <div className="w-full h-full overflow-visible bg-red-500/0 flex flex-row items-center justify-center">
          <div
            className="w-full h-full rounded-full bg-white/90 relative"
            style={{ "--circle-size": "25rem" } as React.CSSProperties}
          >
            <div className="w-full h-full bg-red-500/0 absolute flex items-center justify-center overflow-visible">
              <motion.div
                variants={jitterVariants1}
                animate="animate"
                className=" 
                w-[calc(var(--circle-size)*1.2)] h-[calc(var(--circle-size)*1.2)] rounded-full
                bg-pink-400 opacity-100
                mix-blend-normal"
              />
            </div>

            <div className="w-full h-full bg-red-500/90 absolute flex items-center justify-center overflow-visible">
              <motion.div
                variants={jitterVariants2}
                animate="animate"
                className="absolute 
                w-[calc(var(--circle-size)*1.2)] h-[calc(var(--circle-size)*1.2)] rounded-full
                bg-purple-400 opacity-100
                blur-sm mix-blend-screen"
              />
            </div>

            <div className="w-full h-full bg-red-500/0 absolute flex items-center justify-center overflow-visible">
              <motion.div
                variants={jitterVariants3}
                animate="animate"
                className="absolute 
                w-[calc(var(--circle-size)*1.2)] h-[calc(var(--circle-size)*1.1)] rounded-full
                bg-blue-400 opacity-100
                blur-sm mix-blend-screen"
              />
            </div>

            <div className="w-full h-full bg-red-500/0 absolute flex items-center justify-center overflow-visible">
              <motion.div
                variants={jitterVariants4}
                animate="animate"
                className="absolute 
                w-[calc(var(--circle-size)*1.3)] h-[calc(var(--circle-size)*1.2)] rounded-full
                bg-teal-400 opacity-100
                blur-sm mix-blend-screen"
              />
            </div>

            <div className="w-full h-full bg-red-500/0 absolute flex items-center justify-center overflow-visible">
              <motion.div
                variants={jitterVariants5}
                animate="animate"
                className="absolute 
                w-[calc(var(--circle-size)*1.3)] h-[calc(var(--circle-size)*1.3)] rounded-full
                bg-orange-400 opacity-100
                blur-sm mix-blend-screen"
              />
            </div>

            <div className="w-full h-full bg-red-500/0 absolute flex items-center justify-center overflow-visible">
              <div className=" w-[calc(var(--circle-size)*1.2)] h-[calc(var(--circle-size)*1.2)] rounded-full bg-white/90 absolute"></div>
            </div>
            <div className="w-full h-full bg-red-500/0 absolute flex items-center justify-center overflow-visible">
              <div className=" w-[calc(var(--circle-size)*1.2-1rem)] h-[calc(var(--circle-size)*1.2-1rem)] rounded-full bg-tealAccent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HaloComponent2 = () => {
  return (
    <section className="w-screen h-[50vh] flex items-center justify-between px-16 bg-gradient-to-br from-blue-500/20 to-blue-500/5">
      <MorphingCircles />
    </section>
  );
};

interface NestedDivProps {
  count?: number; // Number of divs to generate
  classNamesCircles?: string;
  classNamesContainer?: string;
  startColor?: string;
  endColor?: string;
}

const NestedDivs = ({
  count = 50,
  classNamesCircles = "",
  classNamesContainer = "",
  startColor = "rgb(255, 0, 0)",
  endColor = "rgb(0, 0, 255)",
}: NestedDivProps) => {
  // Memoize the random values to prevent recalculation on each render
  const animations = useRef(
    Array.from({ length: count }, () => ({
      offset: {
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
      },
      duration: {
        rotation: 10 + Math.random() * 20,
        position: 7 + Math.random() * 5,
      },
    }))
  ).current;

  const generateDivs = (level: number): JSX.Element | null => {
    if (level >= count) return null;

    const factor = level / (count - 1);
    const startRGB = startColor.match(/\d+/g)?.map(Number) || [255, 0, 0];
    const endRGB = endColor.match(/\d+/g)?.map(Number) || [0, 0, 255];

    const currentColor = `rgb(${Math.round(
      startRGB[0] + (endRGB[0] - startRGB[0]) * factor
    )}, ${Math.round(
      startRGB[1] + (endRGB[1] - startRGB[1]) * factor
    )}, ${Math.round(startRGB[2] + (endRGB[2] - startRGB[2]) * factor)})`;

    const { offset, duration } = animations[level];

    return (
      <motion.div
        className={`absolute w-full h-full rounded-full mix-blend-color-burn ${classNamesCircles}`}
        style={{
          backgroundColor: currentColor,
          willChange: "transform", // Hint to browser to optimize transforms
        }}
        animate={{
          rotate: 360,
          x: [offset.x, -offset.x, offset.x],
          y: [offset.y, -offset.y, offset.y],
        }}
        transition={{
          rotate: {
            duration: duration.rotation,
            repeat: Infinity,
            ease: "linear",
            // Use GPU-accelerated transforms
            type: "tween",
          },
          x: {
            duration: duration.position,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
            type: "tween",
          },
          y: {
            duration: duration.position,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
            type: "tween",
          },
        }}
      >
        {generateDivs(level + 1)}
      </motion.div>
    );
  };

  return (
    <div
      className={`w-full h-full overflow-visible ${classNamesContainer}`}
      style={{
        transform: "translateZ(0)", // Force GPU acceleration
        backfaceVisibility: "hidden",
      }}
    >
      {generateDivs(0)}
    </div>
  );
};

export const HaloComponent3 = ({
  className = "w-full h-full",
  count = 15,
  baseDuration = 4,
  radius = 100,
}: {
  className?: string;
  count?: number;
  baseDuration?: number;
  radius?: number;
}) => {
  return (
    <section className={`flex items-center justify-between px-16 ${className}`}>
      <div className="mx-auto w-full flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-red-500/0 relative overflow-visible">
          <CircularRotation
            count={count}
            baseDuration={baseDuration}
            radius={radius}
          />
        </div>
      </div>
    </section>
  );
};

interface CircularRotationProps {
  count: number;
  baseDuration: number;
  radius: number;
}

const CircularRotation = ({
  count,
  baseDuration,
  radius,
}: CircularRotationProps) => {
  const circles = Array.from({ length: count }, (_, i) => {
    // Calculate duration multiplier (1, 1.1, 1.2, 1.3, then back to 1)
    const durationMultiplier = 1 + 0.1 * (i % 4);

    // Calculate initial offset based on circle index
    const baseAngle = (i / count) * Math.PI * 2;

    return (
      <motion.div
        key={i}
        className="absolute w-[90%] h-[90%] rounded-full border-2 border-mintAccent/20 bg-gradient-to-b from-tealAccent/10 to-mintAccent/60
        mix-blend-color-burn"
        style={{
          willChange: "transform",
          x: Math.cos(baseAngle) * radius,
          y: Math.sin(baseAngle) * radius,
        }}
        animate={{
          x: [
            Math.cos(baseAngle) * radius,
            Math.cos(baseAngle + Math.PI / 2) * radius,
            Math.cos(baseAngle + Math.PI) * radius,
            Math.cos(baseAngle + (3 * Math.PI) / 2) * radius,
            Math.cos(baseAngle + 2 * Math.PI) * radius,
          ],
          y: [
            Math.sin(baseAngle) * radius,
            Math.sin(baseAngle + Math.PI / 2) * radius,
            Math.sin(baseAngle + Math.PI) * radius,
            Math.sin(baseAngle + (3 * Math.PI) / 2) * radius,
            Math.sin(baseAngle + 2 * Math.PI) * radius,
          ],
        }}
        transition={{
          duration: baseDuration * durationMultiplier,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
    );
  });

  return (
    <div
      className="w-full h-full relative"
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      {circles}
    </div>
  );
};

export const MorphingCircles = () => {
  const filterRef = useRef<SVGSVGElement>(null);

  const circleVariants = {
    animate: (i: number) => ({
      x: [0, 200, -180, 150, -100, 0],
      y: [0, -150, 180, -120, 140, 0],
      scale: [1, 1.4, 0.8, 1.2, 0.9, 1],
      transition: {
        duration: 15 + i * 0.8,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    }),
  };

  return (
    <div className="relative w-[800px] h-[800px]">
      <svg width="0" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="12"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="relative w-full h-full" style={{ filter: "url(#goo)" }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-mintAccent to-tealAccent opacity-90"
            style={{
              x: -80,
              y: -80,
            }}
            custom={i}
            variants={circleVariants}
            animate="animate"
          />
        ))}
      </div>
    </div>
  );
};
