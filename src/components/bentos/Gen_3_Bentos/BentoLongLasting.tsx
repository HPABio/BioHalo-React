'use client'

import { motion } from 'framer-motion'
import { Flame, Clock, Hourglass } from 'lucide-react'
import { url } from 'node:inspector'
import IndustryHeat from '@/assets/images/VariousImages/IndustryHeat.png'
import Decay from '@/assets/images/LummiAi/pexels-chris-s-414051315-26932466.jpg'

export function BentoLongLasting({ className }: { className?: string }) {
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
        backgroundImage: `url(${Decay.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      variants={{
        hover: {
          opacity: 1,
          scale: 1.25,
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
          <h3 className="text-xl font-semibold hidden">Persistent</h3>
          <motion.div className="w-12 h-12 rounded-full bg-mintAccent/30 border-2 border-tealAccent/70 flex items-center justify-center "
          initial={{
            color: "rgba(134,185,202,1)",
            scale: 1,
            rotate: 0,
            translateX: 0,
            translateY: 0,
            borderColor: "rgba(34,85,102,1)",
          }}
          variants={{
            hover: {
              color: "rgba(179,205,182,1)",
              scale: 1.2,
              rotate: 20,
              borderColor: "rgba(82,82,72,1)",
              backgroundColor: "rgba(182,182,182,1)",
            },
          }}
          transition={{ duration: 0.2 }}
          >
            <Hourglass className="w-6 h-6" />
          </motion.div>
        </motion.div>
            <motion.div className="text-6xl font-bold text-tealAccent relative"
            initial={{
              color: "rgba(134,185,202,1)",
            }}
            variants={{
              hover: {
                color: "rgba(196,203,215,0.9)",
              }
            }}>
              <motion.p
                initial={{
                  opacity: 0.5,
                  color: "rgba(134,185,202,1)", 
                }}
                variants={{
                  hover: {
                  color: "rgba(196,203,215,0.9)",
                  opacity: 0.8,
                }
              }}> <span className="text-xs uppercase font-medium">low rates of</span> </motion.p>
              <h2 className="relative text-6xl bg-gradient-to-tr from-gray-800 via-gray-600 to-gray-400 pb-2  bg-clip-text">  Decay
              <motion.span 
                className="absolute top-0 left-0  bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                variants={{
                  hover: { opacity: 1 }
                }}
                transition={{ duration: 0.2 }}
              >
                Decay
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
        className="text-[11px] leading-tight">Fluorinated polymers are extremely durable and resistant to weather and degradation that occurs over time</motion.p>
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