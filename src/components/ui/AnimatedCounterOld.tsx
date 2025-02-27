"use client";

import { useState, useEffect } from "react";
import { useTransform, useSpring, MotionValue } from "framer-motion";

interface AnimatedCounterScrollProps {
  value: string;
  className?: string;
  scrollYProgress: MotionValue<number>;
  scrollEndThreshold?: number; // Value between 0 and 1, determines when counting should finish
}

export function AnimatedCounterScroll({
  value,
  className = "",
  scrollYProgress,
  scrollEndThreshold = 1, // Default to finishing at the end of the scroll range
}: AnimatedCounterScrollProps) {
  // Extract prefix, numeric part and suffix
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const initialNumber = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : "";

  // Track the highest number we've counted to
  const [highestCount, setHighestCount] = useState(0);

  // Create a spring-based animation for smooth counting
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress to counter value
  // scrollEndThreshold determines when the counter should reach its final value
  // Example: with threshold 0.5, counter will reach max value halfway through the scroll
  const currentCount = useTransform(
    smoothProgress,
    [0, scrollEndThreshold],
    [0, initialNumber],
    { clamp: true } // Ensures value doesn't exceed range even if scroll continues
  );

  // Update the display value, ensuring it never decreases
  useEffect(() => {
    const unsubscribe = currentCount.on("change", (latest) => {
      if (latest > highestCount) {
        setHighestCount(latest);
      }
    });
    return () => unsubscribe();
  }, [currentCount, highestCount]);

  // Format the number with the same decimal places as the input
  const decimalPlaces = match?.[2].includes(".")
    ? match[2].split(".")[1].length
    : 0;

  return (
    <span className={className}>
      {prefix}
      {highestCount.toFixed(decimalPlaces)}
      {suffix}
    </span>
  );
}
