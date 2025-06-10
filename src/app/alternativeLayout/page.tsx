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
import { MobileBentoIntroNoBG } from "@/components/mobileVersion/mobileBentoIntroNoBG";
import FluorineElement from "@/components/alternativeLayout/FluorineElement";

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
      <section
        className="relative w-screen max-h-[120vh] z-10 "
        id="transition-section-one"
      >
        <FluorineElement />

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

      <section
        className="relative w-full  overflow-hidden z-20 font-poppins md:mt-24 lg:mt-12
      bg-gradient-to-b from-transparent via-gray-900/30 to-transparent"
      >
        <div
          className="w-screen mx-auto flex flex-col items-end justify-center
        bg-gradient-to-t from-tealAccent/40 via-tealAccent/50 to-transparent pt-32"
        >
          {/* <BentoIntroNoBG className="w-full max-w-[650px] mx-auto bg-mint-60" /> */}
          <MobileBentoIntroNoBG className="w-full max-w-[650px] mx-auto bg-mint-60" />
          <div
            className="w-full min-h-[150px] h-[30vw] bottom-0  2xl:mt-[-6vw]"
            style={{
              backgroundImage: `url(${BlackSmokeDivider.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center bottom",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="w-full h-[10vw] absolute bottom-0 left-0 
        bg-gradient-to-t from-black via-black/50 to-transparent"
          ></div>
        </div>
      </section>

      {/* Fluorinated Materials Section */}
      <section
        className="relative w-full h-full overflow-hidden z-20"
        id="fluorinated-materials-section">
        <AlternativeFluorinatedMaterialsSection
          className="relative w-full h-full overflow-hidden z-20 pt-12"
          stats={stats}
        />
      </section>

      {/* Mobile What We Do Section */}
      <section className="relative w-full h-full block sm:hidden"
      id="mobile-what-we-do">
        <MobileWhatWeDoSection
          className="relative w-full h-full overflow-hidden z-20 pt-20"
          stats={stats}
          />
        </section>

      {/* Desktop What We Do Section */}
      <section className="relative w-full h-full hidden sm:block"
      id="what-we-do">
        <AlternativeWhatWeDoSection
          className="relative w-full h-full overflow-hidden z-20 pt-20 hidden sm:block"
          stats={stats}
        />
      </section>

      {/* Platform Technology Section */}
      <section
        id="platform-technology"
        className="w-full min-h-[80vh] relative z-10 hidden sm:block">
        {/* Section detection helper */}
        <div
          className="absolute top-0 h-24 w-full pointer-events-none"
          aria-hidden="true"
        ></div>
        <PlatformTechnologySection className="bg-gradient-to-b from-black via-gray-900 to-black" />
      </section>

      {/* Mobile Platform Technology Section */}
      <section
        id="mobile-platform-technology"
        className="w-full min-h-[80vh] relative z-10 block sm:hidden">
        {/* Section detection helper */}
        <div
          className="absolute top-0 h-24 w-full pointer-events-none"
          aria-hidden="true"
        ></div>
        <MobilePlatformTechnologySection className="bg-gradient-to-b from-black via-gray-900 to-black block sm:hidden" />
      </section>


      <section className="w-full h-fit bg-red-500/0 border-2 border-blue-300 relative hidden">
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


      {/* Icon Carousel Section - No ID here since it's not in the navigation */}
      <section className="w-full">
        <div className="bg-red-500/0 w-full">
          <div className="w-full h-[400px] pt-10 overflow-hidden flex items-center justify-center">
            <IconCarousel className="w-[1200px] h-[1200px] mx-auto mt-[50px] scale-[0.5] md:scale-100 hidden sm:block" />
            <MobileIconCarousel className="w-[1200px] h-[1200px] mx-auto mt-[50px] scale-[0.5] md:scale-100 block sm:hidden" />
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
