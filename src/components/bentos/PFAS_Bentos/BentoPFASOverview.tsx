import React from "react";
import { motion } from "framer-motion";
import { Beaker } from "lucide-react";
import Image from "next/image";
import BioReactorBlueprint from "@/assets/images/BioReactorBlueprint.svg";
import BGFabricTealPink from "@/assets/images/BGImagesTest/BGFabricTealPink.png";
import BioFMonomer from "@/assets/images/BluePrintSVG/BioF-Monomer.svg";


export const BentoPFASOverview = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`w-full h-full relative overflow-hidden p-8 ${className}`}
      style={{ 
        backgroundImage: `url(${BGFabricTealPink.src})`, 
        backgroundPosition: 'top right', 
        backgroundRepeat: 'no-repeat' 
      }}>
      
      <div className="absolute top-6 left-6">
        <Beaker className="w-8 h-8 text-white" />
      </div>
      <div className="w-full relative z-10 mt-12">
        <motion.h2 
          className="text-4xl font-bold mb-4 text-pink-950"
          variants={{
            hover: {
              color: "rgb(209 213 219)" // gray-300
            }
          }}
          transition={{ duration: 0.2 }}
        >
          PFAS Overview
        </motion.h2>
        <motion.p 
          className="text-lg opacity-90 text-slate-200/60"
          variants={{
            hover: {
              color: "rgb(156 163 175)" // gray-400
            }
          }}
          transition={{ duration: 0.2 }}
        >
          PFAS are Per- and Polyfluoroalkyl Substances, also known as "forever chemicals". They are a group of synthetic chemicals known for their durability and resistance
          to heat, water, and oil. Over 10,000 PFAS compounds are in use today
          across multiple industries.
        </motion.p>
      </div>
      
      <motion.div
        className="absolute top-0 left-1/3 w-2/3 h-full -rotate-[30deg]"
        initial={{
          scale: 1.4,
          x: 40,
          y: 40,
        }}
        style={{
          backgroundImage: `url(${BioFMonomer.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
        variants={{
          hover: {
            scale: 1.2,
            x: 0,
            y: 0,
          },
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{
          backgroundImage: "none",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
        variants={{
          hover: {
            background: "linear-gradient(to top right, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0.8), transparent)",
          },
        }}
        transition={{ duration: 0.2 }}
      />
      
    </motion.div>
  );
};
