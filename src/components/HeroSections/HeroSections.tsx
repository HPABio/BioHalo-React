"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { BioHaloLogo } from "../ui/BioHaloLogo";
import { BioHaloLogo2 } from "../ui/BioHaloLogo2";
import BioHaloLogo3 from "../ui/BioHaloLogo3";
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
            <BioHaloLogo3 />
            {/* <BioHaloLogo2
              styles={{
                classNames: "w-[70vw] h-auto",
                animationduration: "1.5s",
                animationdelay: "0.3s",
              }}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroSection3 = ({
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
      <div className="absolute  w-[70%] h-[70%] md:w-[50%] md:h-[50%] min-h-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-48%] md:translate-y-[-40%] overflow-visible bg-red-500/0">
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
      <div className="absolute inset-0 flex items-center justify-center bg-green-500/0 pt-[80px] z-10">
        {/* Logo container, Subtitle, and Buttons */}
        <div className="relative w-[80%] h-[80%] flex flex-col items-center justify-center bg-blue-500/0">
          {/* Logo container */}
          <div
            className="relative w-[80%] h-auto max-w-[1000px]"
            /* before:content-[''] before:absolute before:w-[50%] before:h-[10px] before:bg-gradient-to-r before:from-transparent before:via-black/40 before:to-transparent 
            before:blur-[10px] before:bottom-[-50%] before:left-[25%] before:rounded-[50%]" */
          >
            <BioHaloLogo3 />
          </div>
          {/* Subtitle */}
          <div className="w-full mt-32 md:mt-52 bg-transparent hidden md:block">
            {/* subtitle */}
            <div className="w-full bg-transparent hidden md:block border border-red-500/0">
              {/* subtitle version 1 */}
              <div className="w-full h-full relative bg-transparent hidden">
                <p className="w-full relative tracking-widest text-[clamp(0.7rem,1.5vw,1.8rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
                  We disrupt the{" "}
                  <span
                    className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent 
                          uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
                  >
                    forever chemicals
                  </span>{" "}
                  industry using{" "}
                  <span className="font-black bg-gradient-to-r from-tealAccent via-teal-900 to-tealAccent bg-clip-text text-transparent">
                    enzymes
                  </span>
                </p>
                <p className="w-full relative tracking-widest text-[clamp(0.4rem,0.9vw,1.2rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent mt-0">
                  <span className="block uppercase font-medium text-gray-500/90 max-w-4xl mx-auto">
                    We disrupt the{" "}
                    <span className="font-black bg-slate-800 bg-gradient-to-br from-gray-800/60 via-gray-200/30 to-gray-900/30 bg-clip-text text-transparent">
                      forever chemicals
                    </span>{" "}
                    industry using{" "}
                    <span className="font-black bg-gradient-to-r from-tealAccent via-teal-900 to-tealAccent bg-clip-text text-transparent">
                      enzymes
                    </span>
                  </span>
                </p>
              </div>

              {/* subtitle version 2 */}
              <div className="w-full h-full relative bg-transparent hidden">
                <p className="w-full relative tracking-widest text-[clamp(0.7rem,1.5vw,1.8rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
                  disrupting the{" "}
                  <span
                    className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent 
                          uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
                  >
                    forever chemicals
                  </span>{" "}
                  industry with{" "}
                  <span className="font-black bg-gradient-to-r from-tealAccent via-teal-900 to-tealAccent bg-clip-text text-transparent">
                    biology
                  </span>
                </p>
                <p className="w-full relative tracking-widest text-[clamp(0.4rem,0.9vw,1.2rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent mt-0">
                  <span className="block uppercase font-medium text-gray-500/90 max-w-4xl mx-auto">
                    disrupting the{" "}
                    <span className="font-black bg-slate-800 bg-gradient-to-br from-gray-800/60 via-gray-200/30 to-gray-900/30 bg-clip-text text-transparent">
                      forever chemicals
                    </span>{" "}
                    industry with{" "}
                    <span className="font-black bg-gradient-to-r from-tealAccent via-teal-900 to-tealAccent bg-clip-text text-transparent">
                      biology
                    </span>
                  </span>
                </p>
              </div>

              {/* subtitle version 2.5 */}
              <div className="w-full h-full relative bg-transparent hidden">
                <p className="w-full relative tracking-widest text-[clamp(0.7rem,1.5vw,1.8rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
                  disrupting the
                  <br />
                  <span
                    className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent 
                          uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
                  >
                    forever chemicals
                  </span>{" "}
                  industry <br /> with{" "}
                  <span className="font-black bg-gradient-to-r from-tealAccent via-teal-900 to-tealAccent bg-clip-text text-transparent">
                    biology
                  </span>
                </p>
                <p className="w-full hidden tracking-widest text-[clamp(0.4rem,0.9vw,1.2rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent mt-0">
                  <span className="block uppercase font-medium text-gray-500/90 max-w-4xl mx-auto">
                    disrupting the{" "}
                    <span className="font-black bg-slate-800 bg-gradient-to-br from-gray-800/60 via-gray-200/30 to-gray-900/30 bg-clip-text text-transparent">
                      forever chemicals
                    </span>{" "}
                    industry with{" "}
                    <span className="font-black bg-gradient-to-r from-tealAccent via-teal-900 to-tealAccent bg-clip-text text-transparent">
                      biology
                    </span>
                  </span>
                </p>
              </div>

              {/* subtitle version 3 */}
              <div className="w-full h-full relative bg-transparent hidden">
                <p className="w-full relative tracking-widest text-[clamp(0.7rem,1.5vw,1.8rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
                  using{" "}
                  <span className="font-black bg-gradient-to-r from-tealAccent via-teal-900 to-tealAccent bg-clip-text text-transparent">
                    biology
                  </span>{" "}
                  to disrupt <br /> the{" "}
                  <span
                    className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent 
                          uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
                  >
                    forever chemicals
                  </span>{" "}
                  industry
                </p>
              </div>

              {/* subtitle version 4 */}
              <div className="w-full h-full relative bg-transparent">
                <p className="w-full relative tracking-widest text-[clamp(0.7rem,1.5vw,1.8rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
                  the{" "}
                  <span
                    className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-slate-800 via-pinkAccent to-slate-800 bg-clip-text text-transparent 
                          uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
                  >
                    forever chemicals
                  </span>{" "}
                  industry
                  <br />
                  <span
                    className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent 
                          uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
                  >
                    disrupted by biology
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 xl:gap-4 mt-60 md:mt-2 items-center justify-center">
            <div>
              <Button
                className="px-8 py-6 md:px-8 md:py-4 xl:px-8 xl:py-6 font-poppins text-lg md:text-base xl:text-lg font-medium 
                            bg-tealAccent bg-gradient-to-r from-tealAccent via-mintAccent/50 to-mintAccent/80 hover:from-teal-600 hover:to-tealAccent 
                            text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(
                    "platform-technology"
                  );
                  if (targetElement) {
                    const yPosition =
                      targetElement.getBoundingClientRect().top +
                      window.scrollY -
                      80;
                    window.scrollTo({
                      top: yPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Technology
              </Button>
            </div>
            <div>
              <Button
                className="px-8 py-6 md:px-8 md:py-4 xl:px-8 xl:py-6 font-poppins text-lg md:text-base xl:text-lg font-medium 
                            bg-white/10 backdrop-blur-sm hover:bg-white/20 text-tealAccent/70 border border-white/20 
                            rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(
                    "platform-features-content"
                  );
                  if (targetElement) {
                    const yPosition =
                      targetElement.getBoundingClientRect().top +
                      window.scrollY -
                      80;
                    window.scrollTo({
                      top: yPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroSection4 = ({
  className,
  debug = false,
}: HeroSectionsProps) => {
  if (debug) console.log("Rendering HeroSection5");

  const sectionRef = useRef<HTMLElement>(null);
  const [activeSubtitle, setActiveSubtitle] = useState(4); // Default to version 4

  const subtitleVersions = [
    {
      id: 1,
      content: (
        <p className="w-full relative tracking-widest text-[clamp(0.7rem,1.5vw,1.8rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
          We disrupt the{" "}
          <span
            className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent 
                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
          >
            forever chemicals
          </span>{" "}
          industry using{" "}
          <span className="font-black bg-gradient-to-r from-tealAccent via-teal-900 to-tealAccent bg-clip-text text-transparent">
            enzymes
          </span>
        </p>
      ),
    },
    {
      id: 2,
      content: (
        <p className="w-full relative tracking-widest text-[clamp(0.7rem,1.5vw,1.8rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
          using{" "}
          <span className="font-black bg-gradient-to-r from-tealAccent via-teal-900 to-tealAccent bg-clip-text text-transparent">
            biology
          </span>{" "}
          to disrupt <br /> the{" "}
          <span
            className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent 
                                  uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
          >
            forever chemicals
          </span>{" "}
          industry
        </p>
      ),
    },
    {
      id: 3,
      content: (
        <p className="w-full relative tracking-widest text-[clamp(0.7rem,1.5vw,1.8rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
          using{" "}
          <span
            className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent 
                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
          >
            enzymes{" "}
            <span className="font-medium text-[clamp(0.7rem,1.5vw,1.8rem)] uppercase text-center text-gray-700/80 whitespace-nowrap">
              and
            </span>{" "}
            biology
          </span>{" "}
          to disrupt <br /> the{" "}
          <span
            className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-slate-800 via-pinkAccent to-slate-800 bg-clip-text text-transparent 
                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
          >
            forever chemicals
          </span>{" "}
          industry
        </p>
      ),
    },
    {
      id: 4,
      content: (
        <p className="w-full relative tracking-widest text-[clamp(0.7rem,1.5vw,1.8rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
          the{" "}
          <span
            className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-slate-800 via-pinkAccent to-slate-800 bg-clip-text text-transparent 
                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
          >
            forever chemicals
          </span>{" "}
          industry
          <br />
          <span
            className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-tealAccent to-teal-600  bg-clip-text text-transparent 
                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
          >
            disrupted by biology
          </span>
        </p>
      ),
    },
    {
      id: 5,
      content: (
        <p className="w-full relative tracking-widest text-[clamp(0.7rem,1.5vw,1.8rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
          the{" "}
          <span
            className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-slate-800 via-pinkAccent to-slate-800 bg-clip-text text-transparent 
                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
          >
            forever chemicals
          </span>{" "}
          industry
          <br />
          disrupted by <br />
          <span
            className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-tealAccent to-teal-600  bg-clip-text text-transparent 
                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
          >
            biology
          </span>
        </p>
      ),
    },
    {
      id: 6,
      content: (
        <p className="w-full relative tracking-widest text-[clamp(0.7rem,1.5vw,1.8rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
          <span
            className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-slate-800 via-pinkAccent to-slate-800 bg-clip-text text-transparent 
                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
          >
            forever chemicals
          </span>{" "}
          disrupted by{" "}
          <span
            className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-tealAccent to-teal-600  bg-clip-text text-transparent 
                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
          >
            biology
          </span>
        </p>
      ),
    },
    {
      id: 7,
      content: (
        <p className="w-full relative tracking-widest text-[clamp(0.7rem,1.5vw,1.8rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
          <span
            className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-slate-800 via-pinkAccent to-slate-800 bg-clip-text text-transparent 
                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
          >
            forever chemicals
          </span>{" "}
          <br />
          disrupted by <br />
          <span
            className="text-[clamp(1rem,1.8vw,2.4rem)] bg-gradient-to-r from-tealAccent to-teal-600  bg-clip-text text-transparent 
                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
          >
            biology
          </span>
        </p>
      ),
    },
  ];

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
      <div className="absolute  w-[70%] h-[70%] md:w-[50%] md:h-[50%] min-h-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-48%] md:translate-y-[-40%] overflow-visible bg-red-500/0">
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

      <div className="absolute inset-0 flex items-center justify-center bg-green-500/0 pt-[80px] z-10">
        {/* Logo container, Subtitle, and Buttons */}
        <div className="relative w-[80%] h-[80%] flex flex-col items-center justify-center bg-blue-500/0">
          {/* Logo container */}
          <div className="relative w-[80%] h-auto max-w-[1000px]">
            <BioHaloLogo3 />
          </div>
          {/* Subtitle */}
          <div className="w-full mt-32 md:mt-52 bg-transparent hidden md:block">
            {/* subtitle */}
            <div className="w-full bg-transparent hidden md:block border border-red-500/0">
              {/* Active subtitle */}
              <div className="w-full h-full relative bg-transparent">
                {
                  subtitleVersions.find(
                    (version) => version.id === activeSubtitle
                  )?.content
                }
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-4">
                {subtitleVersions.map((version) => (
                  <button
                    key={version.id}
                    onClick={() => setActiveSubtitle(version.id)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      activeSubtitle === version.id
                        ? "bg-pinkAccent"
                        : "bg-gray-400"
                    }`}
                    aria-label={`Switch to subtitle version ${version.id}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 xl:gap-4 mt-60 md:mt-2 items-center justify-center">
            <div>
              <Button
                className="px-8 py-6 md:px-8 md:py-4 xl:px-8 xl:py-6 font-poppins text-lg md:text-base xl:text-lg font-medium 
                            bg-tealAccent bg-gradient-to-r from-tealAccent via-mintAccent/50 to-mintAccent/80 hover:from-teal-600 hover:to-tealAccent 
                            text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(
                    "platform-technology"
                  );
                  if (targetElement) {
                    const yPosition =
                      targetElement.getBoundingClientRect().top +
                      window.scrollY -
                      80;
                    window.scrollTo({
                      top: yPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Technology
              </Button>
            </div>
            <div>
              <Button
                className="px-8 py-6 md:px-8 md:py-4 xl:px-8 xl:py-6 font-poppins text-lg md:text-base xl:text-lg font-medium 
                            bg-white/10 backdrop-blur-sm hover:bg-white/20 text-tealAccent/70 border border-white/20 
                            rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(
                    "platform-features-content"
                  );
                  if (targetElement) {
                    const yPosition =
                      targetElement.getBoundingClientRect().top +
                      window.scrollY -
                      80;
                    window.scrollTo({
                      top: yPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Features
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export const HeroSection5 = ({
  className,
  debug = false,
}: HeroSectionsProps) => {
  if (debug) console.log("Rendering HeroSection5");

  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className={`relative w-[100vw] max-h-[1000px] md:max-h-[100vh] md:h-[100vh] min-h-[600px] lg:min-h-[700px] xl:min-h-[900px]  ${className}`}
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
      <div
        className="absolute w-[80%] h-[80%] lg:w-[70%] lg:h-[70%] min-h-[500px] max-h-[800px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] 
      overflow-visible bg-red-500/0"
      >
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

      {/* Logo and subtitle container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-500/0 pt-[80px]">
        <div
          className="relative w-[80%] xl:w-[70%] h-[40%] flex flex-col items-center justify-center 
        md:translate-y-[-30%] lg:translate-y-[-38%] xl:translate-y-[-45%] lg:px-12 bg-blue-500/0 max-w-[1400px]"
        >
          {/* Logo */}
          <div
            className="relative w-full h-auto bg-green-500/0 border border-green-500/0 md:mt-0 -mt-36
          before:content-[''] before:absolute before:w-[60%] before:h-[10px] before:bg-gradient-to-r before:from-transparent before:via-black/40 before:to-transparent 
          before:blur-[10px] before:bottom-[-30%] before:left-[15%] before:rounded-[50%]"
          >
            <BioHaloLogo3 />

            {/* Subtitle container */}
            <div
              className="absolute w-full h-[90%] max-h-[180px] mt-12 lg:mt-16 xl:mt-24  hidden md:flex flex-col items-center justify-start mx-auto
          bg-yellow-500/0  border border-yellow-500/0"
            >
              {/* Subtitle */}
              <div className="w-full h-fit bg-red-500/0 lg:mt-[5vh]">
                <p className="w-full relative tracking-widest text-[clamp(1.2rem,2vw,2.4rem)] font-medium uppercase text-center text-gray-700/80 whitespace-nowrap bg-transparent">
                  <span
                    className="text-[clamp(1.4rem,2.5vw,3rem)] bg-gradient-to-r from-slate-800 via-pinkAccent to-slate-800 bg-clip-text text-transparent 
                                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
                  >
                    forever chemicals
                  </span>{" "}
                  <span className="text-[clamp(0.9rem,1.7vw,2rem)]">
                    disrupted by
                  </span>{" "}
                  <span
                    className="text-[clamp(1.4rem,2.5vw,3rem)] bg-gradient-to-r from-tealAccent to-teal-600  bg-clip-text text-transparent 
                                                      uppercase drop-shadow-sm font-black font-Poppins whitespace-nowrap"
                  >
                    biology
                  </span>
                </p>
              </div>

              {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 xl:gap-4 mt-60 md:mt-2 items-center justify-center">
            <div>
              <Button
                className="px-8 py-6 md:px-8 md:py-4 xl:px-8 xl:py-6 font-poppins text-lg md:text-base xl:text-lg font-medium 
                            bg-tealAccent bg-gradient-to-r from-tealAccent via-mintAccent/50 to-mintAccent/80 hover:from-teal-600 hover:to-tealAccent 
                            text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(
                    "platform-technology"
                  );
                  if (targetElement) {
                    const yPosition =
                      targetElement.getBoundingClientRect().top +
                      window.scrollY -
                      80;
                    window.scrollTo({
                      top: yPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Technology
              </Button>
            </div>
            <div>
              <Button
                className="px-8 py-6 md:px-8 md:py-4 xl:px-8 xl:py-6 font-poppins text-lg md:text-base xl:text-lg font-medium 
                            bg-white/10 backdrop-blur-sm hover:bg-white/20 text-tealAccent/70 border border-white/20 
                            rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(
                    "platform-features-content"
                  );
                  if (targetElement) {
                    const yPosition =
                      targetElement.getBoundingClientRect().top +
                      window.scrollY -
                      80;
                    window.scrollTo({
                      top: yPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Features
              </Button>
            </div>
          </div>

            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-red-500/0 border border-red-500/0 flex items-center justify-center">
          <div className="w-[70%] aspect-video bg-blue-500/0 border border-blue-500/0"></div>
        </div>
      </div>
    </section>
  );
};
