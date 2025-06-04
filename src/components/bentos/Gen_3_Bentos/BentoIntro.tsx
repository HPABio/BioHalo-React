'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PfasBP from "@/assets/images/BluePrintStyle/pfasBP.svg";
import BioFMonomer from "@/assets/images/BluePrintSVG/BioF-Monomer.svg";
import BioFMonomerAllPink from "@/assets/images/BluePrintSVG/BioF-Monomer-all-pink.svg";
import { MovingAtom } from '@/components/ui/MovingAtom';
import { backgroundImage } from 'html2canvas/dist/types/css/property-descriptors/background-image';
import AtomDiagram from "@/components/ui/AtomDiagram";

export function BentoIntro({ className }: { className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`col-span-2 row-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-tealAccent to-mintAccent p-8 text-white ${className}`}
    >
      <div className="w-full h-full relative z-10 flex flex-col font-poppins lg:pt-14">
        <h2 className="text-4xl font-bold mb-4">Incorporating Fluorine Atoms...</h2>
        
        <motion.div 
          className="flex-1 relative"
          transition={{ duration: 0.1 }}
          >
            <motion.div 
              className="flex w-full h-full bg-red-400/0 gap-4  max-w-[700px] mx-auto"
            >
                <motion.div 
                  className="flex w-fit max-w-[180px] h-full bg-green-400/0 justify-center relative"
                  variants={{
                    hover: { 
                      opacity: [1, 0, 0],
                      width: ["100%", "70%", "0%", "0%"],
                      scale: [1, 0.5],
                      x: [0, 100, 100],
                      transition: { duration: 0.2, ease: "easeInOut" }
                     }
                  }}
                >
                          <div className="relative aspect-square w-32 h-32  bg-white/10 my-auto overflow-visible ">
                            <div className="absolute inset-0 flex flex-col items-center justify-center border-2 border-white/80 rounded-lg overflow-hidden">
                            <AtomDiagram
                              width={"250%"}
                              height={"250%"}
                              color="rgb(225,212,215,1)"
                              className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] opacity-10 blur-[1px]"
                            />
                              <span className="text-5xl font-bold">F</span>
                              <span className="text-sm mt-1 font-bold">Fluorine</span>
                              <span className="absolute top-1 left-1 text-xs font-bold">9</span>
                              <span className="text-xs mt-1 font-medium">18.99</span>
                            </div>
                            <AtomDiagram
                              width={"60%"}
                              height={"60%"}
                              color="rgb(225,12,115,1)"
                              className="absolute top-0 right-0 translate-x-[48%] translate-y-[-48%] opacity-1"
                            />
                            

                          </div>
                    
                </motion.div>
                <motion.div className="flex-grow flex max-w-[200px] bg-white/0 justify-center items-center"
                variants={{
                  hover: { 
                    opacity: 0,
                    width: 0,
                    transition: { duration: 0.1 }
                   }
                }}
                >
                  <div className='w-fit bg-yellow-400/0'>
                    <span className="text-4xl font-bold">+</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex w-full bg-blue-400/0 relative items-center justify-center aspect-video mx-auto"
                  variants={{
                    hover: { 
                      scale: 1.1,
                      rotate: 15,
                      transition: { duration: 0.2, ease: "easeInOut" }
                    }
                  }}
                >
                  <motion.div className='flex h-full w-full'
                  initial={{ opacity: 1, }}
                  variants={{
                    hover: {
                      opacity: 0,
                    }
                  }}
                  style={
                    {
                      backgroundImage: `url(${PfasBP.src})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                    }
                  }/>
                  <motion.div className='absolute inset-0'
                  initial={{ opacity: 0, width: "100%", y: 0 }}
                  variants={{
                    hover: {
                      opacity: [1, 1, 1],
                      y: [-5, 5, -5],
                      transition: { 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }
                  }}
                  style={
                    {
                      backgroundImage: `url(${BioFMonomerAllPink.src})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                    }
                  }/>

                </motion.div>
            </motion.div>


          </motion.div>


        <p className="text-lg opacity-90 mt-4">
          ...into the molecular structure of certain polymers, enhances their properties and transforms them into a class of 
          <span className='font-bold'> high-performance materials with advanced properties. </span>{" "}
        </p>
        <p className="text-3xl font-medium opacity-90 mt-4">
          Including:
        </p>
          {/*  known. as <span className="font-bold">PFAS</span> (Per- and Polyfluoroalkyl Substances). */}
      </div>

      <motion.div 
        className="absolute inset-0"
        initial={{ backgroundImage: "none", backgroundColor: "rgba(0,0,0,0.2)" }}
        variants={{
          hover: { backgroundImage: "linear-gradient(to bottom right, rgba(0, 50, 80, 0.6), rgba(0, 80, 100, 0.2))" }
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}