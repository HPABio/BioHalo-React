'use client'

import React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface RollingTextProps {
  words: string[]
  duration?: number
  className?: string
  gap?: number // Gap in percentage
}

const MIN_DURATION = 0.05 // Starting duration
const MAX_DURATION = 0.9  // Ending duration
const DEFAULT_GAP = 100   // Default gap between words in percentage

// Calculate exponential duration based on current index
const calculateDuration = (currentIndex: number, totalLength: number) => {
  // Normalize the index to a value between 0 and 1
  const progress = currentIndex / (totalLength - 1)
  // Use exponential curve (x^4) to create sharp initial speed and slow ending
  const factor = Math.pow(progress, 4)
  // Interpolate between min and max duration
  return MIN_DURATION + (MAX_DURATION - MIN_DURATION) * factor
}

export function RollingText({ 
  words,
  duration = 10,
  className = "",
  gap = DEFAULT_GAP
}: RollingTextProps) {
  const [current, setCurrent] = React.useState<number>(0)
  const [isComplete, setIsComplete] = React.useState(false)

  React.useEffect(() => {
    if (isComplete) return // Don't set new timer if animation is complete
    
    const interval = (duration * 1000) / words.length
    const timer = setInterval(() => {
      setCurrent(prev => {
        const next = prev + 1
        if (next === words.length - 1) {
          setIsComplete(true)
          clearInterval(timer)
        }
        return next
      })
    }, interval)
    
    return () => clearInterval(timer)
  }, [words.length, duration, isComplete])

  return (
    <div 
      className={`relative block bg-red-500 overflow-hidden whitespace-nowrap ${className}`}
      style={{
        height: '1.5em',
        width: `${Math.max(...words.map(word => word.length))}ch`
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ y: `${gap}%` }}
          animate={{ y: "0%" }}
          exit={{ y: `-${gap}%` }}
          transition={{
            duration: calculateDuration(current, words.length),
            ease: "easeOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {words[current]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
