'use client'

import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'

export function BentoVideo() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-pinkAccent cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="relative h-full p-6 flex flex-col justify-between">
        <div className="flex justify-end">
          <PlayCircle className="text-white/80 w-8 h-8 group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Watch Demo</h3>
          <p className="text-sm text-white/80">See our technology in action</p>
        </div>
      </div>
    </motion.div>
  )
} 