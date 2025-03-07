"use client";

import { motion } from "framer-motion";
import React from "react";
import { Factory, Cpu, Plane, Stethoscope, Shirt } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Analysis",
    description: "Deep understanding of current fluorine processes",
  },
  {
    number: "02",
    title: "Innovation",
    description: "Development of safer, efficient solutions",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Seamless integration into existing systems",
  },
];

export function BentoProcess({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      transition={{ duration: 0.2 }}
      className={`col-span-2 row-span-1 relative overflow-hidden rounded-3xl bg-gradient-to-r from-darkGrey to-gray-700 p-6 text-white ${className}`}
    >
      {/* <div className="fixed w-full h-full bg-[#cccccc] bg-[url('https://www.transparenttextures.com/patterns/ecailles.png')]"></div> */}

      <motion.div
        initial={{
          scale: 1,
        }}
        variants={{
          hover: {
            scale: 1.1,
          },
        }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 w-full h-full  bg-[url('https://www.transparenttextures.com/patterns/ecailles.png')]"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-tealAccent to-transparent "></div>
      </motion.div>

      <motion.div
        initial={{
          fontSize: "1rem",
          scale: 1,
          rotate: 0,
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.7), transparent, transparent)",
        }}
        variants={{
          hover: {
            scale: 1.2,
            fontSize: "1.6rem",
            backgroundImage:
              "linear-gradient(to top right, rgba(0,0,0,0.7), rgba(0,0,0,0.5), transparent)",
            transform: "translate(0%, 0%)",
          },
        }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-transparent to-transparent "
      >
        <h3 className=" font-semibold mt-4 mb-4">Our Process</h3>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-transparent to-transparent "></div>

      <div className="relative h-full w-full">
        <div className="grid grid-cols-3 gap-4 mt-8">
          {steps.map((step) => (
            <div key={step.number} className="space-y-2">
              <div className="text-sm font-mono text-mintAccent">
                {step.number}
              </div>
              <div className="font-semibold">{step.title}</div>
              <div className="text-sm opacity-80">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export const BentoIndustries = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white ${className}`}
    >
      <div className="absolute top-6 left-6">
        <Factory className="w-8 h-8 text-white/80" />
      </div>
      <div className="w-full h-full relative z-10 mt-12">
        <h3 className="text-2xl font-bold mb-6">Industries Relying on PFAS</h3>
        <p className="text-gray-300 mb-8">
          Widespread use across technology and consumer goods
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Cpu className="w-6 h-6 text-mintAccent" />
              <span className="text-lg">Electronics</span>
            </div>
            <p className="text-sm text-gray-400 pl-9">
              Semiconductors & components
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Plane className="w-6 h-6 text-mintAccent" />
              <span className="text-lg">Aerospace</span>
            </div>
            <p className="text-sm text-gray-400 pl-9">
              Aviation & automotive parts
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Stethoscope className="w-6 h-6 text-mintAccent" />
              <span className="text-lg">Medical</span>
            </div>
            <p className="text-sm text-gray-400 pl-9">Devices & equipment</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Shirt className="w-6 h-6 text-mintAccent" />
              <span className="text-lg">Textiles</span>
            </div>
            <p className="text-sm text-gray-400 pl-9">Coatings & treatments</p>
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
              "linear-gradient(to bottom right, rgba(0, 50, 80, 0.4), rgba(0, 80, 100, 0.1))",
          },
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};
