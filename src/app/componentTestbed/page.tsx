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

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /*   useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []); */

  return (
    <div className="min-h-screen bg-gray-900">
      {/* <motion.div
        className="fixed top-0 left-0 w-[200px] h-[200px] pointer-events-none z-50 backdrop-blur-sm backdrop-filter"
        animate={{ x: mousePosition.x - 100, y: mousePosition.y - 100 }}
        transition={{ duration: 0, type: "tween" }}
      >
        <div className="absolute inset-0 w-full h-full border-2 border-white rounded-full"></div>
      </motion.div>
 */}

      <div className="absolute inset-0 w-screen h-screen">
        <DNAAnalysis className="w-full h-full hidden" />
      </div>
      {/* <FauxBokehAnimation /> */}

      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-8 text-white">
          Component Testbed
        </h1>

        <NetworkDiagramWithNodes
          enzymeImage={enzymeImage.src}
          enzymeImageAlt="Enzyme"
          width="max-w-3xl"
          imageWidth={600}
          imageHeight={400}
        />

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8 w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Animated CPU Component
          </h2>
          <div className="w-full h-64 flex items-center justify-center">
            {/* <AnimatedCPU
              width="100%"
              height="100%"
              text="CPU"
              showCpuConnections={true}
              animateText={true}
              animateLines={true}
              animateMarkers={true}
            /> */}
          </div>
        </div>

        {/* <ComponentTestbed /> */}
      </div>
    </div>
  );
}
