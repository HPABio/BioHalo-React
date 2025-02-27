'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const conferences = [
  {
    name: 'BioTech Summit 2024',
    location: 'Berlin, Germany',
    date: 'March 15-17, 2024',
  },
  {
    name: 'Sustainable Chemistry Conference',
    location: 'Amsterdam, Netherlands',
    date: 'April 5-7, 2024',
  },
]

export function ConferencesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-darkGrey text-center mb-12"
        >
          Meet Us At...
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {conferences.map((conference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-lightGrey rounded-lg"
            >
              <Calendar className="w-5 h-5 text-tealAccent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-darkGrey mb-1">
                  {conference.name}
                </h3>
                <p className="text-darkGrey/70 mb-1">{conference.location}</p>
                <p className="text-sm text-tealAccent">{conference.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
