import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { StaticStatsBox } from "@/components/ui/StatsBox";
import AtomDiagram from "@/components/ui/AtomDiagram";
import BlueprintAnimation from "@/components/ui/BlueprintAnimation";

import IndustrialPollution from "@/assets/images/BGImages/IndustrialPollution_960678749.png";
// Import images for materials and coatings showcase
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import FoodPackaging from "@/assets/images/PFAS_product_images/food teaser.jpg";
import ElectronicsImage from "@/assets/images/PFAS_product_images/electronics teaser.jpg";
import TextileImage from "@/assets/images/PFAS_product_images/textile-teaser.jpg";
import BuildingMaterial from "@/assets/images/PFAS_product_images/building teaser.jpg";

interface FluorinatedMaterialsSection2Props {
  stats: any[];
  className?: string;
  debug?: boolean;
}

const productImages = [
  { image: WaterRepellantFabric, label: "Waterproof Textiles" },
  { image: FoodPackaging, label: "Food Packaging" },
  { image: ElectronicsImage, label: "Electronics" },
  { image: WomanWhiteRainJacket, label: "Outdoor Gear" },
  { image: BuildingMaterial, label: "Building Materials" },
  { image: TextileImage, label: "Carpets & Furniture" },
];

export function FluorinatedMaterialsSection2({
  stats,
  className = "",
  debug = false,
}: FluorinatedMaterialsSection2Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: sectionScroll } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Animate based on section visibility
  });

  const { scrollYProgress: gridScroll } = useScroll({
    target: gridRef,
    offset: ["start end", "start start"], // Animate grid items based on grid visibility
  });

  // --- Background Animations ---
  const blueprintOpacity = useTransform(
    sectionScroll,
    [0, 0.2, 0.8, 1],
    [0, 0.1, 0.2, 0]
  );
  const blueprintScale = useTransform(sectionScroll, [0, 1], [1, 1.2]);
  const atom1Y = useTransform(sectionScroll, [0, 1], ["0%", "50%"]);
  const atom2Y = useTransform(sectionScroll, [0, 1], ["0%", "-50%"]);
  const atomOpacity = useTransform(
    sectionScroll,
    [0, 0.3, 0.7, 1],
    [0, 0.15, 0.1, 0]
  );

  // --- Kinetic Typography ---
  const titleY = useTransform(sectionScroll, [0, 0.3], ["50%", "0%"]);
  const titleOpacity = useTransform(sectionScroll, [0, 0.2], [0, 1]);
  const subtitleY = useTransform(sectionScroll, [0.1, 0.4], ["50%", "0%"]);
  const subtitleOpacity = useTransform(sectionScroll, [0.1, 0.3], [0, 1]);
  const para1Y = useTransform(sectionScroll, [0.2, 0.5], ["50%", "0%"]);
  const para1Opacity = useTransform(sectionScroll, [0.2, 0.4], [0, 1]);
  const para2Y = useTransform(sectionScroll, [0.3, 0.6], ["50%", "0%"]);
  const para2Opacity = useTransform(sectionScroll, [0.3, 0.5], [0, 1]);

  // --- Grid Animations ---
  const gridContainerY = useTransform(
    sectionScroll,
    [0.4, 0.7],
    ["100px", "0px"]
  );
  const gridContainerOpacity = useTransform(sectionScroll, [0.4, 0.6], [0, 1]);

  // --- Final Image/Stats Animations ---
  const finalImageScale = useTransform(sectionScroll, [0.7, 1], [0.8, 1]);
  const finalImageOpacity = useTransform(sectionScroll, [0.7, 0.9], [0, 1]);
  const statsBoxY = useTransform(sectionScroll, [0.8, 1], ["50%", "0%"]);
  const statsBoxOpacity = useTransform(sectionScroll, [0.8, 1], [0, 1]);

  if (debug) console.log("Rendering FluorinatedMaterialsSection (Creative)");

  return (
    <section
      ref={containerRef}
      className={`${className} relative w-full overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black min-h-screen py-24 md:py-32 lg:py-40`} // Increased padding/min-height for scroll
      style={{ perspective: "1000px" }} // Enable 3D perspective for children
    >
      {/* --- Dynamic Background Elements --- */}
      <motion.div
        className="absolute inset-0 -z-20 mix-blend-overlay"
        style={{ opacity: blueprintOpacity, scale: blueprintScale }}
      >
        <BlueprintAnimation
          classNames="w-full h-full"
          duration="30s"
          delay="0s"
          iterationCount="infinite"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 -z-20 overflow-hidden"
        style={{ opacity: atomOpacity }}
      >
        <motion.div
          style={{ y: atom1Y }}
          className="absolute bottom-[5%] left-[2%] w-[600px] h-[600px]"
        >
          <AtomDiagram width={600} height={600} color="rgba(18,110,119,0.6)" />
        </motion.div>
        <motion.div
          style={{ y: atom2Y }}
          className="absolute top-[5%] right-[2%] w-[900px] h-[900px]"
        >
          <AtomDiagram width={900} height={900} color="rgba(20,40,50,0.9)" />
        </motion.div>
      </motion.div>

      {/* --- Content Container --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-24 md:gap-32 lg:gap-40">
        {/* --- Animated Intro Text --- */}
        <div className="text-center max-w-4xl">
          <motion.h1
            style={{ y: titleY, opacity: titleOpacity }}
            className="font-bold font-Poppins text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8" // Larger text
          >
            <motion.span
              style={{ y: subtitleY, opacity: subtitleOpacity }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent block mb-3"
            >
              Unveiling
            </motion.span>
            <span className="uppercase bg-gradient-to-r from-tealAccent via-teal-500 to-mintAccent bg-clip-text text-transparent drop-shadow-lg">
              PFAS
            </span>
            <motion.span
              style={{
                y: subtitleY,
                opacity: subtitleOpacity,
                transitionDelay: "0.1s",
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent block mt-3"
            >
              The Persistent Presence
            </motion.span>
          </motion.h1>

          <motion.p
            style={{ y: para1Y, opacity: para1Opacity }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            Per- and polyfluoroalkyl substances (PFAS) – a universe of synthetic
            compounds embedded in modern life. From advanced coatings to
            everyday items, their unique resilience defines their utility.
          </motion.p>
          <motion.p
            style={{ y: para2Y, opacity: para2Opacity }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Yet, this very persistence fuels their dark side. These{" "}
            <span className="font-semibold bg-gradient-to-r from-tealAccent via-teal-500 to-mintAccent bg-clip-text text-transparent">
              "forever chemicals"
            </span>{" "}
            bioaccumulate, weaving a complex web of environmental and health
            concerns.
          </motion.p>
        </div>

        {/* --- Creative Product Grid Showcase --- */}
        <motion.div
          ref={gridRef}
          style={{ y: gridContainerY, opacity: gridContainerOpacity }}
          className="w-full max-w-6xl"
        >
          <h3 className="text-center text-3xl md:text-4xl font-semibold mb-12 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
            Woven Into Our World
          </h3>
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8" // Adjusted grid columns
            style={{ transformStyle: "preserve-3d" }} // Enable 3D transforms for children
          >
            {productImages.map((item, index) => {
              // Calculate scroll progress for *each* item relative to the grid container
              const itemStart = index / productImages.length;
              const itemEnd = (index + 1) / productImages.length;
              const itemProgress = useTransform(
                gridScroll,
                [itemStart, itemEnd],
                [0, 1]
              );

              // More dramatic animations based on itemProgress
              const itemY = useTransform(
                itemProgress,
                [0, 1],
                ["100px", "0px"]
              );
              const itemOpacity = useTransform(itemProgress, [0, 0.5], [0, 1]);
              const itemRotateX = useTransform(
                itemProgress,
                [0, 1],
                ["-45deg", "0deg"]
              ); // Rotate effect
              const itemScale = useTransform(itemProgress, [0, 1], [0.8, 1]);

              return (
                <motion.div
                  key={index}
                  className="relative aspect-[4/3] rounded-xl group overflow-hidden" // Changed aspect ratio
                  style={{
                    y: itemY,
                    opacity: itemOpacity,
                    rotateX: itemRotateX, // Apply rotation
                    scale: itemScale,
                    transformOrigin: "bottom center", // Rotate from bottom
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    rotateX: "-5deg",
                    zIndex: 10,
                  }} // Enhance hover
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-black/30 rounded-xl transition-all duration-500 group-hover:bg-black/10 -z-10"></div>
                  <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 p-3 rounded-xl border border-tealAccent/30 backdrop-blur-md shadow-2xl overflow-hidden h-full flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" // Enhanced image hover
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <p className="absolute bottom-4 left-4 right-4 text-base md:text-lg font-semibold text-white z-10 transition-transform duration-300 group-hover:translate-y-[-5px]">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.p
            className="text-center text-gray-500 max-w-3xl mx-auto mt-10 text-base" // Adjusted text
            style={{ opacity: gridContainerOpacity, transitionDelay: "0.3s" }} // Fade in slightly later
          >
            Their utility is undeniable, finding purpose in countless consumer
            and industrial applications demanding resilience.
          </motion.p>
        </motion.div>

        {/* --- Final Impact Section --- */}
        <motion.div
          style={{ scale: finalImageScale, opacity: finalImageOpacity }}
          className="relative flex flex-col items-center gap-12 md:gap-16 w-full"
        >
          <div className="relative w-full max-w-5xl h-[450px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden border-2 border-tealAccent/30 shadow-2xl">
            <Image
              src={IndustrialPollution}
              alt="Industrial Pollution Representing PFAS Contamination"
              fill
              priority
              style={{ objectFit: "cover" }}
              className="opacity-70 scale-110" // Slightly zoomed in
            />
            {/* More dramatic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/60 to-teal-900/30 mix-blend-hard-light"></div>
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/70"></div>
          </div>

          {/* Animated Stat Box */}
          <motion.div
            style={{ y: statsBoxY, opacity: statsBoxOpacity }}
            className="relative w-full flex justify-center -mt-32 md:-mt-40 lg:-mt-48 z-20" // Adjusted negative margin
          >
            <StaticStatsBox
              classNamesContainer="w-fit h-fit bg-gradient-to-br from-gray-950/80 to-gray-900/80 backdrop-blur-lg border-2 border-mintAccent/40 rounded-xl p-8 shadow-xl" // Enhanced styling
              classNamesTitle="text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-Arial
                             bg-gradient-to-tl from-lightGrey via-white to-lightGrey/90 bg-clip-text text-transparent mb-3 drop-shadow-md" // Brighter title
              classNamesSubTitle="text-center text-mintAccent/80 text-xl sm:text-2xl md:text-3xl font-semibold capitalize mt-2 tracking-wide" // Enhanced subtitle
              stat={stats[4]} // Assuming stats[4] is relevant
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
