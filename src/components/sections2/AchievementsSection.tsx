'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const achievements = [
  {
    title: 'Sustainable Impact Startup Award',
    date: '2024',
    description: 'Recognized for our innovative approach to sustainable chemistry',
  },
  {
    title: 'SynBio Startups Recognition',
    date: '2023',
    description: 'Selected as one of the most promising synthetic biology startups',
  },
]

export function AchievementsSection({ className }: { className?: string }) {
  return (
    <section className={`py-16 bg-lightGrey ${className || ''}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-darkGrey text-center mb-12"
        >
          Recent Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg"
            >
              <div className="text-sm text-tealAccent mb-2">{achievement.date}</div>
              <h3 className="text-xl font-semibold text-darkGrey mb-2">
                {achievement.title}
              </h3>
              <p className="text-darkGrey/70">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-tealAccent text-tealAccent hover:bg-mintAccent"
          >
            View All Achievements
          </Button>
        </div>
      </div>
    </section>
  )
}
