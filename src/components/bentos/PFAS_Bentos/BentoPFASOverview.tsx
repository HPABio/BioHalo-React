import React from "react";
import { motion } from "framer-motion";
import { Beaker } from "lucide-react";
import Image from "next/image";
import BioReactorBlueprint from "@/assets/images/BioReactorBlueprint.svg";
import BGFabricTealPink from "@/assets/images/BGImagesTest/BGFabricTealPink.png";


export const BentoPFASOverview = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`w-full h-full relative overflow-hidden p-8 text-white ${className}`}
      style={{ 
        backgroundImage: `url(${BGFabricTealPink.src})`, 
        backgroundPosition: 'top right', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      <div className="absolute top-6 left-6">
        <Beaker className="w-8 h-8 text-white/80" />
      </div>
      <div className="w-full relative z-10 mt-12">
        <h2 className="text-4xl font-bold mb-4">PFAS Overview</h2>
        <p className="text-lg opacity-90">
          PFAS are synthetic chemicals known for their durability and resistance
          to heat, water, and oil. Over 10,000 PFAS compounds are in use today
          across multiple industries.
        </p>
      </div>
      <motion.div
        className="absolute inset-0"
        initial={{
          backgroundImage: "none",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
        variants={{
          hover: {
            backgroundImage: `url(${BGFabricTealPink.src})`,
          },
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute top-0 left-1/3 w-2/3 h-full"
        style={{
          backgroundImage: `url(${BioReactorBlueprint.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
        }}
        variants={{
          hover: {
            scale: 1.1,
            x: 20,
            y: 20,
          },
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
};
