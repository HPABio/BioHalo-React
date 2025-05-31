"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "../../ui/AnimatedCounter";
import Image from "next/image";
import EnzymeImage from "@/assets/images/enzymeImage.png";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import AnotherDarkBGwithDroplets from "@/assets/images/BGImagesTest/AnotherDarkBGwithDroplets.png";

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
        className="absolute top-0 left-0 w-full h-full"
        initial={{
          scale: 1,
          y: 0,
        }}
        variants={{
          hover: { 
            scale: 2,
            y: 60,
           },
        }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={AnotherDarkBGwithDroplets}
          alt="Water Repellant Fabric"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ backgroundImage:
          "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0..5) 100%)"}}
        variants={{
          hover: {
            backgroundImage:
              "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
          },
        }}
        transition={{ duration: 0.2 }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-transparent to-transparent "></div>
      <div className="p-4  absolute top-0 left-0 w-full h-full">
        <h1 className="text-3xl font-bold bg-lightGrey/90 text-transparent bg-clip-text text-left w-full tracking-wider">
          PFAS can be found in a wide range of products:
        </h1>
      </div>
    </motion.div>
  );
}
