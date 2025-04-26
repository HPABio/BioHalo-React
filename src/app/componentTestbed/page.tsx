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

import { HeroSection4 } from "@/components/HeroSections/HeroSections";







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
    <div className="relative min-h-screen h-[200vh] bg-gradient-to-br from-lightGrey via-mintAccent/50 to-tealAccent/70">
     <div className="w-screen h-screen top-0 left-0 bg-red-500/0 flex justify-center items-center">
      <HeroSection4 className="w-screen h-screen relative overflow-hidden" />
     </div>
    </div>
  );
}
