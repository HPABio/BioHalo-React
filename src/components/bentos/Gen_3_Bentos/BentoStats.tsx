"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "../../ui/AnimatedCounter";
import Image from "next/image";
import EnzymeImage from "@/assets/images/enzymeImage.png";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import AnotherDarkBGwithDroplets from "@/assets/images/BGImagesTest/AnotherDarkBGwithDroplets.png";
import Droplets1 from "@/assets/images/Droplets1.jpg";

export function BentoStats({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-white shadow-lg ${className}`}
    >
      {/* <Image src={EnzymeImage} alt="Enzyme Image" className="w-full h-full object-cover absolute top-0 left-0" /> */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full "
        initial={{
          scale: 1,
          y: 0,
        }}
        variants={{
          hover: { 
            scale: 1.2,
            y: -10,
           },
        }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={Droplets1}
          alt="Water Repellant Fabric"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full "
        initial={{ 
          maskImage: "linear-gradient(to right, black 0%, black 30%, transparent 100%)",
          backdropFilter: "blur(4px)",
        }}
        variants={{
          hover: {
            maskImage: "linear-gradient(to right, black 0%, black 30%, transparent 100%)",
            backdropFilter: "blur(2px)",
          },
        }}
        transition={{ duration: 0.2 }}
      />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-transparent to-transparent "></div> */}
      <div className="p-4  absolute top-0 left-0 w-full h-full bg-mintAccent/10">
        <motion.h1 
          initial={{ opacity: 0, scale: 1.3 }}
          variants={{
            hover: {
              opacity: 1,
              scale: 1,
            },
          }}
          viewport={{ once: true }}
          className="text-2xl leading-7 font-semibold bg-gradient-to-r bg-slate-600 from-tealAccent/30 to-tealAccent/20 text-transparent bg-clip-text text-left w-full tracking-wider"
        >
          <span className="font-bold text-3xl">PFAS</span> <br/>can be found in countless materials and products
        </motion.h1>
      <motion.div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          initial={{
            opacity: 1, 
          }}
          variants={{
            hover: {
              opacity: 0,
            },
          }}
          >
          <h1 className="text-8xl font-bold font-poppins 
          bg-gradient-to-br bg-slate-800 from-mintAccent/50 via-tealAccent/70 to-tealAccent/20 text-transparent bg-clip-text
           text-center">
            PFAS
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
}
