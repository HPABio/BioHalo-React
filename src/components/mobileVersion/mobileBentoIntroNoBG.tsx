"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PfasBP from "@/assets/images/BluePrintStyle/pfasBP.svg";
import BioFMonomer from "@/assets/images/BluePrintSVG/BioF-Monomer.svg";
import BioFMonomerAllPink from "@/assets/images/BluePrintSVG/BioF-Monomer-all-pink.svg";
import { MovingAtom } from "@/components/ui/MovingAtom";
import { backgroundImage } from "html2canvas/dist/types/css/property-descriptors/background-image";
import AtomDiagram from "@/components/ui/AtomDiagram";
import { BentoStats } from "../bentos/Gen_3_Bentos/BentoStats";
import { PFASBenefits } from "../bentos/Gen_3_Bentos/PFASBenefits";

export function MobileBentoIntroNoBG({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover="textHover"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`col-span-2 row-span-2 relative overflow-hidden rounded-3xl text-white ${className}`}
    >
      <div className="w-full h-full relative z-10 flex flex-col font-poppins pt-8 sm:pt-10 lg:pt-14 px-4 sm:px-14 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Incorporating{" "}
          <motion.span
            className="font-bold"
            initial={{ color: "#ffffff", textShadow: "none" }}
            variants={{
              textHover: {
                color: ["#ff69b4", "rgba(225, 12, 115, 1)"],
                textShadow: "0 0 10px rgba(255, 105, 180, 0.5)",
                transition: { duration: 0.2, ease: "easeInOut" },
              },
            }}
          >
            F
          </motion.span>
          luorine Atoms...
        </h2>

        <motion.div className="flex-1 relative" transition={{ duration: 0.1 }}>
          <motion.div
            whileHover="hover"
            className="flex w-full h-full gap-2 sm:gap-4 max-w-[700px] mx-auto
          border-2 border-blue-500/0"
          >
            <motion.div
              className="flex w-fit h-full max-w-[120px] sm:max-w-[180px] justify-center items-center relative
               border-2 border-red-500/0 my-auto"
              variants={{
                hover: {
                  opacity: [1, 0, 0],
                  width: ["100%", "70%", "0%", "0%"],
                  scale: [1, 0.5],
                  x: [0, 100, 100],
                  transition: { duration: 0.2, ease: "easeInOut" },
                },
              }}
            >
              <div className="relative aspect-square w-24 h-24 sm:w-32 sm:h-32 bg-white/10 overflow-visible">
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center
                 border-2 border-white/80 rounded-lg overflow-hidden"
                >
                  <AtomDiagram
                    width={"250%"}
                    height={"250%"}
                    color="rgb(225,212,215,1)"
                    className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] opacity-10 blur-[1px]"
                  />
                  <span className="text-4xl sm:text-5xl font-bold">F</span>
                  <span className="text-xs sm:text-sm mt-1 font-bold">
                    Fluorine
                  </span>
                  <span className="absolute top-1 left-1 text-[10px] sm:text-xs font-bold">
                    9
                  </span>
                  <span className="text-[10px] sm:text-xs mt-1 font-medium">
                    18.99
                  </span>
                </div>
                <AtomDiagram
                  width={"60%"}
                  height={"60%"}
                  color="rgb(225,12,115,1)"
                  className="absolute top-0 right-0 translate-x-[48%] translate-y-[-48%] opacity-1"
                />
              </div>
            </motion.div>
            <motion.div
              className="flex-grow flex max-w-[200px] justify-center items-center"
              variants={{
                hover: {
                  opacity: 0,
                  width: 0,
                  transition: { duration: 0.1 },
                },
              }}
            >
              <div className="w-fit bg-yellow-400/0">
                <span className="text-4xl font-bold">+</span>
              </div>
            </motion.div>

            <motion.div
              className="flex w-full relative items-center justify-center aspect-video mx-auto"
              variants={{
                hover: {
                  scale: 1.1,
                  rotate: 15,
                  transition: { duration: 0.2, ease: "easeInOut" },
                },
              }}
            >
              <motion.div
                className="flex h-full w-full"
                initial={{ opacity: 1 }}
                variants={{
                  hover: {
                    opacity: 0,
                  },
                }}
                style={{
                  backgroundImage: `url(${PfasBP.src})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, width: "100%", y: 0 }}
                variants={{
                  hover: {
                    opacity: [1, 1, 1],
                    y: [-5, 5, -5],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  },
                }}
                style={{
                  backgroundImage: `url(${BioFMonomerAllPink.src})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <p className="text-base sm:text-lg opacity-90 mt-3 sm:mt-4">
          ...into the molecular structure of certain polymers, enhances their
          properties and transforms them into a class of
          <span className="font-bold">
            {" "}
            high-performance materials with advanced properties{" "}
          </span>{" "}
          known as "Perfluoroalkyl and Polyfluoroalkyl Substances" or for short{" "}
          <b>PFAS</b>.
        </p>

        <div className="mt-16 sm:mt-24 lg:mt-32">
          <BentoStats className="w-full aspect-[16/4] border-2 border-lightGrey/50" />
          <h3 className="text-base sm:text-lg font-medium text-lightGrey/80 pt-2 mb-3 sm:mb-4 lg:mb-8">
            are known for their exceptional properties...
          </h3>
          <PFASBenefits />
          <p className="text-xs sm:text-sm text-lightGrey/50 mt-3 sm:mt-4 text-right italic">
            ...and many more unique characteristics that make them valuable in
            various applications
          </p>
        </div>
      </div>

      <motion.div
        className="absolute inset-0"
        initial={{
          backgroundImage: "none",
        }}
        variants={{
          hover: {
            backgroundImage: "none",
          },
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
