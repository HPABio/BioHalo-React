"use client";

import { motion } from "framer-motion";
import { PeriodicTableNeoMorph } from "../../sections/PeriodicTableNeoMorph";
import Image from "next/image";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import EnzymeImage from "@/assets/images/enzymeImage.png";
import EnzymeImage2 from "@/assets/images/enzymeImage2.png";

export function BentoPeriodicTable({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`relative col-span-2 row-span-2 overflow-hidden rounded-3xl bg-white shadow-lg ${className}`}
    >
      {/* <Image src={WaterRepellantFabric} alt="Water Repellant Fabric" className="w-full h-full object-cover absolute top-0 left-0" /> */}
      {/* <Image src={EnzymeImage} alt="Enzyme Image" className="w-full h-full object-cover absolute top-0 left-0" /> */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <h3 className="text-4xl font-semibold bg-gradient-to-br from-tealAccent/70 to-tealAccent text-transparent bg-clip-text text-bold text-center">
            Due to their durability and resistance these compounds are also
            known as
          </h3>
          <h3 className="text-8xl font-bold bg-gradient-to-r from-pinkAccent to-red-800 text-transparent bg-clip-text text-center mt-4">
            FOREVER CHEMICALS
          </h3>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center  ">
        
      </div>
    </motion.div>
  );
}
