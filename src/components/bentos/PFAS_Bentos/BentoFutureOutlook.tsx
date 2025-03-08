"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Sprout, Zap } from "lucide-react";

export function BentoSafety({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-mintAccent/10 p-6 ${className}`}
    >
      <div className="space-y-4">
        <motion.div
          className="w-10 h-10 rounded-full bg-mintAccent/20 flex items-center justify-center"
          initial={{
            scale: 1,
            rotate: 0,
            color: "rgba(34,85,102,1)",
          }}
          variants={{
            hover: {
              scale: 1.4,
              rotate: 10,
              translateX: 20,
              translateY: 20,
              color: "rgba(225,12,115,1)",
            },
          }}
          transition={{ duration: 0.2 }}
        >
          <ShieldCheck className="w-5 h-5" />
        </motion.div>
        <h3 className="text-xl font-semibold text-darkGrey">Safety First</h3>
        <p className="text-sm text-gray-600">
          Our processes prioritize safety while maintaining high efficiency
        </p>
        <div className="flex items-center gap-2">
          <div className="h-2 w-full rounded-full bg-mintAccent/20">
            <div className="h-full w-[98%] rounded-full bg-tealAccent" />
          </div>
          <span className="text-sm font-medium text-tealAccent ">98%</span>
        </div>
      </div>
    </motion.div>
  );
}

export const BentoFutureOutlook = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white ${className}`}
    >
      <div className="absolute top-6 left-6">
        <Lightbulb className="w-8 h-8 text-white/80" />
      </div>
      <div className="w-full h-full relative z-10 mt-12">
        <h3 className="text-2xl font-bold mb-4">
          What's Next for Fluorine-Based Materials?
        </h3>
        <div className="bg-white/5 border-l-4 border-mintAccent p-4 mb-6">
          <p className="text-gray-200">
            As regulations tighten, industries are exploring alternative
            materials with similar benefits but fewer environmental concerns.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Current Research Focus:</h4>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-4 bg-white/5 p-3 rounded-lg">
              <div className="bg-mintAccent/20 p-2 rounded-full">
                <Lightbulb className="w-5 h-5 text-mintAccent" />
              </div>
              <div>
                <p className="font-medium">PFAS-free Solutions</p>
                <p className="text-sm text-gray-400">
                  Developing alternative compounds
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white/5 p-3 rounded-lg">
              <div className="bg-mintAccent/20 p-2 rounded-full">
                <Sprout className="w-5 h-5 text-mintAccent" />
              </div>
              <div>
                <p className="font-medium">Sustainable Alternatives</p>
                <p className="text-sm text-gray-400">Eco-friendly approaches</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white/5 p-3 rounded-lg">
              <div className="bg-mintAccent/20 p-2 rounded-full">
                <Zap className="w-5 h-5 text-mintAccent" />
              </div>
              <div>
                <p className="font-medium">Performance Optimization</p>
                <p className="text-sm text-gray-400">
                  Maintaining effectiveness
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute inset-0"
        initial={{
          backgroundImage: "none",
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
        variants={{
          hover: {
            backgroundImage:
              "linear-gradient(to bottom right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))",
          },
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};
