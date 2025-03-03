"use client";

import ComponentTestbed from "@/components/sections/ComponentTestbed";
import Image from "next/image";
import BioHaloLogo from "@/assets/images/BioHaloLogo.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DNAAnalysis from "@/components/ui/DNAAnalysisSVG";
import { StatsBox, SimpleStatsBox } from "@/components/ui/StatsBox";
import FauxBokehAnimation from "@/components/backgroundAnimations/FauxBokehAnimation";

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
    <div className="min-h-screen ">
      {/* <motion.div
        className="fixed top-0 left-0 w-[200px] h-[200px] pointer-events-none z-50 backdrop-blur-sm backdrop-filter"
        animate={{ x: mousePosition.x - 100, y: mousePosition.y - 100 }}
        transition={{ duration: 0, type: "tween" }}
      >
        <div className="absolute inset-0 w-full h-full border-2 border-white rounded-full"></div>
      </motion.div>
 */}
        
          <div className="absolute inset-0 w-screen h-screen bg-purple-500">
          </div>
            {/* <FauxBokehAnimation /> */}
      
      <div>
        
        {/* <ComponentTestbed /> */}
        <DNAAnalysis className="w-full h-full" />
      </div>
    </div>
  );
}
