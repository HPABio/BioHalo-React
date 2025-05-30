import { motion, useScroll, useTransform } from "framer-motion";
import "tailwindcss/tailwind.css";
import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import Image from "next/image";
import { useRef, ReactNode } from "react";

interface WaterColorRevealProps {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  revealFromCenter?: boolean;
  className?: string;
}

const WaterColorReveal = ({
  children,
  width = "100%",
  height = "100%",
  revealFromCenter = true,
  className = "",
}: WaterColorRevealProps) => {
  const elementRef = useRef(null);

  // Animation runs while element is in viewport
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["end end", "end center"],
  });

  // Convert percentage width/height to pixels
  const widthInPx =
    typeof width === "string" && width.endsWith("%")
      ? 1000 // Default pixel value if percentage
      : Number(width);

  const heightInPx =
    typeof height === "string" && height.endsWith("%")
      ? 1000 // Default pixel value if percentage
      : Number(height);

  // For center reveal, use circle radius
  const circleRadius = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.max(widthInPx, heightInPx) * 1.5] // Increased to ensure full coverage
  );

  scrollYProgress.on("change", value => {
    console.log("scrollYProgress:", value);
    console.log("circleRadius:", circleRadius.get());
  });

  // For side reveal, use rectangle width
  const rectWidth = useTransform(scrollYProgress, [0, 1], [0, widthInPx]);

  return (
    <motion.div
      ref={elementRef}
      className={`relative ${className}`}
      style={{ willChange: "transform" }}
    >
      <svg width={widthInPx} height={heightInPx} className="absolute inset-0">
        <defs>
          <filter id="sandy">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03"
              numOctaves="13"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="60"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask id="revealMask">
            {revealFromCenter ? (
              <motion.circle
                cx="50%"
                cy="50%"
                fill="white"
                r={circleRadius}
                filter="url(#sandy)"
              />
            ) : (
              <motion.rect
                x="0"
                y="0"
                height={heightInPx}
                fill="white"
                filter="url(#sandy)"
                style={{ width: rectWidth }}
              />
            )}
          </mask>
        </defs>
        <foreignObject
          width={widthInPx}
          height={heightInPx}
          mask="url(#revealMask)"
        >
          <div className="w-full h-full">{children}</div>
        </foreignObject>
      </svg>
      {/* Original content rendered underneath to maintain layout */}
      <div className="invisible">{children}</div>
    </motion.div>
  );
};

export default WaterColorReveal;
