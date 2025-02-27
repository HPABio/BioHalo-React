'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export function BentoSafety() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-mintAccent/10 p-6"
    >
      <div className="space-y-4">
        <div className="w-10 h-10 rounded-full bg-mintAccent/20 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-tealAccent" />
        </div>
        <h3 className="text-xl font-semibold text-darkGrey">Safety First</h3>
        <p className="text-sm text-gray-600">
          Our processes prioritize safety while maintaining high efficiency
        </p>
        <div className="flex items-center gap-2">
          <div className="h-2 w-full rounded-full bg-mintAccent/20">
            <div className="h-full w-[98%] rounded-full bg-tealAccent" />
          </div>
          <span className="text-sm font-medium text-tealAccent">98%</span>
        </div>
      </div>
    </motion.div>
  )
} 