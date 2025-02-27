"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ImageDeligation from "./ImageDeligation";

interface CarouselItem {
  imageUrl: string;
  title: string;
  topic: string;
  description: string;
  imageArray: string[];
}

interface ImageArrayDiagonalProps {
  items?: typeof ImageDeligation;
  classNameContainer?: string;
  classNameImage?: string;
  xOffset?: number;
  yOffset?: number;
  blurAmount?: number;
  focusedImageIndex?: number;
  speedFactor?: number;
  initialX?: number;
  finalX?: number;
}

export function ImageArrayDiagonal({
  items = ImageDeligation,
  classNameContainer = "w-screen h-auto",
  classNameImage = "w-40 h-auto",
  xOffset = 85,
  yOffset = 50,
  blurAmount = 2,
  focusedImageIndex = 3,
  speedFactor = 1.1,
  initialX = 125,
  finalX = 200,
}: ImageArrayDiagonalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Create a smoothed version of the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className={`${classNameContainer} w-screen h-auto bg-red-500 relative`}
    >
      <div className="absolute top-0 left-0 w-screen h-10 bg-blue-500"></div>
      {items.map((item, index) => {
        // Create scroll progress transform that goes from 0 to 1
        const scrollFactor = useTransform(smoothProgress, [0, 1], [0, 1]);
        const totalYPosition = useTransform(
          scrollYProgress,
          [0, 1],
          [0, -1000]
        );

        // const intermediateXPosition = useTransform(smoothProgress, [0.1, 1], [0, -3000]);
        const intermediateXPosition = useTransform(
          scrollYProgress,
          [0, 1],
          [1600, -2000]
        );
        const totalXPosition = useTransform(
          intermediateXPosition,
          (value) => value * speedFactor + index * xOffset * 1.5 + initialX
        );

        if (index === 1) {
          useMotionValueEvent(intermediateXPosition, "change", (value) => {
            console.log(
              "______________________________________________________"
            );
            console.log("index:", index);
            console.log("scrollYProgress:", scrollYProgress.get());
            console.log("smoothProgress:", smoothProgress.get());
            console.log("scrollFactor:", scrollFactor.get());
            console.log("intermediateXPosition:", intermediateXPosition.get());
            console.log("index * xOffset:", index * xOffset);
            console.log("totalXPosition:", value);
            console.log("totalYPosition:", totalYPosition.get());
            console.log(
              "______________________________________________________"
            );
          });
        }

        const blur = useTransform(
          scrollYProgress,
          [0, 0.3, 0.7, 1],
          [
            blurAmount * Math.abs(index - focusedImageIndex),
            0,
            0,
            blurAmount * Math.abs(index - focusedImageIndex),
          ]
        );

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              x: totalXPosition,
              y: totalYPosition,
              top: `${index * yOffset}px`,
              filter: useTransform(blur, (value) => `blur(${value}px)`),
              zIndex: items.length - index,
            }}
            initial={{ left: 0 }}
          >
            <Image
              src={item}
              //   alt={`Image ${index + 1}`}
              alt={"this is an image"}
              className={classNameImage}
              width={160}
              height={160}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
