'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import BioReactorBlueprint from '@/assets/images/BioReactorBlueprint.svg'

export function BentoInfo({ className }: { className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`col-span-2 row-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-tealAccent to-mintAccent p-8 text-white ${className}`}
    >
      <div 
        className="w-full h-full relative z-10"
      >
        <h2 className="text-4xl font-bold mb-4">Using Biology to Revolutionize Fluorine Chemistry</h2>
        <p className="text-lg opacity-90">
          Our innovative approach transforms how industries work with fluorine, 
          making processes safer, more efficient, and environmentally friendly.
        </p>
      </div>
      <motion.div 
        className="absolute inset-0"
        initial={{ backgroundImage: "none", backgroundColor: "rgba(0,0,0,0.2)" }}
        variants={{
          hover: { backgroundImage: "linear-gradient(to bottom right, rgba(0, 50, 80, 0.6), rgba(0, 80, 100, 0.2))" }
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div 
        className="absolute top-0 left-1/3 w-2/3 h-full"
        style={{
          backgroundImage: `url(${BioReactorBlueprint.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        variants={{
          hover: {
            scale: 1.1,
            x: 20, 
            y: 20
          }
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  )
}