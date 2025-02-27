'use client'

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, duration = 2, className = "" }: AnimatedCounterProps) {
  // Extract prefix, numeric part and suffix
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const initialNumber = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : "";
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // Handle decimal places if present in the original value
    const decimalPlaces = match?.[2].includes('.') ? 
      match[2].split('.')[1].length : 0;
    return latest.toFixed(decimalPlaces);
  });
  
  useEffect(() => {
    const animation = animate(count, initialNumber, {
      duration,
      ease: "easeOut"
    });

    return animation.stop;
  }, [count, initialNumber, duration]);

  return (
    <span className={className}>
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
} 