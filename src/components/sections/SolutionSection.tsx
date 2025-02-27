'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const features = [
  'We incorporate fluorine in biopolymers',
  'We produce unmatched new-to-market products',
  'Our patented biofluorination technology',
]

export function SolutionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-darkGrey mb-6">
            BioHalo's Biofluorination Platform
          </h2>
          <p className="text-lg text-darkGrey/70 mb-8">
            Our breakthrough technology enables sustainable fluorination processes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-lightGrey p-6 rounded-lg"
            >
              <p className="text-darkGrey">{feature}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-lightGrey p-8 rounded-lg max-w-2xl mx-auto text-center"
        >
          <h3 className="text-xl font-semibold text-darkGrey mb-4">
            Beachhead Market: Coatings
          </h3>
          <p className="text-darkGrey/70 mb-6">
            We're initially targeting the coatings sector with our innovative solutions
          </p>
          <Button className="bg-tealAccent hover:bg-tealAccent/90 text-white">
            Learn More About Our Technology
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
