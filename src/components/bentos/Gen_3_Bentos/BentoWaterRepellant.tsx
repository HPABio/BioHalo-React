"use client";

import { motion } from "framer-motion";
import { Droplet } from "lucide-react";
import Image from "next/image";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import IndustryHeat from '@/assets/images/VariousImages/IndustryHeat.png'

export function BentoWaterRepellant({ className }: { className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      variants={{ 
        hover: {
          border: "none",
          boxShadow: "2px 10px 15px 0px rgba(0, 0, 0, 0.2)",
          transition: { duration: 0.2, ease: "easeInOut" },
        }
      }}
      className={`col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-mintAccent/20 to-mintAccent/5 p-6 ${className}`}
    >
      <motion.div className="absolute top-0 left-0 w-full h-full "
      initial={{
        opacity: 0,
      }}
      style={{
        backgroundImage: `url(${WaterRepellantFabric.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      variants={{
        hover: {
          opacity: 1,
          transition: { duration: 0.6 },
        },
      }}
      >
      </motion.div>
      <div className="space-y-0 relative z-10">
        <motion.div className="flex items-center justify-between gap-4"
        initial={{
          color: "rgba(51,51,51,1)",
        }}
        variants={{
          hover: {
            color: "rgba(248,248,248,1)",
          }
        }}>
          <h3 className="text-xl font-semibold hidden">Repellant</h3>
          <motion.div className="w-12 h-12 rounded-full bg-mintAccent/30 border-2 border-tealAccent/70 flex items-center justify-center aspect-square"
          initial={{
            color: "rgba(134,185,202,1)",
            scale: 1,
            rotate: 0,
            translateX: 0,
            translateY: 0,
            borderColor: "rgba(34,85,102,1)",
            fill: "rgba(59,130,246,0)",

          }}
          variants={{
            hover: {
              color: "rgba(59,130,246,1)", // Blue color
              scale: 1.2,
              rotate: -20,
              borderColor: "rgba(14,165,233,0.6)", // Light blue border
              backgroundColor: "rgba(186,230,253,0.4)", // Very light blue background
              fill: "rgba(59,130,246,0.6)",
            },
          }}
          transition={{ duration: 0.2 }}
          >
            <Droplet className="w-6 h-6" fill='black/0' />
          </motion.div>
        </motion.div>
            <motion.div className="text-6xl font-bold text-tealAccent relative"
            initial={{
              color: "rgba(134,185,202,1)",
              opacity: 1,
            }}
            variants={{
              hover: {
                color: "rgb(118, 218, 243, 1)", // Light blue 
                opacity: 0.8,
              }
            }}>
              <motion.p> <span className="text-xs opacity-50 uppercase font-medium">to for example</span> </motion.p>
              <h2 className="relative">Water
              <motion.span 
                className="absolute top-0 left-0 bg-gradient-to-t from-blue-600 via-sky-500 to-cyan-300 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                variants={{
                  hover: { opacity: 1 }
                }}
                transition={{ duration: 0.2 }}
              >
                Water
              </motion.span>
              </h2>
            </motion.div>
        <motion.p 
        initial={{
          color: "rgba(102,102,102,1)",
          display: "none",
        }}
        variants={{
          hover: { color: "rgba(248,248,248,1)", display: "inline-block" }
        }}
        className="text-[11px] leading-tight">Impregrantion with a fluorinated polymer can make surfaces and textiles repell to water and other liquids</motion.p>
      </div>
      
      <motion.div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/50 to-black/0"
      initial={{
        opacity: 0,
      }}
      variants={{
        hover: {
          opacity: 1,
        },
      }}
      >
      </motion.div>
    </motion.div>
  )
} 


