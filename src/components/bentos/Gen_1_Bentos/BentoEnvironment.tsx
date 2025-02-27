'use client'

import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'

export function BentoEnvironment() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-mintAccent/20 to-mintAccent/5 p-6"
    >
      <div className="space-y-4">
        <div className="w-10 h-10 rounded-full bg-mintAccent/20 flex items-center justify-center">
          <Leaf className="w-5 h-5 text-tealAccent" />
        </div>
        <h3 className="text-xl font-semibold text-darkGrey">Eco-Friendly</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="text-2xl font-bold text-tealAccent">95%</div>
            <div className="text-sm text-gray-600">Waste Reduction</div>
          </div>
          <div className="flex-1">
            <div className="text-2xl font-bold text-tealAccent">0</div>
            <div className="text-sm text-gray-600">Carbon Emissions</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 