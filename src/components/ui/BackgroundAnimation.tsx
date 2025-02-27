"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function BackgroundAnimation() {
  const [isClient, setIsClient] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const blobX = useMotionValue(0);
  const blobY = useMotionValue(0);
  const animationRefs = useRef<{ stop: () => void }[]>([]);

  useEffect(() => {
    // Clean up unwanted attributes
    document.body.removeAttribute("cz-shortcut-listen");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          // Stop all animations when out of view
          animationRefs.current.forEach((anim) => anim.stop());
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (isInView) {
        mouseX.set(event.clientX - window.innerWidth / 2);
        mouseY.set(event.clientY - window.innerHeight / 2);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const unsubscribeX = mouseX.on("change", (x) => {
      if (isInView) {
        const animation = animate(blobX, x, {
          type: "spring",
          stiffness: 100,
          damping: 20,
        });
        animationRefs.current.push(animation);
      }
    });

    const unsubscribeY = mouseY.on("change", (y) => {
      if (isInView) {
        const animation = animate(blobY, y, {
          type: "spring",
          stiffness: 100,
          damping: 20,
        });
        animationRefs.current.push(animation);
      }
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      unsubscribeX();
      unsubscribeY();
      observer.disconnect();
      // Stop all animations on cleanup
      animationRefs.current.forEach((anim) => anim.stop());
      animationRefs.current = [];
    };
  }, [mouseX, mouseY, blobX, blobY, isInView]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      ref={componentRef}
      className="gradient-bg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        opacity: isInView ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      {isInView && (
        <div
          className="gradients-container"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <motion.div
            className="absolute w-32 h-32 bg-[#E10C73] rounded-full"
            style={{ top: "20%", left: "20%" }}
          />
          <motion.div
            className="absolute w-32 h-32 bg-[#225566] rounded-full"
            style={{ top: "50%", left: "70%" }}
          />
          <motion.div
            className="absolute w-32 h-32 bg-[#BCE2E2] rounded-full"
            style={{ top: "70%", left: "40%" }}
          />
          <motion.div
            className="absolute w-24 h-24 bg-[#225566] rounded-full"
            style={{
              x: blobX,
              y: blobY,
              top: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        </div>
      )}
    </div>
  );
}
