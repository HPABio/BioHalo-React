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
import enzymeImage from "@/assets/images/AdobeStock/AdobeStock_747938517 Compressed.png";

import Image from "next/image";
import FollowPath from "../ui/FollowPath";
import logo from "@/assets/images/logo.png";
import { MovingAtom } from "../ui/MovingAtom";

interface HeroSectionsProps {
  className?: string;
  debug?: boolean;
}

export const HeroSection1 = ({
  className,
  debug = false,
}: HeroSectionsProps) => {
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
            colors={[
              "#D2EDED", // Light cyan - 5% lighter than #D2EDED
              "#EB65AA", // Pink - 5% lighter than #E953A0
              "#5A9693", // Teal - 5% lighter than #4D8A87
              "#5C8683", // Slate teal - 5% lighter than #4F7A77
            ]}
            className="z-0 opacity-1 w-[100vw] max-h-[1000px] md:max-h-[100vh] md:h-[100vh]"
            debug={false}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black via-black/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1] }}
        transition={{
          times: [0, 0.1, 1],
          duration: 5,
        }}
        className="absolute w-full h-full xl:-mt-[50px] xl:-ml-[2vw]"
      >
        <div className="w-full h-full flex flex-col items-center pt-[38vh]">
          {/* Logo container */}
          <div className="flex flex-col w-[clamp(450px,80%,1600px)] relative bg-red-500/0">
            {/* Desktop version */}
            <div className="w-full h-full absolute top-0 left-0 bg-blue-500/0 hidden md:block">
              <div className="w-[65%] h-full absolute top-0 right-0 bg-pink-500/0">
                <p className="w-full absolute right-0 bottom-0 tracking-widest text-[clamp(0.6rem,1.5vw,2rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-green-300/0">
                  Your Partner in{" "}
                  <span
                    className="text-[clamp(0.8rem,1.9vw,2.5rem)] bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent 
                                                uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
                  >
                    Biohalogenation
                  </span>{" "}
                  Chemistry
                </p>
                <p className="w-full absolute right-0 bottom-[-12%] tracking-widest text-[clamp(0.3rem,1vw,1.3rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-green-300/0">
                  <span className="block uppercase mt-4 mb-2 font-medium text-gray-500/90 max-w-4xl mx-auto">
                    We disrupt the{" "}
                    <span className="font-black bg-pink-800 bg-gradient-to-br from-gray-800/60 via-gray-200/30 to-gray-900/30 bg-clip-text text-transparent">
                      forever chemicals
                    </span>{" "}
                    industry using{" "}
                    <span className="font-black bg-gradient-to-r from-tealAccent via-teal-900 to-tealAccent bg-clip-text text-transparent">
                      enzymes
                    </span>
                  </span>
                </p>
              </div>
            </div>

            {/* Mobile version */}
            <div className="w-full h-full absolute top-0 left-0 bg-blue-500/0 block md:hidden">
              <div className="w-full h-full absolute top-0 left-0 bg-pink-500/0">
                <p className="w-full absolute left-0 bottom-[-60%] tracking-widest text-[clamp(0.6rem,3vw,1.2rem)] font-medium uppercase text-center text-gray-700/80 bg-green-300/0">
                  Your Partner in
                  <br />
                  <span
                    className="text-[clamp(0.8rem,3.5vw,1.5rem)] bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent 
                                                uppercase drop-shadow-sm font-black font-Poppins"
                  >
                    Biohalogenation
                  </span>
                  <br />
                  Chemistry
                </p>
                <p className="w-full absolute left-0 bottom-[-110%] tracking-widest text-[clamp(0.3rem,2vw,0.9rem)] font-medium uppercase text-center text-gray-700/80 bg-green-300/0">
                  <span className="block uppercase mt-4 mb-2 font-medium text-gray-500/90 max-w-4xl mx-auto">
                    We disrupt the{" "}
                    <span className="font-black bg-pink-800 bg-gradient-to-br from-gray-800/60 via-gray-200/30 to-gray-900/30 bg-clip-text text-transparent">
                      forever chemicals
                    </span>
                    <br />
                    industry using{" "}
                    <span className="font-black bg-gradient-to-r from-tealAccent via-teal-900 to-tealAccent bg-clip-text text-transparent">
                      enzymes
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <BioHaloLogo2
              styles={{
                classNames: "w-[80%] h-[80%] md:w-full md:h-full opacity-1",
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
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export const HeroSection2 = ({
  className,
  debug = false,
}: HeroSectionsProps) => {
  if (debug) console.log("Rendering HeroSection5");

  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className={`relative w-[100vw] max-h-[1000px] md:max-h-[100vh] md:h-[100vh] min-h-[600px] 2xl:min-h-[900px]  ${className}`}
    >
      <div className="relative bottom-0 left-0 w-full h-full" />

      {/* Top left image */}
      <div className="absolute w-[80%] h-[80%] top-0 left-0 translate-x-[-50%] translate-y-[-50%] blur-[7px] opacity-60 brightness-[1.4]">
        <Image src={enzymeImage} alt="Enzyme" fill className="object-contain" />
      </div>
      {/* Bottom image */}
      <div
        className="md:hidden block absolute w-full h-full bottom-0 right-[-90%] translate-x-[-50vw] translate-y-[55%] 
      opacity-1 blur-[6px]"
      >
        <Image src={enzymeImage} alt="Enzyme" fill className="object-contain" />
      </div>
      {/* Center image */}
      <div className="absolute w-[80%] h-[80%] min-h-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-visible bg-red-500/0">
        <motion.div
          className="relative w-full h-full overflow-visible bg-blue-500/0"
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={enzymeImage}
            alt="Enzyme"
            fill
            className="object-contain overflow-visible bg-green-500/0"
          />
        </motion.div>
      </div>
      {/* Logo container */}

      <div className="absolute inset-0 flex items-center justify-center bg-green-500/0 pt-[80px]">
        <div className="relative w-[80%] h-[80%] flex flex-col items-center justify-center bg-blue-500/0">
          <div
            className="relative w-full h-auto 
          before:content-[''] before:absolute before:w-[50%] before:h-[10px] before:bg-gradient-to-r before:from-transparent before:via-black/40 before:to-transparent 
          before:blur-[10px] before:bottom-[-50%] before:left-[25%] before:rounded-[50%]"
          >
            <BioHaloLogo2
              styles={{
                classNames: "w-[70vw] h-auto",
                animationduration: "1.5s",
                animationdelay: "0.3s",
              }}
            />
          </div>
          <h2 className="text-center text-black text-[2.7vw] font-bold translate-x-[27%] translate-y-[-80%]">
            The Biohalogenation Company
          </h2>
        </div>
      </div>
    </section>
  );
};
