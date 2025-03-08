"use client";

import { BentoPFASOverview } from "@/components/bentos/PFAS_Bentos/BentoPFASOverview";
import { BentoRegulation } from "@/components/bentos/PFAS_Bentos/BentoRegulation";
import { BentoFluorineBenefits } from "@/components/bentos/PFAS_Bentos/BentoFluorineBenefits";
import { BentoIndustries } from "@/components/bentos/PFAS_Bentos/BentoIndustries";
import { BentoEnvironmentalConcerns } from "@/components/bentos/PFAS_Bentos/BentoEnvironmentalConcerns";
import { BentoFutureOutlook } from "@/components/bentos/PFAS_Bentos/BentoFutureOutlook";
import { Shield, Flame, Droplets, Factory } from "lucide-react";
import { motion } from "framer-motion";

const characteristics = [
  {
    title: "Highly Durable",
    icon: Shield,
    description: "Long-lasting compounds",
  },
  {
    title: "Heat Resistant",
    icon: Flame,
    description: "Thermal stability",
  },
  {
    title: "Water Repellent",
    icon: Droplets,
    description: "Moisture protection",
  },
  {
    title: "Industry Ready",
    icon: Factory,
    description: "Wide applications",
  },
];

export const BentosPFASSection = ({ className }: { className?: string }) => {
  const DEBUG = false;

  if (DEBUG) console.log("Rendering BentoSection2");

  return (
    <section className={`py-16 ${className || ""}`}>
      <div className="text-center mb-12">
        <div className="space-y-4">
            <h1 className="font-black font-Arial text-4xl md:text-6xl bg-gradient-to-tl from-mintAccent via-tealAccent to-tealAccent bg-clip-text text-transparent pb-10">
              <span className="">We explore, design,</span>
              <br />
              <span className="">and produce, unmatched</span>
              <br />
              <span className="bg-gradient-to-tr from-pinkAccent to-tealAccent/60 bg-clip-text text-transparent">
                new-to-market{" "}
              </span>{" "}
              <br className="hidden lg:block xl:hidden" />
              products
            </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Used in thousands of products worldwide
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Overview Container */}
          <div className="md:col-span-2 md:row-span-2 grid grid-rows-2 gap-4">
            {/* Overview Top Section */}
            <div className="relative overflow-hidden rounded-3xl">
              <BentoPFASOverview />
            </div>

            {/* Characteristics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {characteristics.map((char, index) => (
                <motion.div
                  key={char.title}
                  className="relative overflow-hidden rounded-3xl bg-white shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-4 left-4">
                    <char.icon className="w-6 h-6 text-tealAccent" />
                  </div>
                  <div className="p-6 pt-12">
                    <h4 className="font-semibold text-darkGrey">
                      {char.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {char.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tealAccent to-mintAccent opacity-50" />
                </motion.div>
              ))}
            </div>
          </div>

          <BentoEnvironmentalConcerns />
          <BentoRegulation className="bg-gradient-to-br from-mintAccent/50 to-gray-400" />
          <BentoIndustries className="md:col-span-2 border-2 border-gray-600" />
          <BentoFluorineBenefits className="md:col-span-2 bg-gradient-to-br from-lightGrey to-tealAccent" />
          <BentoFutureOutlook className="md:col-span-2 border-2 border-gray-200" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-yellow-400/70 text-black/60 text-6xl font-black py-8 px-16 rotate-[35deg] transform scale-[300%] shadow-2xl">
          UNDER CONSTRUCTION
        </div>
      </div>
    </section>
  );
};
