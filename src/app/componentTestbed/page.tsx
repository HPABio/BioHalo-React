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
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-red-500/0">
      <BioReactorBP className="w-full h-full" />
      </div>
      <div className="w-1/2 h-1/2 bg-red-500/0">
      <Image src={BioReactorProductBP} alt="BioReactorProductBP" className="w-full h-full" />

      </div>
    </div>
  );
}
