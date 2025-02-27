"use client";

import Barrels from "@/assets/images/BluePrintSVG/Barrels.svg";
import beaker from "@/assets/images/BluePrintSVG/beaker.svg";
import bioReactor from "@/assets/images/BluePrintSVG/bio-reactor.svg";
import BioFMonomer from "@/assets/images/BluePrintSVG/BioF-Monomer.svg";
import BioHaloStep1 from "@/assets/images/BluePrintSVG/BioHalo-step1.svg";
import BioHaloStep2 from "@/assets/images/BluePrintSVG/BioHalo-step2.svg";
import BioHaloStep3 from "@/assets/images/BluePrintSVG/BioHalo-step3.svg";
import biotechScreening from "@/assets/images/BluePrintSVG/biotech-screening.svg";
import cameraLens from "@/assets/images/BluePrintSVG/Camera Lens.svg";
import dnaLogo from "@/assets/images/BluePrintSVG/dna-logo.svg";
import EColi from "@/assets/images/BluePrintSVG/E.coli.svg";
import FireSavety from "@/assets/images/BluePrintSVG/Fire Savety.svg";
import FuelCan from "@/assets/images/BluePrintSVG/Fuel Can.svg";
import Pharma from "@/assets/images/BluePrintSVG/Pharma.svg";

import MeshFabric from "@/assets/images/Mesh-fabric.png";
import BGSwirlTealPink from "@/assets/images/BGImagesTest/BGSwirlTealPink.png";
import BGFabricTealPink from "@/assets/images/BGImagesTest/BGFabricTealPink.png";
import EnzymeImage2 from "@/assets/images/enzymeImage2.png";
import EnzymeImage from "@/assets/images/enzymeImage.png";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import BioHaloBackground from "@/assets/images/BioHalo-background-compressed.jpeg";
import Droplets1 from "@/assets/images/Droplets1.jpg";
import ColorfulGradientRainbowTexture from "@/assets/images/BGImagesTest/ColorfulGradientRainbowTexture.jpeg";
import ElegantHandsWithLens from "@/assets/images/BGImagesTest/ElegantHandsWithLens.jpeg";
import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import RainJacketMist from "@/assets/images/BGImagesTest/RainJacketMist.jpeg";

import Image from "next/image";
import React, { useRef } from "react";
import { StatsBox } from "@/components/ui/StatsBox";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroSection4 } from "@/components/HeroSections/HeroSection4";
import { HeroSection5 } from "@/components/HeroSections/HeroSection5";
import { PFASSection } from "@/components/sections2/PFASSection";
import { BioHaloSection } from "@/components/sections2/BioHaloSection";
import IconCarousel from "@/components/ui/IconCarousel";
import DNAAnalysis from "@/components/ui/DNAAnalysisSVG";
import BioReactorTanks from "@/components/ui/BioReactorTanksSVG";
import EcoliTripletsSVG from "@/components/ui/EcoliTripletsSVG";
import BioHaloLogoNoTextSVG from "@/components/ui/BioHaloLogoNoTextSVG";
import { ScreenSizeDEVTOOL } from "@/components/ui/ScreenSizeDEVTOOL";
export default function Landing5() {
  const stats = [
    {
      number: "25",
      prefix: "+",
      suffix: "bn €",
      label: "Global Annual PFAS Market",
    },
    {
      number: "20000",
      prefix: "+",
      label: "Contaminated Sites in Europe",
    },
    {
      number: "50",
      prefix: "+",
      suffix: "bn €",
      label: "Health-Related Costs",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-lightGrey via-mintAccent/50 to-tealAccent/70 overflow-hidden">
      <ScreenSizeDEVTOOL />

      <section className=" relative z-10">
        {/* <HeroSection4 className="" /> */}
        <HeroSection5 className="w-full h-full " />
      </section>

      {/* Hero Section with Video Background */}
      <section className="hidden relative w-full overflow-hidden bg-gradient-to-br from-tealAccent to-mintAccent">
        <PFASSection />
        {/*         <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/612d2d25c807d1c8a7108393/6136476bb8e40c7c78d77e6a_Ferment%20Intro%203B-transcode.mp4"
          autoPlay
          loop
          muted
          playsInline
        /> */}
      </section>

      <section className="hidden bg-red-500/10 ">
        <div
          className="w-full h-[10vw] min-h-[200px] max-h-[600px] bg-red-500/0 relative"
          style={{
            backgroundImage: `url(${BioHaloBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute w-full h-full top-0 left-0 backdrop-blur-sm bg-gradient-to-r from-black/20 via-black/10 to-tealAccent/20"></div>
          <div className="absolute w-full h-full top-0 left-0  bg-gradient-to-r from-black/40 via-tealAccent/20 to-black/40"></div>
          <div className="absolute inset-0 -mt-[clamp(5%,10%,100px)] w-full max-w-[2000px] h-full flex flex-row items-center justify-center gap-[-120px] mx-auto">
            {/* <DNAAnalysis className="bg-tealAccent/10 h-full w-full mx-auto"/> */}
            <div
              className="w-[15%] mt-[5%] aspect-square rounded-full flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${WaterRepellantFabric.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-tealAccent/20 to-black mix-blend-multiply" />
              <Image
                src={cameraLens}
                alt="dnaLogo"
                className="w-full h-full relative z-10"
              />
            </div>
            <div
              className="w-[20%] aspect-square  rounded-full flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${WaterRepellantFabric.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-tealAccent/20 to-black mix-blend-multiply" />
              <Image
                src={FireSavety}
                alt="dnaLogo"
                className="w-[80%] mr-[7%] relative z-10"
              />
            </div>
            <div
              className="w-[30%] -mt-[8%] max-w-[450px] aspect-square rounded-full flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${WaterRepellantFabric.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-tealAccent/20 to-black mix-blend-multiply" />
              <BioReactorTanks
                className="w-[80%] relative z-10"
                strokeWidth="1px"
              />
            </div>
            <div
              className="w-[20%] aspect-square rounded-full flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${WaterRepellantFabric.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-tealAccent/20 to-black mix-blend-multiply" />
              <Image
                src={Pharma}
                alt="dnaLogo"
                className="w-full relative z-10"
              />
            </div>
            <div
              className="w-[15%] mt-[5%] aspect-square rounded-full flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${WaterRepellantFabric.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-tealAccent/20 to-black mix-blend-multiply" />
              <Image
                src={Barrels}
                alt="Barrels"
                className="w-full h-full relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-[200px] xl:h-[500px] opacity-60 xl:opacity-100 bg-gradient-to-b from-tealAccent  to-transparent"></div>
      </section>

      <section className="hidden w-full min-h-[1000px] md:h-[1100px] lg:h-[1200px] xl:min-h-[1400px] bg-gradient-to-br from-tealAccent to-mintAccent relative">
        {/* BG Layer */}
        <div className=" hidden md:block lg:hidden w-full h-[1400px] absolute top-0 left-0 overflow-hidden bg-yellow-500/0">
          <div className="w-[850px] h-[850px] mx-auto relative bg-red-600/0 mt-[10%]">
            <div
              className="opacity-90 absolute w-[1700px] aspect-square rounded-full left-0 top-0 translate-x-[1%] translate-y-[-23%]
            [mask-image:linear-gradient(to_top,transparent,grey,grey,black)] "
            >
              <BioHaloLogoNoTextSVG className="w-full h-full [mask-image:linear-gradient(to_top,transparent,grey,grey,black)]" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block xl:hidden w-full h-[1800px] absolute top-0 left-0 overflow-hidden bg-yellow-500/0">
          <div className="w-[900px] h-[900px] mx-auto relative bg-red-600/0 mt-[10%]">
            <div
              className="opacity-90 absolute w-[1800px] aspect-square rounded-full left-0 top-0 translate-x-[1%] translate-y-[-23%]
            [mask-image:linear-gradient(to_top,transparent,grey,grey,black)] "
            >
              <BioHaloLogoNoTextSVG className="w-full h-full [mask-image:linear-gradient(to_top,transparent,grey,grey,black)]" />
            </div>
          </div>
        </div>
        <div className="hidden xl:block w-full h-[1800px] absolute top-0 left-0 overflow-hidden bg-yellow-500/0">
          <div className="w-[1200px] h-[1200px] mx-auto relative">
            <div
              className="opacity-90 absolute w-[2400px] aspect-square rounded-full left-0 top-[5%] translate-x-[1%] translate-y-[-23%]
            [mask-image:linear-gradient(to_top,transparent,grey,grey,black)] "
            >
              <BioHaloLogoNoTextSVG className="w-full h-full [mask-image:linear-gradient(to_top,transparent,grey,grey,black)]" />
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-yellow-500/0">
          <div className="w-full h-full relative z-10 flex flex-col items-center justify-center bg-black/0 bg-opacity-40 px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
              The Cloning Experiment
            </h1>
            <p className="mt-4 text-lg text-white text-center max-w-xl">
              The future won't be mined, extracted, wired or launched. It will
              be grown.
            </p>
          </div>
        </div>
      </section>

      {/* BioHalo Section with circular images */}
      <BioHaloSection className=" xl:-mt-48 2xl:mt-12" />

      <section className="bg-red-500/0 w-full">
        <div className="w-full h-[700px] pt-10 overflow-hidden">
          <IconCarousel className="w-[1200px] h-[1200px] -mb-[500px] mx-auto" />
        </div>
        <div className="w-full pt-10 bg-lightGrey">
          <h2 className="text-3xl font-semibold text-gray-300 uppercase relative text-center">
            Using <br />{" "}
            <span className="absolute font-black text-6xl font-Arial bg-gradient-to-tl from-tealAccent to-mintAccent bg-clip-text text-transparent blur-[3px] opacity-55">
              biohalogenation
            </span>
            <span className="font-black font-Arial text-6xl bg-gradient-to-tl from-tealAccent to-mintAccent bg-clip-text text-transparent">
              biohalogenation
            </span>
            <br /> to disrupt the{" "}
            <span className="font-black font-Arial">PFAS </span> industry
          </h2>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-lightGrey text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We innovate, incubate, and launch new companies
          </h2>
          <p className="text-gray-700">
            Using programmed biology to shape the human future, our studio
            builds with entrepreneurs to create innovative solutions in food,
            industrials, materials, and consumer health.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Member Card */}
          <div className="bg-white p-6 shadow rounded">
            {/* Replace placeholder src with real image if available */}
            <Image
              src={WomanWhiteRainJacket}
              alt="Jason Kakoyiannis"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jason Kakoyiannis</h3>
            <p className="text-gray-600">Managing Partner</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <Image
              src={WomanWhiteRainJacket}
              alt="Brian Brazeau"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Brian Brazeau</h3>
            <p className="text-gray-600">Partner</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Have an idea? We'd love to hear from you.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              rows={4}
            />
            <button
              type="submit"
              className="px-6 py-2 bg-tealAccent text-white rounded hover:bg-teal-500"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-2">Let's grow a new world together.</p>
          <p className="text-sm">© 2025 Ferment. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
