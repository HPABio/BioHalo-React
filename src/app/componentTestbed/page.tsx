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
import {FluorinatedMaterialsSectionV3} from "@/components/sections2/BioHaloSections/FluorinatedMaterialsSection";
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

  const stats = [
    {
      number: "10000",
      prefix: ">",
      suffix: "",
      label: (
        <>
          <span className="text-lg md:text-xl lg:text-2xl xl:text-4xl  uppercase font-bold text-center bg-gradient-to-bl 
          from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">fluorinated  compounds</span> <br/> are already known
        </>
      ),
    },
    {
      number: "25",
      prefix: "+",
      suffix: "bn €",
      label: "Global Annual PFAS Market",
    },
    {
      number: "20000",
      prefix: ">",
      label: (
        <>
          <span className="text-4xl font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
            Contaminated
          </span>
          <br />
          Sites in Europe alone
        </>
      ),
    },
    {
      number: "50",
      prefix: "+",
      suffix: "bn€",
      label: "Health-Related Costs",
    },
    {
      number: "49",
      prefix: "+",
      suffix: (
        <>
          <span className="text-4xl md:text-7xl ">k</span>
        </>
      ),
      label: (
        <>
          <span className="text-2xl md:text-4xl lg:text-5xl uppercase font-normal">tons of </span>
          <span className="text-2xl md:text-4xl lg:text-5xl uppercase font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
            Fluoropolymers
          </span>
          <br />
          <span className="font-normal text-lg md:text-2xl lg:text-3xl">Are Exported from the EU annually</span>
        </>
      ),
      note: (
        <>
          <span className="text-5xl font-normal">
            Europe is a net exporter of fluoropolymers, with 49,000 tonnes
            estimated to be produced annually in the EU28/EEA, 24,000 tonnes
            exported outside of the EU28/EEA, and around 15,000 tonnes imported.
          </span>
        </>
      ),
      link_source:
        "https://fluoropolymers.eu/wp-content/uploads/2023/12/Fluoropolymers_SEA_2022.pdf",
    },
    {
      number: "3000",
      prefix: "+",
      suffix: " years",
      label: "Maximum Environmental Persistence",
    },
    {
      number: "500",
      prefix: "+",
      suffix: "",
      label: "",
    },
    {
      number: "4.4",
      prefix: "+",
      suffix: "",
      label: (
        <>
          <span
            className="text-center text-4xl lowercase
                font-bold bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent"
          >
            million tons
          </span>
        </>
      ),
    },
    {
      number: "49",
      prefix: "+",
      suffix: (
        <>
          <span className="text-4xl md:text-7xl ">k</span>
        </>
      ),
      label: (
        <>
          <span className="text-sm lg:text-2xl  uppercase font-normal  text-center">tons of </span>
          <span className="text-sm lg:text-2xl  uppercase font-bold text-center bg-gradient-to-bl 
          from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
            Fluoropolymers
          </span>
          <br />
          <span className="font-normal text-base lg:text-lg">Are Exported from the EU annually</span>
        </>
      ),
      note: (
        <>
          <span className="text-5xl font-normal">
            Europe is a net exporter of fluoropolymers, with 49,000 tonnes
            estimated to be produced annually in the EU28/EEA, 24,000 tonnes
            exported outside of the EU28/EEA, and around 15,000 tonnes imported.
          </span>
        </>
      ),
      link_source:
        "https://fluoropolymers.eu/wp-content/uploads/2023/12/Fluoropolymers_SEA_2022.pdf",
    },
  ];

  return (
    <div className="relative min-h-screen h-[200vh] bg-gradient-to-br from-lightGrey via-mintAccent/50 to-tealAccent/70">
      {/* Content Container */}
      <FluorinatedMaterialsSectionV3 stats={stats} />
    </div>
  );
}
