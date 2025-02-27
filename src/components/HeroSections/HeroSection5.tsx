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
      className={`relative w-full h-screen ${className}`}
    >
      <div
        className="absolute bottom-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${BioHaloBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Shader Container */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <SerenityShader
            // colors={["#BCE2E2", "#115e59", "#134e4a", "#E10C73" ]}
            colors={["#BCE2E2", "#E10C73", "#115e59", "#134e4a"]}
            // colors={["#E10C73", "#BCE2E2", "#115e59", "#134e4a"]}
            className="z-0 opacity-1"
            debug={false}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-black/0 via-black/50 to-black" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute w-full h-full "
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pt-[20vh] px-6">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 capitalize opacity-1 text-center xl:mt-[3vw]
                bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparent py-10"
          >
            <span className="">
              Your partner for <br />
            </span>
            <span
              className="absolute opacity-0 lg:opacity-50 uppercase blur-[2px] font-black font-Poppins  
              bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent "
            >
              biohalogenation{" "}
            </span>
            <span
              className="absolute opacity-0 lg:opacity-30 uppercase blur-[4px] font-black font-Poppins
              bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent "
            >
              biohalogenation{" "}
            </span>
            <span
              className=" bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
              uppercase drop-shadow-sm font-black font-Poppins"
            >
              biohalogenation{" "}
            </span>
          </h1>
        </div>
        <BioHaloLogo
          styles={{
            classNames:
              "opacity-1 max-w-[1500px] max-h-[1500px] mix-blend-overlay",
            width: "calc(100vw - 150px)",
            height: "calc(100vh - 150px)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute w-full h-full"
      >
        <BioHaloLogo
          styles={{
            classNames:
              "opacity-1 max-w-[1500px] max-h-[1500px] mix-blend-color-multiply opacity-20 blur-[15px]",
            width: "calc(100vw - 150px)",
            height: "calc(100vh - 150px)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          times: [0, 0.1, 0.6, 1],
          duration: 5,
        }}
        className="absolute w-full h-full"
      >
        <BioHaloLogo2
          styles={{
            classNames: "opacity-1 max-w-[1500px] max-h-[1500px]",
            width: "calc(100vw - 150px)",
            height: "calc(100vh - 150px)",
            animationduration: "1.5s",
            animationdelay: "0.3s",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1.5 }}
        className="absolute w-full h-full"
      >
        <div className="absolute inset-0 bg-black/0" />
        <div className="relative h-full flex items-center justify-center opacity-1">
          <div className="text-center pt-10 px-4 mt-[25vh]">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 capitalize opacity-0 text-center xl:mt-[3vw]
                bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparent py-10"
            >
              <span className="">
                Your partner for <br />
              </span>
              <span
                className=" bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
              uppercase drop-shadow-sm"
              >
                biohalogenation{" "}
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto capitalize text-gray-500 ">
              Using Enzymes to{" "}
              <span className="text-pinkAccent bg-gradient-to-bl from-pinkAccent via-pink-500 to-red-900 bg-clip-text text-transparent">
                fluorinate
              </span>{" "}
              the future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-tealAccent  text-tealAccent  rounded-full hover:bg-tealAccent/10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="hidden z-10 w-full h-full items-center justify-center">
        <div className="flex scale-[2] items-center justify-center relative">
          <h2 className="font-black font-Arial text-6xl bg-gradient-to-br from-mintAccent to-tealAccent bg-clip-text text-transparent pb-10">
            Using Biology <br /> to Revolutionize <br />
            Fluorine Chemistry
          </h2>
          <h2 className="absolute top-0 left-0 font-black font-Arial text-6xl bg-gradient-to-br from-mintAccent to-tealAccent bg-clip-text text-transparent pb-10">
            Using Biology <br /> to Revolutionize <br />
            <span className="text-pinkAccent">Fluorine </span>
            Chemistry
          </h2>
        </div>
      </div>
    </section>
  );
};
