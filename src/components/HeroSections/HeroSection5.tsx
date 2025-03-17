"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { BioHaloLogo } from "../ui/BioHaloLogo";
import { BioHaloLogo2 } from "../ui/BioHaloLogo2";
import { HeroLayout } from "../pageLayouts/HeroLayout";
import SerenityShader from "../backgroundAnimations/SerenityShader";
import EcoliTripletsSVG from "@/components/ui/EcoliTripletsSVG";
import BioHaloBackground from "@/assets/images/BioHalo-background-compressed.jpeg";

import Image from "next/image";
import FollowPath from "../ui/FollowPath";
import logo from "@/assets/images/logo.png";
import { MovingAtom } from "../ui/MovingAtom";

interface HeroSection5Props {
  className?: string;
  debug?: boolean;
}

export const HeroSection5 = ({
  className,
  debug = false,
}: HeroSection5Props) => {
  if (debug) console.log("Rendering HeroSection5");

  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className={`relative w-[100vw] max-h-[1000px] md:max-h-[100vh] md:h-[100vh]  ${className}`}
    >
      <div className="absolute bottom-0 left-0 w-full h-full" />
      {/* Shader Container */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <SerenityShader
            colors={["#BCE2E2", "#E10C73", "#115e59", "#134e4a"]}
            className="z-0 opacity-1 w-[100vw] max-h-[1000px] md:max-h-[100vh] md:h-[100vh]"
            debug={false}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-black/0 via-black/50 to-black" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute w-full h-full flex items-end justify-center pb-[15vh] md:pb-[35vh] lg:pb-[25vh] 2xl:pb-[15vh] xl:-mt-[50px]"
      >
  
        
        <div className="relative max-w-[900px] px-6 mb-16 ml-[12vw] ">
          <h1 className="text-center">
            <span className="block text-base sm:text-lg md:text-xl lg:text-2xl uppercase mb-2 font-medium  text-gray-700/80">
              Our Company uses enzymes and <br /> biological processe to disrupt the
            </span>
            <span className="relative block uppercase bg-gradient-to-tr from-red-900/80 via-pinkAccent to-purple-950/80 bg-clip-text text-transparent font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Poppins tracking-wide">
              forever chemicals
              <span className="absolute top-0 left-0 w-full h-full opacity-40 lg:opacity-50 uppercase blur-[2px] font-black font-Poppins bg-gradient-to-tr from-red-900/80 via-pinkAccent to-purple-950/80 bg-clip-text text-transparent">
                forever chemicals
              </span>
              <span className="absolute top-0 left-0 w-full h-full opacity-30 lg:opacity-30 uppercase blur-[4px] font-black font-Poppins bg-gradient-to-tr from-red-900/80 via-pinkAccent to-purple-950/80 bg-clip-text text-transparent">
                forever chemicals
              </span>
            <span className="block text-base sm:text-2xl md:text-3xl lg:text-4xl uppercase mb-2 font-medium  text-gray-600/80">
            Industries
            </span>
            </span>
          </h1>

        <MovingAtom
              width={60}
              height={60}
              hoverAmplitude={8}
              hoverDuration={2}
              shouldRotate={true}
              rotationDuration={45}
              shouldScale={true}
              scaleRange={[0.9, 1.1]}
              scaleDuration={4}
              color="rgba(225,12,115,0.7)" //pinkAccent
              className="absolute top-[30%] -left-[2%]"
            />
        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1] }}
        transition={{
          times: [0, 0.1, 1],
          duration: 5,
        }}
        className="absolute w-full h-full xl:-mt-[50px] xl:-ml-[2vw]"
      >
        <div className="w-full h-full flex flex-col items-center pt-[33vh]">
          {/* Logo container */}
          <div className="flex flex-col w-[clamp(450px,60%,1600px)] relative">
            <BioHaloLogo2
              styles={{
                classNames: "w-full h-full opacity-1",
                width: "100%",
                height: "100%",
                animationduration: "1.5s",
                animationdelay: "0.3s",
              }}
            />
              <MovingAtom
              width={90}
              height={90}
              hoverAmplitude={6}
              hoverDuration={2}
              shouldRotate={true}
              rotationDuration={45}
              shouldScale={true}
              scaleRange={[0.9, 1.1]}
              scaleDuration={4}
              color="rgba(34,85,102,1)" //tealAccent
              className="absolute bg-red-500/0 
              top-[28%] right-[-23%] 
              md:top-[36%] md:right-[-14%] 
              lg:top-[38%] lg:right-[-12%] 
              xl:top-[38%] xl:right-[-12%] 
              2xl:top-[40%] 2xl:right-[-6%] 
              translate-x-[-50%] translate-y-[-50%]"
            />
          

            {/* Centered text below logo */}
            <div className="flex flex-col items-end w-full relative md:-mt-5  2xl:-mt-[2vw]">
              <p className="w-[65%] right-0 tracking-widest text-[clamp(0.6rem,1.2vw,2rem)] font-medium text-center text-gray-700/80 whitespace-nowrap">
                Your Partner in{" "}
                <span
                  className="text-[clamp(0.8rem,1.9vw,2.5rem)] bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent 
                uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
                >
                  Biohalogenation
                </span>{" "}
                Chemistry
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
