"use client";

import Image from "next/image";
import React, { Suspense, memo, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScreenSizeDEVTOOL } from "@/components/ui/ScreenSizeDEVTOOL";
// Hero Sections
import {
  HeroSection1,
  HeroSection2,
  HeroSection3,
  HeroSection4,
  HeroSection5,
} from "@/components/HeroSections/HeroSections";

// BioHalo Sections
import { FluorinatedMaterialsSectionV2 } from "@/components/sections2/BioHaloSections/FluorinatedMaterialsSection";
import { WhatWeDoSection } from "@/components/sections2/BioHaloSections/WhatWeDoSection";
import { TeamSection } from "@/components/sections2/BioHaloSections/TeamSection";
import { PlatformTechnologySection } from "@/components/sections2/BioHaloSections/PlatformTechnologySection";

// Mobile Version
import MobileIconCarousel from "@/components/mobileVersion/mobileIconCarousel";
import MobileNetworkDiagram from "@/components/mobileVersion/mobileNetworkDiagram";
import MobileNetworkDiagramWithNodes from "@/components/mobileVersion/mobileNetworkDiagramWithNodes";
import { MobileFluorinatedMaterialsSection } from "@/components/mobileVersion/mobileFluorinatedMaterialsSection";
import { MobileFluorinatedMaterialsSectionV2 } from "@/components/mobileVersion/mobileFluorinatedMaterialsSectionV2";
import { MobilePlatformTechnologySection } from "@/components/mobileVersion/mobilePlatformTechnologySection";
import { MobileWhatWeDoSection } from "@/components/mobileVersion/mobileWhatWeDoSection";

import { ContactSection } from "@/components/sections2/BioHaloSections/ContactSection";
import { TransitionSectionFour } from "@/components/sections2/BioHaloSections/TransitionSectionFour";

// UI Components
import IconCarousel from "@/components/ui/IconCarousel";
import { SimpleStatsBox } from "@/components/ui/StatsBox";

// Bento Components
import { BentoIntro } from "@/components/bentos/Gen_3_Bentos/BentoIntro";
import { BentoContact } from "@/components/bentos/Gen_3_Bentos/BentoContact";
import { BentoDurability } from "@/components/bentos/Gen_3_Bentos/BentoDurability";
import { BentoHeatResistant } from "@/components/bentos/Gen_3_Bentos/BentoHeatResistant";
import { BentoLongLasting } from "@/components/bentos/Gen_3_Bentos/BentoLongLasting";
import { BentoPeriodicTable } from "@/components/bentos/Gen_3_Bentos/BentoPeriodicTable";
import { BentoProcess } from "@/components/bentos/Gen_3_Bentos/BentoProcess";
import { BentoStats } from "@/components/bentos/Gen_3_Bentos/BentoStats";
import { BentoTeam } from "@/components/bentos/Gen_3_Bentos/BentoTeam";
import { BentoVideo } from "@/components/bentos/Gen_3_Bentos/BentoVideo";
import { BentoWaterRepellant } from "@/components/bentos/Gen_3_Bentos/BentoWaterRepellant";
import { BentoSectionGen3 } from "@/components/sections2/BentoSectionGen3";
import { BentoVerticalDouble } from "@/components/bentos/Gen_3_Bentos/BentoVerticalDouble ";

// Images
import BioHaloBG from "@/assets/images/BioHalo-background-compressed.jpeg";
import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import PfasBP from "@/assets/images/BluePrintStyle/pfasBP.svg";
import BioReactor from "@/assets/images/BluePrint with Color/bio-reactor.png";
import BioReactorBlueprint from "@/assets/images/BioReactorBlueprint.svg";
import enzymeImage from "@/assets/images/AdobeStock/AdobeStock_747938517_Compressed.png";
import industrialPollutionImage from "@/assets/images/VariousImages/IndustrialPollution.png";
import industrialPollutionImageV2 from "@/assets/images/VariousImages/IndutrialPollutionV2.png";
import industrialPollutionImageV3 from "@/assets/images/VariousImages/IndustrialPollutionV3.png";
import industrialPollutionImageV3flipped from "@/assets/images/VariousImages/IndustrialPollutionV3flipped.png";
import ribbonImage from "@/assets/images/BGImagesTest/Twisted Ribbon Structure transparent.png";
import abstractImage from "@/assets/images/BGImagesTest/Abstract Black and White Design Transition.png";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import Pharma from "@/assets/images/BluePrintSVG/Pharma.svg";
import MeshFabric from "@/assets/images/Mesh-fabric.png";
import Droplets1 from "@/assets/images/Droplets1.jpg";
import BGFabricTealPink from "@/assets/images/BGImagesTest/BGFabricTealPink.png";
import BlackSmokeDivider from "@/assets/images/VariousImages/BlackSmokeDivider.png";

// Letter Images - WornOurMetal
import A from "@/assets/images/Lettering/WornOurMetal/A.png";
import C from "@/assets/images/Lettering/WornOurMetal/C.png";
import C2 from "@/assets/images/Lettering/WornOurMetal/C2.png";
import E from "@/assets/images/Lettering/WornOurMetal/E.png";
import E2 from "@/assets/images/Lettering/WornOurMetal/E2.png";
import F from "@/assets/images/Lettering/WornOurMetal/F.png";
import H from "@/assets/images/Lettering/WornOurMetal/H.png";
import I from "@/assets/images/Lettering/WornOurMetal/I.png";
import I2 from "@/assets/images/Lettering/WornOurMetal/I2.png";
import M from "@/assets/images/Lettering/WornOurMetal/M.png";
import L from "@/assets/images/Lettering/WornOurMetal/L.png";
import O from "@/assets/images/Lettering/WornOurMetal/O.png";
import R from "@/assets/images/Lettering/WornOurMetal/R.png";
import S from "@/assets/images/Lettering/WornOurMetal/S.png";
import V from "@/assets/images/Lettering/WornOurMetal/V.png";

// Letter Images - BlackLiquid
import ABlackLiquid from "@/assets/images/Lettering/BlackLiquid/A.png";
import CBlackLiquid from "@/assets/images/Lettering/BlackLiquid/C.png";
import C2BlackLiquid from "@/assets/images/Lettering/BlackLiquid/C2.png";
import EBlackLiquid from "@/assets/images/Lettering/BlackLiquid/E.png";
import E2BlackLiquid from "@/assets/images/Lettering/BlackLiquid/E2.png";
import FBlackLiquid from "@/assets/images/Lettering/BlackLiquid/F.png";
import F2BlackLiquid from "@/assets/images/Lettering/BlackLiquid/F2.png";
import HBlackLiquid from "@/assets/images/Lettering/BlackLiquid/H.png";
import IBlackLiquid from "@/assets/images/Lettering/BlackLiquid/I.png";
import LBlackLiquid from "@/assets/images/Lettering/BlackLiquid/L.png";
import MBlackLiquid from "@/assets/images/Lettering/BlackLiquid/M.png";
import OBlackLiquid from "@/assets/images/Lettering/BlackLiquid/O.png";
import O2BlackLiquid from "@/assets/images/Lettering/BlackLiquid/O2.png";
import PBlackLiquid from "@/assets/images/Lettering/BlackLiquid/P.png";
import RBlackLiquid from "@/assets/images/Lettering/BlackLiquid/R.png";
import SBlackLiquid from "@/assets/images/Lettering/BlackLiquid/S.png";
import S2BlackLiquid from "@/assets/images/Lettering/BlackLiquid/S2.png";
import VBlackLiquid from "@/assets/images/Lettering/BlackLiquid/V.png";

import ColorfulGradientRainbowTexture from "@/assets/images/BGImagesTest/ColorfulGradientRainbowTexture.jpeg";
import { AlternativeWhatWeDoSection } from "@/components/alternativeLayout/alternativeWhatWeDoSection";
import { AlternativeFluorinatedMaterialsSection } from "@/components/alternativeLayout/alternativeFluorinatedMaterialsSection";
import AtomDiagram from "@/components/ui/AtomDiagram";
import { BentoIntroNoBG } from "@/components/bentos/Gen_3_Bentos/BentoIntroNoBG";

// Memoize static sections to prevent re-renders
const MemoizedTransitionSectionFour = memo(TransitionSectionFour);

// Array of letter images for the "FOREVER CHEMICALS" display
const letterImages = [
  F, // F
  O, // O
  R, // R
  E, // E
  V, // V
  E2, // E
  R, // R

  C, // C
  C, // C
  H, // H
  E, // E
  M, // M (Note: M is not in the imports, would need to be added)
  I, // I
  C2, // C
  A, // A
  L, // L
  S, // S
];
const letterImagesBlackLiquid = [
  FBlackLiquid, // F
  O2BlackLiquid, // O
  RBlackLiquid, // R
  EBlackLiquid, // E
  VBlackLiquid, // V
  E2BlackLiquid, // E
  RBlackLiquid, // R

  CBlackLiquid, // C
  CBlackLiquid, // C
  HBlackLiquid, // H
  EBlackLiquid, // E
  MBlackLiquid, // M (Note: M is not in the imports, would need to be added)
  IBlackLiquid, // I
  C2BlackLiquid, // C
  ABlackLiquid, // A
  LBlackLiquid, // L
  SBlackLiquid, // S
];

// Copy all the content from page.tsx here
const stats = [
  {
    number: "10000",
    prefix: ">",
    suffix: "",
    label: (
      <>
        <span
          className="text-lg md:text-xl lg:text-2xl xl:text-4xl  uppercase font-bold text-center bg-gradient-to-bl 
        from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent"
        >
          fluorinated compounds
        </span>{" "}
        <br /> are already known
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
        <span className="text-2xl md:text-4xl lg:text-5xl uppercase font-normal">
          tons of{" "}
        </span>
        <span className="text-2xl md:text-4xl lg:text-5xl uppercase font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
          Fluoropolymers
        </span>
        <br />
        <span className="font-normal text-lg md:text-2xl lg:text-3xl">
          Are Exported from the EU annually
        </span>
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
        <span className="text-sm lg:text-2xl  uppercase font-normal  text-center">
          tons of{" "}
        </span>
        <span
          className="text-sm lg:text-2xl  uppercase font-bold text-center bg-gradient-to-bl 
        from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent"
        >
          Fluoropolymers
        </span>
        <br />
        <span className="font-normal text-base lg:text-lg">
          Are Exported from the EU annually
        </span>
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

export default function AlternativeLayout() {
  const ref4 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref4,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main
      className="min-h-screen w-full h-full bg-gradient-to-br from-lightGrey via-mintAccent/50 to-tealAccent/70 overflow-hidden font-poppins"
      id="top"
    >
      <ScreenSizeDEVTOOL />
      {/* Invisible element for top section detection */}
      <div
        className="absolute top-0 h-32 w-full pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* <HeroSection1 className="w-screen h-screen relative" /> */}
      {/* <HeroSection2 className="w-screen h-screen relative overflow-hidden" /> */}
      {/* <HeroSection4 className=" block w-screen h-screen relative overflow-hidden" /> */}
      <HeroSection4 className=" md:hidden block w-screen h-screen relative overflow-hidden" />
      <HeroSection5 className=" hidden md:block w-screen h-screen relative overflow-hidden" />

      {/* Transition Section */}
      <section className="relative w-screen max-h-[120vh] z-10 " id="transition-section-one">
        <div className="flex flex-col item justify-center">
                <div className="w-full h-[10vh] border-2 border-red-500/0"></div>
                <div className="w-full h-[400px] border-2 border-green-500/0
                flex flex-col items-center justify-center">
                  {/* Fluorine Element / Periodic Table */}
                      <div className="relative flex flex-col items-center justify-center">
                            <AtomDiagram className="absolute h-full w-full top-[-50%] left-[50%] translate-x-[-50%] translate-y-[50%]
                            scale-[3] opacity-20" />
                                <div
                                  className="relative aspect-square w-40 border-[8px] border-lightGrey/80 drop-shadow-2xl
                                  rounded-xl flex flex-col items-center justify-center bg-gradient-to-br from-pink-800/10 to-purple-900/10 backdrop-blur-md text-gray-600
                                  hover:scale-105 transition-transform duration-300"
                                >
                                  <span className="text-[min(8vw,4rem)] font-bold tracking-wider">
                                    F
                                  </span>
                                  <span className="text-[min(4vw,1rem)] font-semibold tracking-wide mt-1">
                                    Fluorine
                                  </span>
                                  <span className="absolute top-2 left-3 text-[min(6vw,0.875rem)] font-bold">
                                    9
                                  </span>
                                  <span className="text-[min(3vw,0.875rem)] mt-2 font-medium">
                                    18.99
                                  </span>
                                </div>
                                {/* Subtitle */}
                                <h2
                                  className="text-3xl md:text-4xl font-bold text-gray-600 text-center mt-8 max-w-2xl leading-relaxed"
                                >
                                  our modern society is built on{" "}<br />
                                  <span className="bg-gradient-to-bl from-red-800/90 via-pinkAccent to-purple-900/80 bg-clip-text text-transparent font-extrabold">
                                    fluorinated materials
                                  </span>
                                </h2>
                      </div>
                </div>
                <div className="w-full h-[10vh] border-2 border-yellow-500/0 hidden"></div>
        </div>

       
        {/* <div
          className="relative bottom-0 left-0 w-full min-h-[200px] h-[30vw] xl:h-[30vw]"
          style={{
            backgroundImage: `url(${BlackSmokeDivider.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        /> */}
        {/* Enzyme Image right */}
        <div
          className="absolute w-[80vw] h-[80vw] max-w-[1450px] 
            top-0 right-0 opacity-1 blur-[6px] translate-x-[35%] translate-y-[-50%] pointer-events-none"
        >
          <motion.div
            className="absolute w-full h-full hidden sm:block"
            style={{
              opacity: useTransform(useScroll().scrollY, [0, 600], [1, 0.1]),    
              scale: useTransform(useScroll().scrollY, [0, 1000], [1, 1.1]),
              x: useTransform(useScroll().scrollY, [0, 1000], [0, 500]),
              y: useTransform(useScroll().scrollY, [0, 1000], [0, -100]),
              filter: useTransform(
                useScroll().scrollY,
                [0, 1000],
                ["blur(0px)", "blur(20px)"]
              ),
            }}
          >
            <Image
              src={enzymeImage}
              alt="Enzyme"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative w-full  overflow-hidden z-20 font-poppins">


        <div className="w-screen mx-auto
        bg-gradient-to-t from-tealAccent via-tealAccent/50 to-transparent">
            <BentoIntroNoBG className="w-full max-w-[650px] mx-auto bg-mint-60 mt-12" />
        </div> 

        <div className="w-full h-[30%] 
        bg-gradient-to-t from-tealAccent via-tealAccent/50 to-transparent"></div>
        {/* <BentoIntro className="w-full max-w-[650px] mx-auto" /> */}
  
        <div className="w-screen mx-auto flex flex-col items-center pt-12
        bg-gradient-to-b bg-teal-950 from-tealAccent via-black to-black">
          <h1 className="w-2/3 text-wrap text-center text-4xl font-normal text-white py-6"> Some examples
            include <br /> materials becoming especially:
            </h1>
            <div className="max-w-[750px] mx-auto flex flex-col gap-8 px-[16%] md:px-0">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <BentoHeatResistant className="w-full md:w-1/2 border-2 border-lightGrey" />
                <div className="w-full md:w-1/2 text-white text-lg">
                  <h3 className="text-2xl font-bold mb-2">Heat Resistant</h3>
                  <p>These materials can withstand extreme temperatures while maintaining their structural integrity and performance.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-4 items-center">
                <BentoDurability className="w-full md:w-1/2 border-2 border-lightGrey" />
                <div className="w-full md:w-1/2 text-white text-lg">
                  <h3 className="text-2xl font-bold mb-2">Highly Durable</h3>
                  <p>Exceptional resistance to wear and tear, making them ideal for long-lasting applications.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <BentoWaterRepellant className="w-full md:w-1/2 border-2 border-lightGrey" />
                <div className="w-full md:w-1/2 text-white text-lg">
                  <h3 className="text-2xl font-bold mb-2">Repellant to Liquids</h3>
                  <p>Superior water resistance properties that prevent moisture absorption and degradation.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-4 items-center">
                <BentoLongLasting className="w-full md:w-1/2 border-2 border-lightGrey" />
                <div className="w-full md:w-1/2 text-white text-lg">
                  <h3 className="text-2xl font-bold mb-2">Long Lasting</h3>
                  <p>Extended lifespan and performance retention even under challenging conditions.</p>
                </div>
              </div>
            </div>
          </div>
          <BentoStats className="w-full" />
      </section>
      <BentoStats className="w-full h-full " />
      {/* Infos about PFAS / Bento Section */}
      <section
        className="hidden relative w-screen bg-gradient-to-t from-teal-50 via-transparent to-transparent border-2 border-blue-300/0 z-40
      p-24 pb-36"
        id="alt-bento-section"
      >
        {/* Content Container */}
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]  bg-green-300/0 max-w-[80vw] lg:max-w-[80vw] 2xl:max-w-[1100px] mx-auto">
          <BentoContact className="w-full hidden" />
          <BentoStats className="w-full " />
          <BentoIntro className="w-full " />
          <BentoHeatResistant className="w-full border-2 border-lightGrey" />

          <BentoDurability className="w-full border-2 border-lightGrey" />
          <BentoWaterRepellant className="w-full border-2 border-lightGrey" />
          <BentoLongLasting className="w-full border-2 border-lightGrey" />

          <BentoPeriodicTable className="w-full hidden" />
          <BentoVerticalDouble className="w-full hidden" />
        </div>
      </section>


      {/* Fluorinated Materials Section */}
      <section className="relative w-full h-full overflow-hidden z-20">
      <AlternativeFluorinatedMaterialsSection
        className="relative w-full h-full overflow-hidden z-20 pt-20 "
        stats={stats}
      />
      </section>

      <MobileFluorinatedMaterialsSection
        className="relative w-full h-full overflow-hidden z-20 pt-20 hidden"
        stats={stats}
      />
      <MobileFluorinatedMaterialsSectionV2
        className="relative w-full h-full overflow-hidden z-20 pt-20 hidden "
        stats={stats}
      />

      <MobileWhatWeDoSection
        className="relative w-full h-full overflow-hidden z-20 pt-20 block md:hidden"
        stats={stats}
      />

      {/* What We Do Section */}
      <section className="relative w-full h-full z-20 ´">
      <AlternativeWhatWeDoSection
        className="relative w-full h-full overflow-hidden z-20 pt-20 hidden md:block"
        stats={stats}
      />
      </section>

      {/* Platform Technology Section */}
      <section
        id="platform-technology"
        className="w-full min-h-[80vh] relative z-10"
      >
        {/* Section detection helper */}
        <div
          className="absolute top-0 h-24 w-full pointer-events-none"
          aria-hidden="true"
        ></div>

        <PlatformTechnologySection className="bg-gradient-to-b from-black via-gray-900 to-black" />
      </section>

      {/* HIDDEN!  Forever Chemicals Section */}
      <section
        className="relative w-full min-h-screen max-w-[1450px] mx-auto hidden
        px-4 md:px-24 pt-44 flex-col items-center justify-center border-2 border-red-300/0"
      >
        {/* Floating Info Circle  */}
        <div className="w-full h-full">
          <div className="w-full h-full inset-0 relative bg-yellow-500/0">
            {/* <div className="absolute w-[33%] max-w-[400px] aspect-square bg-red-500/10 rounded-full top-[40%] xl:top-[50%] left-[50%] translate-x-[10%] translate-y-[10%]"></div> */}
            <motion.div
              className="absolute w-[33%] max-w-[400px] aspect-square bg-red-500/0 border-4 border-tealAccent/30 rounded-full top-[70%] xl:top-[70%] left-[50%] xl:left-[55%] translate-x-[10%] translate-y-[10%]"
              style={{
                willChange: "transform",
                backgroundImage: `url(${ColorfulGradientRainbowTexture.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                y: useTransform(
                  useScroll({
                    target: ref4,
                    offset: ["center end", "center start"],
                  }).scrollYProgress,
                  [0, 1],
                  [0, -250]
                ),
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Blurred Title */}
                <SimpleStatsBox
                  classNamesContainer="w-fit h-fit mt-4"
                  classNamesTitle="w-[300px] blur-sm opacity-35 text-center text-8xl lg:text-9xl font-Arial
                                    font-black mb-1 bg-gradient-to-tl from-lightGrey via-gray-400 to-lightGrey/70 bg-clip-text text-transparent"
                  classNamesSubTitle="w-[150px] lg:w-[200px] mx-auto text-center text-lightGrey/60 text-3xl font-bold mt-0 capitalize leading-3"
                  stat={stats[8]}
                  scrollYProgress={scrollYProgress}
                  scrollEndThreshold={0.9}
                  index={4}
                />

                {/* Primary Title */}
                <SimpleStatsBox
                  classNamesContainer="absolute w-fit h-fit mt-4"
                  classNamesTitle="w-[300px] text-center text-8xl lg:text-9xl font-Arial
                                  font-black mb-1 bg-gradient-to-tl from-lightGrey via-gray-400 to-lightGrey/70 bg-clip-text text-transparent"
                  classNamesSubTitle="w-[150px] lg:w-[200px] mx-auto text-center text-lightGrey/60 text-3xl font-bold mt-0 capitalize leading-3"
                  stat={stats[8]}
                  scrollYProgress={scrollYProgress}
                  scrollEndThreshold={0.9}
                  index={4}
                />
              </div>
            </motion.div>
            {/* <div className="absolute w-[10%] max-w-[133px] aspect-square bg-yellow-500 rounded-full top-[50%] left-[50%] translate-x-[230%] translate-y-[10%]"></div> */}
          </div>
        </div>
      </section>

      <section className="px-16">
        <BentoSectionGen3 className="w-full h-full bg-transparent pt-[340px]" />

        {/* Description Container */}
        <div className="w-full max-w-3xl mx-auto mb-20 text-center">
          <p className="text-gray-300 text-lg mb-4">
            From coatings and textiles to <br />
            food packaging and electronics
          </p>
          <p className="text-gray-500 text-base md:text-lg">
            Due to their unique properties, like heat resistance and water
            repellency, they are used in a wide range of products. However,
            these special properties also make them nearly impossible to degrade
            and{" "}
            <span className="font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
              highly toxic
            </span>
            . PFAS accumulate in the environment and pose a threat to public
            health and the environment itself.
          </p>
        </div>
      </section>

      <section className="w-full h-fit bg-red-500/0 border-2 border-blue-300 relative">
        <div
          className="relative w-full min-h-[200px] h-[30vw] xl:h-[30vw] pt-16 "
          style={{
            backgroundImage: `url(${BlackSmokeDivider.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="w-full h-[10vw] absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/50 to-black/0 " />
      </section>

      <section className="w-full h-fit bg-red-500/0">
        <FluorinatedMaterialsSectionV2
          className="relative w-full h-fit overflow-hidden z-10 pt-6"
          stats={stats}
        />
      </section>

      {/* Health Section */}
      <section
        id="health-section"
        className="relative w-full h-[70vw] max-h-[700px]"
      >
        <div
          className="absolute w-full h-full bottom-0 bg-black max-w-[1450px] left-1/2 -translate-x-1/2 "
          style={{
            backgroundImage: `url(${industrialPollutionImageV3.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Fade to black */}
          <div className="absolute w-full h-[60%] top-0 left-0  bg-gradient-to-b from-black via-black to-transparent" />
          <div className="absolute w-full h-[12%] bottom-0 left-0  bg-gradient-to-t from-black via-black to-transparent" />
          <div className="absolute w-full h-full top-0 left-0  bg-gradient-to-l from-black via-black/30 to-transparent" />
          {/* Center Content with Image */}
          <motion.div
            ref={ref4}
            className="absolute w-[40%] aspect-square rounded-full right-0 top-0 overflow-hidden flex flex-col items-center justify-center"
            style={{ willChange: "transform, opacity" }} // Optimize transformations and transparency
          >
            <div
              className="absolute w-[80%] h-[80%] top-[3%] "
              style={{
                backgroundImage: `url(${Pharma.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Gradient Overlay */}
            <div
              className="absolute w-full h-full inset-0 rounded-full overflow-hidden bg-gradient-to-t from-black via-black/50 to-transparent"
              style={{ willChange: "opacity" }} // Helps with smooth opacity transitions
            />

            {/* Animated Stats Box */}
            <motion.div
              className="absolute top-[63%] -translate-y-[65%] w-full"
              ref={ref4}
              style={{ willChange: "transform, opacity" }} // Optimizing framer-motion animation
            >
              <SimpleStatsBox
                classNamesContainer="w-fit mx-auto z-20 "
                classNamesTitle="text-center text-6xl lg:text-9xl font-black mb-4 bg-gradient-to-tl from-lightGrey/40 via-gray-200 to-lightGrey/80 bg-clip-text text-transparent"
                classNamesSubTitle="text-center text-lightGrey/80 text-lg lg:text-4xl font-bold capitalize -mt-8"
                stat={stats[3]}
                scrollYProgress={scrollYProgress}
                scrollEndThreshold={0.4}
                index={3}
                text=""
                ratchet={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Icon Carousel Section - No ID here since it's not in the navigation */}
      <section className="w-full">
        <div className="bg-red-500/0 w-full">
          <div className="w-full h-[400px] pt-10 overflow-hidden flex items-center justify-center">
            <IconCarousel className="w-[1200px] h-[1200px] mx-auto mt-[50px] scale-[0.5] md:scale-100" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team-section" className="min-h-[80vh] relative">
        {/* Section detection helper */}
        <div
          className="absolute top-0 h-24 w-full pointer-events-none"
          aria-hidden="true"
        ></div>

        <TeamSection className="w-full" />
      </section>

      {/* Contact Section */}
      <section id="contact-section">
        <ContactSection className="w-full" />
      </section>

      {/* Bento Section 
      <section className="py-16 bg-lightGrey text-center px-4">
        <BentoSection2 className="bg-lightGrey relative" />
      </section>
        */}
    </main>
  );
}
