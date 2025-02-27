"use client";

import { useTransform, useSpring, MotionValue, motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedCounterScrollProps {
  value:
    | string
    | { prefix?: string; number: string; suffix?: string | JSX.Element };
  className?: string;
  scrollYProgress: MotionValue<number>;
  scrollEndThreshold?: number;
  ratchet?: boolean;
}

export function AnimatedCounterScroll({
  value,
  className = "",
  scrollYProgress,
  scrollEndThreshold = 1,
  ratchet = false,
}: AnimatedCounterScrollProps) {
  // Handle both string and object value types
  const valueStr =
    typeof value === "string" ? value : `${value.prefix || ""}${value.number}`;

  // Extract prefix and numeric part
  const match = valueStr.match(/^([^0-9]*)([0-9.]+)$/);
  const prefix = match ? match[1] : "";
  const initialNumber = match ? parseFloat(match[2]) : 0;

  // Handle suffix based on value type
  const suffix = typeof value === "string" ? match?.[3] || "" : value.suffix;

  // State to keep track of the highest value reached when ratcheting
  const [highestValue, setHighestValue] = useState(0);

  // Create a spring-based animation for smooth counting
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress to counter value
  const rawCount = useTransform(
    smoothProgress,
    [0, scrollEndThreshold],
    [0, initialNumber],
    { clamp: true }
  );

  // Update highest value when ratcheting
  useEffect(() => {
    if (ratchet) {
      const unsubscribe = rawCount.on("change", (value) => {
        setHighestValue((prev) => Math.max(prev, value));
      });
      return () => unsubscribe();
    }
  }, [ratchet, rawCount]);

  // Use either the ratcheted value or the raw count
  const currentCount = ratchet
    ? useTransform(rawCount, (value) => Math.max(value, highestValue))
    : rawCount;

  // Format the number with the same decimal places as the input
  const numberStr = typeof value === "string" ? match?.[2] : value.number;
  const decimalPlaces = numberStr?.includes(".")
    ? numberStr.split(".")[1].length
    : 0;

  const formattedCount = useTransform(currentCount, (value) =>
    value.toFixed(decimalPlaces)
  );

  return (
    <span className={className}>
      {prefix}
      <motion.span>{formattedCount}</motion.span>
      {suffix}
    </span>
  );
}
