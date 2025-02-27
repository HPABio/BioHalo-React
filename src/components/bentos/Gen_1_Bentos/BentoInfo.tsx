'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function BentoInfo() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-tealAccent to-mintAccent p-8 text-white"
    >
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4">Revolutionizing Fluorine Chemistry</h2>
        <p className="text-lg opacity-90">
          Our innovative approach transforms how industries work with fluorine, 
          making processes safer, more efficient, and environmentally friendly.
        </p>
      </div>
      <div className="absolute inset-0 bg-black/20" />
    </motion.div>
  )
} 