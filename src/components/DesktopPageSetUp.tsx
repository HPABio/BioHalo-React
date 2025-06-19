"use client";

import Image from "next/image";
import React, { Suspense, memo, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScreenSizeDEVTOOL } from "@/components/ui/ScreenSizeDEVTOOL";
// Hero Sections
import {
  HeroSection5 as DesktopHeroSection,
} from "@/components/HeroSections/HeroSections";

// BioHalo Sections
import { TeamSection } from "@/components/sections2/BioHaloSections/TeamSection";
import { PlatformTechnologySection } from "@/components/sections2/BioHaloSections/PlatformTechnologySection";
import { AlternativeIntroSectionNoBG } from "@/components/alternativeLayout/alternativeIntroSectionNoBG";

// Mobile Version
import MobileIconCarousel from "@/components/mobileVersion/mobileIconCarousel";
import { MobilePlatformTechnologySection } from "@/components/mobileVersion/mobilePlatformTechnologySection";
import { MobileWhatWeDoSection } from "@/components/mobileVersion/mobileWhatWeDoSection";

import { ContactSection } from "@/components/sections2/BioHaloSections/ContactSection";

// UI Components
import IconCarousel from "@/components/ui/IconCarousel";

// Bento Components

// Images
import PfasBP from "@/assets/images/BluePrintStyle/pfasBP.svg";
import enzymeImage from "@/assets/images/AdobeStock/AdobeStock_747938517_Compressed.png";

import BlackSmokeDivider from "@/assets/images/VariousImages/BlackSmokeDivider.png";

import { AlternativeWhatWeDoSection } from "@/components/alternativeLayout/alternativeWhatWeDoSection";
import { AlternativeFluorinatedMaterialsSection } from "@/components/alternativeLayout/alternativeFluorinatedMaterialsSection";
import { MobileBentoIntroNoBG } from "@/components/mobileVersion/mobileBentoIntroNoBG";
import FluorineElement from "@/components/alternativeLayout/FluorineElement";



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

export default function DesktopPageSetUp() {
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
      {/* <ScreenSizeDEVTOOL /> */}
      {/* Invisible element for top section detection */}
      <div
        className="absolute top-0 h-32 w-full pointer-events-none"
        aria-hidden="true"
      ></div>


      <DesktopHeroSection className=" hidden md:block w-screen h-screen relative overflow-hidden" />

      {/* Transition Section */}
      <section
        className="relative w-screen max-h-[120vh] z-10 "
        id="transition-section-one"
      >
        <FluorineElement />
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

      <section className="w-full h-[250px] md:h-[400px] top-0 left-0 z-10 mt-2 relative overflow-hidden
">
                  <div className="w-[2400px] aspect-square xl:scale-x-[1.2] 2xl:scale-x-[2] bottom-0 left-[50%] translate-x-[-50%] absolute " 
                  style={{
                    maskImage: "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,1) 70%)",
                    backgroundSize: "contain",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                }}>

                  <div className="w-full h-[800px] translate-y-[400px]
                  absolute bottom-0 left-0 flex items-center justify-center
                  bg-gray-300 bg-gradient-to-br from-mintAccent via-mintAccent/60 to-tealAccent" />
                </div>
      </section>

      {/* Blueprint Section */}
      <section
        className="relative w-full  overflow-hidden z-0 font-poppins
        bg-gradient-to-tl from-slate-800 via-tealAccent/60 to-slate-300/40
        ">
          <div className="w-full h-[250px] md:h-[400px] top-0 left-0 relative overflow-hidden">
                  <div className="w-[2400px] aspect-square xl:scale-x-[1.2] 2xl:scale-x-[2]  -top-0 left-[50%] translate-x-[-50%] absolute " 
                  style={{
                    maskImage: "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,1) 70%)",
                    backgroundSize: "contain",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",}}>

                  <div className="w-full h-[800px] translate-y-[-400px]
                  absolute top-0 left-0 flex items-center justify-center
                  bg-gray-300 bg-gradient-to-br from-mintAccent via-mintAccent/60 to-tealAccent" />
                </div>
      </div>
          
        
        <div className="w-screen mx-auto flex flex-col items-end justify-center -mt-44 relative"
        style={{
          willChange: "transform",

        }}>
          <div className="w-full h-[400px] absolute top-[50%] translate-y-[-50%]
          scale-[1.5]"
          style={{
            willChange: "transform",
            backgroundImage: `url(${PfasBP.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            opacity: 0.05,
          }}/>
          <AlternativeIntroSectionNoBG className="w-full max-w-[650px] mx-auto" />

          <div
            className="w-full min-h-[150px] h-[30vw] bottom-0 translate-y-[5px] 2xl:mt-[-6vw] mix-blend-multiply"
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
        className="relative w-full h-full overflow-hidden z-20 border-2 border-black"
        id="fluorinated-materials-section"
      >
        <AlternativeFluorinatedMaterialsSection
          className="relative w-full h-full overflow-hidden z-20 pt-12"
        />
      </section>


      {/* Desktop What We Do Section */}
      <section
        className="relative w-full h-full bg-lightGrey/50"
        id="what-we-do"
      >
        <AlternativeWhatWeDoSection className="relative w-full h-full overflow-hidden pt-20 hidden sm:block" />
      </section>

      {/* Platform Technology Section */}
      <section
        id="platform-technology"
        className="w-full min-h-[80vh] relative z-10 hidden md:block"
      >
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
        className="w-full min-h-[80vh] relative z-10 block md:hidden"
      >
        {/* Section detection helper */}
        <div
          className="absolute top-0 h-24 w-full pointer-events-none"
          aria-hidden="true"
        ></div>
        <MobilePlatformTechnologySection className="bg-gradient-to-b from-black via-gray-900 to-black" />
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
