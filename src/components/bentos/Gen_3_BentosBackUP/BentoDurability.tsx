'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import DirtBikeAdventure from '@/assets/images/VariousImages/DirtBikeAdventure.jpeg'
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";

export function BentoDurability({ className }: { className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, backgroundImage: "none", }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-mintAccent/10 p-6 ${className}`}
      variants={{ 
        hover: {
          border: "none",
          boxShadow: "2px 10px 15px 0px rgba(0, 0, 0, 0.2)",
          transition: { duration: 0.2, ease: "easeInOut" },
        }
      }}
    >
      <motion.div className="absolute top-0 left-0 w-full h-full "
      initial={{
        opacity: 0,
      }}
      style={{
        backgroundImage: `url(${DirtBikeAdventure.src})`,
          backgroundSize: "fit",
          backgroundPosition: "65% 75%",
          backgroundRepeat: "no-repeat",
          backgroundColor: "none",
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
        <motion.div className="flex items-center justify-between"
        initial={{
          color: "rgba(51,51,51,1)",
        }}
        variants={{
          hover: {
            color: "rgba(248,248,248,1)",
          }
        }}>
          <h3 className="text-xl font-semibold hidden">Durable</h3>
          <motion.div className="w-12 h-12 rounded-full bg-mintAccent/30 border-2 border-tealAccent/70 flex items-center justify-center "
          initial={{
            color: "rgba(34,85,102,1)",
            scale: 1,
            rotate: 0,
            translateX: 0,
            translateY: 0,
            borderColor: "rgba(34,85,102,1)",
          }}
          variants={{
            hover: {
              color: "rgb(159, 121, 37)",
              scale: 1.2,
              rotate: 20,
              borderColor: "rgba(153,130,38,0.9)",
              backgroundColor: "rgba(228, 220, 214, 0.85)",
            },
          }}
          transition={{ duration: 0.2 }}
          >
            <ShieldCheck className="w-6 h-6" />
          </motion.div>
        </motion.div>
            <motion.div className="text-6xl font-bold text-tealAccent relative leading-none"
            initial={{ color: "rgba(34,85,102,1)" }}
            variants={{
              hover: {
                color: "rgba(253,230,138,0.9)",
              }
            }}>
              <motion.p> <span className="text-xs opacity-50 uppercase font-medium leading-none">resistnat to</span> </motion.p>
              <motion.h2 className="relative text-6xl leading-none">
              <motion.span 
                className="relative text-5xl leading-none"
                initial={{ opacity: 1 }}
                variants={{
                  hover: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
              >
                Wear&Tear
              </motion.span>
              <motion.span 
                className="absolute text-5xl leading-none top-0 left-0 bg-gradient-to-t from-stone-800 via-stone-600 to-amber-200 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                variants={{
                  hover: { opacity: 1 }
                }}
                transition={{ duration: 0.2 }}
              >
                Wear&Tear
              </motion.span>
              </motion.h2>
            </motion.div>
        <motion.p 
        initial={{
          color: "rgba(102,102,102,1)",
          display: "none",  
        }}
        variants={{
          hover: { color: "rgba(248,248,248,1)", display: "inline-block" }
        }}
        className="text-[11px] leading-tight">Some fluorinated polymers like PTFE can withstand extreme temperatures</motion.p>
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