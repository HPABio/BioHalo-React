"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationControls,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

interface FollowingCircleProps {
  size?: number;
  color?: string;
  delay?: number;
  stiffness?: number;
  damping?: number;
  className?: string;
}

export function FollowingCircle({
  size = 50,
  color = "rgba(34, 85, 102, 0.6)",
  delay = 0,
  stiffness = 50,
  damping = 3,
  className = "",
}: FollowingCircleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref, { stiffness, damping });
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, []);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 50,
      }}
      className={className}
    >
      <motion.div
        ref={ref}
        animate={controls}
        style={{
          position: "absolute",
          x,
          y,
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: `2px solid ${color}`,
            backgroundColor: "transparent",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

interface SpringConfig {
  damping: number;
  stiffness: number;
  restDelta?: number;
}

function useFollowPointer(
  ref: RefObject<HTMLDivElement>,
  springConfig: Partial<SpringConfig> = {}
) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);

  const x = useSpring(xPoint, {
    damping: springConfig.damping ?? 3,
    stiffness: springConfig.stiffness ?? 50,
    restDelta: springConfig.restDelta ?? 0.001,
  });

  const y = useSpring(yPoint, {
    damping: springConfig.damping ?? 3,
    stiffness: springConfig.stiffness ?? 50,
    restDelta: springConfig.restDelta ?? 0.001,
  });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      xPoint.set(clientX - element.offsetWidth / 2);
      yPoint.set(clientY - element.offsetHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}
