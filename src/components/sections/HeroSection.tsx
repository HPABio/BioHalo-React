'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useEffect, useRef } from 'react'
import { BioHaloLogo2 } from '../ui/BioHaloLogo2'


export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Log any video errors
    const video = videoRef.current
    if (video) {
      video.addEventListener('error', (e) => {
        console.error('Video error:', video.error)
      })
    }
  }, [])

  console.log("HeroSection is rendering");
 
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">      
      {/* load video lazily */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="/videos/fallback-image.jpg" // Optional: Add a fallback image
      >
        <source src="/videos/BGVideoPrism.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* <div className="absolute w-full h-full bg-gradient-to-tr from-gray-900 via-gray-900/50 to-transparent">
      </div> */}
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* <BioHaloLogo2 styles={{ width: "calc(100vw - 100px)", height: "calc(100vh - 100px)"}} /> */}
          <h1 className="text-5xl font-bold text-gray-300 mb-6">
            BioHalo: The Biohalogenation Company
          </h1>
          <p className="text-lg  text-gray-200/80 mb-8">
            Replacing PFAS with sustainable, high-performance biofluorinated materials
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="default" size="lg">
              Learn More
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  );

}
