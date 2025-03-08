"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MovingAtom } from "@/components/ui/MovingAtom";

import {
  Beaker,
  Dna,
  Microscope,
  Atom,
  // Flask,
  Leaf,
  Recycle,
  Zap,
} from "lucide-react";

interface TechnologyFeature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PlatformTechnologySectionProps {
  className?: string;
}

const technologyFeatures: TechnologyFeature[] = [
  {
    id: 1,
    title: "Enzyme Engineering",
    description:
      "Our proprietary enzyme engineering platform enables precise control over fluorination reactions, targeting specific molecular positions.",
    icon: <Dna className="w-8 h-8 text-tealAccent" />,
  },
  {
    id: 2,
    title: "Biocatalysis",
    description:
      "We harness the power of biocatalysts to perform chemical transformations with unprecedented selectivity and efficiency.",
    icon: <Microscope className="w-8 h-8 text-tealAccent" />,
  },
  {
    id: 3,
    title: "Molecular Design",
    description:
      "Our computational platform predicts and optimizes enzyme performance for specific substrates and reaction conditions.",
    icon: <Atom className="w-8 h-8 text-tealAccent" />,
  },
  {
    id: 4,
    title: "Green Chemistry",
    description:
      "Our processes operate under mild conditions, using renewable resources and generating minimal waste.",
    icon: <Leaf className="w-8 h-8 text-tealAccent" />,
  },
  {
    id: 5,
    title: "Scalable Production",
    description:
      "Our technology seamlessly scales from laboratory to industrial production while maintaining performance and sustainability.",
    icon: <Beaker className="w-8 h-8 text-tealAccent" />,
  },
  {
    id: 6,
    title: "Circular Economy",
    description:
      "Our platform is designed with end-of-life considerations, enabling recyclability and biodegradability.",
    icon: <Recycle className="w-8 h-8 text-tealAccent" />,
  },
];

export const PlatformTechnologySection = ({
  className = "",
}: PlatformTechnologySectionProps) => {
  return (
    <section className={`w-full py-24 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 capitalize opacity-1 text-center xl:mt-[3vw]
                bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparent py-10">

            <span className="text-4xl md:text-6xl">
              With our revolutionary <br /></span>
            
            <span className="absolute opacity-0 lg:opacity-50 uppercase blur-[2px] font-black font-Poppins  
              bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent ">
              biohalogenation{" "}<br/></span>
            <span className="absolute opacity-0 lg:opacity-30 uppercase blur-[4px] font-black font-Poppins
              bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent ">
              biohalogenation{" "}<br/></span>
            <span className=" bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
              uppercase drop-shadow-sm font-black font-Poppins">
              biohalogenation{" "}<br/></span>

            <span className="absolute opacity-0 lg:opacity-50 uppercase blur-[2px] font-black font-Poppins  
                bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent ">Technologie</span>
            <span className="absolute opacity-0 lg:opacity-30 uppercase blur-[4px] font-black font-Poppins
              bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent">Technologie</span>
            <span className=" bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
              uppercase drop-shadow-sm font-black font-Poppins">Technologie <br /></span>

            <span className="text-4xl md:text-6xl">
            Our Platform Offers
            </span>
          </h1>
          <MovingAtom
        width={90}
        height={90}
        hoverAmplitude={10}
        hoverDuration={4}
        shouldRotate={false}
        rotationDuration={30}
        shouldScale={true}
        scaleRange={[0.9, 1.1]}
        scaleDuration={4}
        className="absolute bg-red-500/0 xl:top-[12%] xl:right-[15%] top-[1%] right-[10%]"
      />
          </motion.div>


        <div className="grid grid-cols-1 gap-12 mb-20">
          

          {/* Right side: Features list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologyFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-sm border border-tealAccent/20 rounded-xl hover:border-tealAccent transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-tealAccent/10 flex items-center justify-center mb-4 group-hover:shadow-[0px_0px_35px_1px_rgba(18,110,99,0.5)]
">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-400">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Left side: Technology visualization */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden relative h-[500px] bg-gradient-to-br from-tealAccent/10 to-mintAccent/20 rounded-2xl overflow-hidden lg:flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* This would ideally be replaced with a custom visualization or diagram of the enzyme platform */}
              <div className="relative w-[80%] h-[80%] flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-2 border-tealAccent/20 animate-pulse"></div>
                <div
                  className="absolute w-[80%] h-[80%] rounded-full border-2 border-tealAccent/30 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute w-[60%] h-[60%] rounded-full border-2 border-tealAccent/40 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>

                <div className="z-10 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
                  <Microscope className="w-16 h-16 text-tealAccent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-center text-gray-800">
                    Bio-Based Enzyme Platform
                  </h3>
                  <p className="text-gray-600 text-center mt-2">
                    Revolutionizing fluorination through biotechnology
                  </p>
                </div>

                <motion.div
                  className="absolute"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="relative w-[300px] h-[300px]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md">
                      <Atom className="w-8 h-8 text-tealAccent" />
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md">
                      <Dna className="w-8 h-8 text-tealAccent" />
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md">
                      <Beaker className="w-8 h-8 text-tealAccent" />
                    </div>
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md">
                      <Atom className="w-8 h-8 text-tealAccent" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-tealAccent/10 to-mintAccent/20 p-8 rounded-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-400">
            Transforming Industries with Sustainable Solutions
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform technology enables the creation of bio-based
            alternatives to traditional fluorinated materials, offering superior
            performance while eliminating the environmental and health concerns
            associated with PFAS.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex capitalize items-center justify-center px-6 py-3 bg-tealAccent text-white font-medium rounded-lg hover:bg-tealAccent/90 transition-colors"
            >
              Learn More About Our Technology via our newsletter
              <Zap className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BioHalo's proprietary enzyme platform enables sustainable
            fluorination through innovative biotechnology, replacing harmful
            PFAS with eco-friendly alternatives without compromising
            performance.
          </p>
      </div>
    </section>
  );
};
