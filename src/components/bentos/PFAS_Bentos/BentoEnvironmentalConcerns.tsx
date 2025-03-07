"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Droplets, Heart, Mountain, Leaf } from "lucide-react";
import BGFabricTealPink from "@/assets/images/BGImagesTest/BGFabricTealPink.png";


export const BentoEnvironmentalConcerns = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 0, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      style={{ 
        // backgroundImage: `url(${BGFabricTealPink.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className={`relative overflow-hidden rounded-3xl p-8 text-white ${className}`}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-pinkAccent/10 bg-gradient-to-br from-gray-900/20 via-gray-800/20 to-gray-700/20"
      />
      <div className="absolute top-6 left-6 ">
        <AlertTriangle className="w-6 h-6 text-white/80" />
      </div>
      <div className="w-full h-full relative z-10 mt-12 ">
        <h3 className="text-2xl font-bold mb-4">Risks of PFAS Exposure</h3>
        <div className="bg-red-950/50 border-l-4 border-pinkAccent p-4 mb-6">
          <p className="text-gray-200">
            PFAS are highly persistent in the environment and have been linked
            to potential health risks.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-950/30 p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-red-950/30 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-pinkAccent" />
              </div>
              <span className="text-[10px]">Human Health</span>
            </div>
          </div>
          <div className="bg-red-950/30 p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-red-950/30 p-2 rounded-lg">
                <Mountain className="w-6 h-6 text-pinkAccent" />
              </div>
              <span className="text-[10px]">Environmental Impact</span>
            </div>
          </div>
          <div className="bg-red-950/30 p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-red-950/30 p-2 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-pinkAccent" />
              </div>
              <span className="text-[10px]">Bioaccumulation</span>
            </div>
          </div>
          <div className="bg-red-950/30 p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-red-950/30 p-2 rounded-lg">
                <Droplets className="w-6 h-6 text-pinkAccent" />
              </div>
              <span className="text-[10px]">Water Contamination</span>
            </div>
          </div>
        </div>
      </div>
      
    </motion.div>
  );
};

export function BentoEnvironment({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-mintAccent/20 via-pinkAccent to-mintAccent/5 p-6 ${className}`}
    >
      <div className="space-y-4">
        <motion.div
          className="w-10 h-10 rounded-full bg-mintAccent/20 flex items-center justify-center"
          initial={{
            color: "rgba(225,12,115,1)",
          }}
          variants={{
            hover: {
              scale: 1.2,
              rotate: -20,
              translateX: 20,
              translateY: 20,
              color: "rgba(225,12,115,1)",
            },
          }}
          transition={{ duration: 0.2 }}
        >
          <Leaf className="w-5 h-5" />
        </motion.div>
        <h3 className="text-xl font-semibold text-darkGrey">Eco-Friendly</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="text-2xl font-bold text-tealAccent">95%</div>
            <div className="text-sm text-gray-600">Waste Reduction</div>
          </div>
          <div className="flex-1">
            <div className="text-2xl font-bold text-tealAccent">0</div>
            <div className="text-sm text-gray-600">Carbon Emissions</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
