"use client";

import ComponentTestbed from "@/components/sections/ComponentTestbed";
import Image from "next/image";
import BioHaloLogo from "@/assets/images/BioHaloLogo.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DNAAnalysis from "@/components/ui/DNAAnalysisSVG";
import { StatsBox, SimpleStatsBox } from "@/components/ui/StatsBox";
import FauxBokehAnimation from "@/components/backgroundAnimations/FauxBokehAnimation";
import AnimatedCPU from "@/components/ui/AnimatedCPU";
import NetworkDiagramWithNodes from "@/components/ui/NetworkDiagramWithNodes";
import enzymeImage from "@/assets/images/AdobeStock/AdobeStock_747938517 Compressed.png";
import BioHaloLogoRingOnly from "@/components/ui/BioHaloLogoRingOnly";
import BioHaloLogo3 from "@/components/ui/BioHaloLogo3";
import BioReactorBP from "@/components/ui/BioReactorBP";
import BioReactorProductBP from "@/assets/images/BluePrintSVG/bio-reactor-product.svg";
import { ImageCarousel } from "@/components/ImageCarousel";

import MeshFabric from "@/assets/images/BGImages/Mesh-fabric_1020623350.png";
import AdobeStock_222564810 from "@/assets/images/BGImagesTest/AdobeStock_222564810.jpeg";
import AdobeStock_960678749 from "@/assets/images/BGImagesTest/AdobeStock_960678749.jpeg";
import ColorfulGradientRainbowTexture from "@/assets/images/BGImagesTest/ColorfulGradientRainbowTexture.jpeg";
import waterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import dropletsDark from "@/assets/images/droplets-dark.jpg";

import {
  HeroSection1,
  HeroSection2,
  HeroSection3,
  HeroSection4,
  HeroSection5,
} from "@/components/HeroSections/HeroSections";

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /*   useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []); */

  // Array of background images
  const backgroundImages = [
    MeshFabric,
    // AdobeStock_222564810,
    dropletsDark,
    waterRepellantFabric,
    // Add more images as needed
  ];

  return (
    <div className="relative min-h-screen h-[200vh] bg-gradient-to-br from-lightGrey via-mintAccent/50 to-tealAccent/70">
      {/* Content Container */}
      <div className="w-full h-full bg-black mt-[80px] relative">
        {/* Background Image Slider */}
        <div className="w-screen h-screen relative top-0 left-0 flex bg-red-500/0 justify-center items-center z-10 border border-red-500">
          <motion.div className="absolute inset-0">
            {backgroundImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  times: [0, 0.2, 0.8, 1],
                  delay: index * 2.67, // Stagger the animations
                }}
              >
                <Image
                  src={image}
                  alt="Background"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute w-full h-full bg-gradient-to-r from-black via-black/50 to-transparent" />
          <div className="absolute w-full h-full bg-gradient-to-br from-black via-black/50 to-transparent" />
        </div>
        {/* Content Container */}
        <div className="absolute w-screen h-screen top-0 left-0 z-10">
          {/* Flex Container */}
          <div className="w-full h-full bg-blue-500/0 border border-blue-500 flex flex-col-2 items-center justify-center">
            <div className="w-2/3 h-full bg-gradient-to-br from-black via-black/0 to-transparent border-green-500/0 px-12">
              {/* TEXT COLUMN */}
              <div className="w-full bg-red-500/0">
                <h1 className="max-w-[720px] font-black font-Arial text-4xl xl:text-6xl bg-gradient-to-br from-mintAccent to-tealAccent bg-clip-text text-transparent pb-10">
                  <span className="text-9xl scale-[2] opacity-80 bg-gradient-to-tr from-red-600 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
                    PFAS{" "}
                  </span>
                  <br />
                  <span className="">also known as</span>
                  <br />"
                  <span className="absolute bg-gradient-to-tr from-red-600 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent blur-sm opacity-50">
                    Forever Chemicals
                  </span>
                  <span className="bg-gradient-to-tr from-red-600 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
                    Forever Chemicals
                  </span>
                  "
                  <span className="">
                    {" "}
                    are fluorinated materials that can be found everywhere
                  </span>
                </h1>
              </div>

              <div className="w-2/3">
                <div className="space-y-4 ">
                  <p className="text-2xl md:text-3xl text-gray-300">
                    From coatings and textiles to <br />
                    food packaging and electronics
                  </p>
                  <p className="text-lg max-w-md pt-4 leading-relaxed text-gray-500">
                    Due to their unique properties, like heat resistance and
                    water repellency, they are used in a wide range of products.
                    However, these special properties also make them nearly
                    impossible to degrade and <br />{" "}
                    <span className="font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
                      highly toxic
                    </span>
                    . PFAS accumulate in the environment and pose a threat to
                    public health and the environment itself.
                  </p>
                </div>
              </div>
            </div>

            {/* Empty Space / Right Column */}
            <div className="w-1/3 h-full bg-green-500/0 border-green-500/0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
