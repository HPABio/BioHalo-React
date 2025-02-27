'use client'

import { motion } from 'framer-motion'
import { PeriodicTable } from './PeriodicTable'
import { PeriodicTableNeoMorph } from './PeriodicTableNeoMorph'
import AlternatingSection from '../AlternatingSection'
import enzyme from '@/assets/images/3dEnzyme.jpg'
import pfasblack from  '@/assets/images/PFAS black.png'
import pfasblack2 from  '@/assets/images/PFAS black2.png'
//import pfaslight from '@/assets/images/PFAS light.jpg'
import pfaslight from '@/assets/images/PFAS light.png'
import AtomDiagram from '../ui/AtomDiagram'
import { MovingAtom } from '../ui/MovingAtom'
const problems = [
  {
    title: 'Fluorine in Modern Society',
    description: 'Fluorine plays a crucial role in driving our modern society, but current methods have significant drawbacks.',
  },
  {
    title: 'PFAS Contamination',
    description: 'PFAS degrade poorly, leading to widespread environmental contamination and health risks.',
  },
  {
    title: 'Health Impact',
    description: 'The health-related costs of PFAS contamination exceed €50 billion, affecting communities worldwide.',
  },
]

export function ChallengesSection() {
  return (
    <section className="relative py-16 bg-lightGrey">
      <div className="container mx-auto px-4 md:px-16">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-darkGrey text-center mb-12"
        >
          Understanding the Challenge
        </motion.h2>
   
        <AlternatingSection
          title="Innovative Solutions"
          subtitle="Transforming Ideas into Reality"
          text="We specialize in turning complex concepts into user-friendly applications. Our team of experts works tirelessly to bring your vision to life, ensuring that every project we undertake is a testament to innovation and quality."
          isReversed={false}
        >
          <div className="w-full flex justify-end">
            <PeriodicTable />
          </div>
        </AlternatingSection>
        <MovingAtom
          width={80}
          height={80}
          hoverAmplitude={15}
          hoverDuration={4}
          shouldRotate={false}
          rotationDuration={30}
          shouldScale={true}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          className="absolute top-[18vh] left-[35vw] z-[11]"
        />
            <MovingAtom
          width={85}
          height={85}
          hoverAmplitude={15}
          hoverDuration={3}
          shouldRotate={false}
          rotationDuration={30}
          shouldScale={true}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          className="absolute top-[18vh] left-[15vw] z-[11]"
        />
            <MovingAtom
          width={65}
          height={65}
          hoverAmplitude={15}
          hoverDuration={2}
          shouldRotate={true}
          rotationDuration={30}
          shouldScale={true}
          scaleRange={[0.9, 1.0]}
          scaleDuration={2}
          className="absolute top-[36vh] left-[21vw] z-[9]"
        />
      <AlternatingSection
        title="Cutting-edge Technology"
        subtitle="Staying Ahead in a Digital World"
        text="Our commitment to utilizing the latest technologies ensures that our clients always stay ahead of the curve. From AI-driven solutions to blockchain applications, we're at the forefront of technological advancements."
        imageUrl={enzyme.src}
        imageAlt="Cutting-edge Technology Illustration"
        isReversed={true}
      />
      <AlternatingSection
        title="Customer-Centric Approach"
        subtitle="Your Success is Our Priority"
        text="We believe in building lasting relationships with our clients. Our customer-centric approach means that we're not just service providers, but partners in your success. We're dedicated to understanding your needs and delivering solutions that exceed expectations."
        imageUrl={pfaslight.src}
        imageAlt="Customer-Centric Approach Illustration"
        isReversed={false}
        divClassNames="bg-transparent"
        imageClassNames="shadow-none"
      />
      <AlternatingSection
        title="Cutting-edge Technology"
        subtitle="Staying Ahead in a Digital World"
        text="Our commitment to utilizing the latest technologies ensures that our clients always stay ahead of the curve. From AI-driven solutions to blockchain applications, we're at the forefront of technological advancements."
        imageUrl={pfasblack2.src}
        imageAlt="Cutting-edge Technology Illustration"
        isReversed={true}
        divClassNames="bg-transparent"
        imageClassNames="shadow-none"
      />
      <AlternatingSection
          title="Innovative Solutions"
          subtitle="Transforming Ideas into Reality"
          text="We specialize in turning complex concepts into user-friendly applications. Our team of experts works tirelessly to bring your vision to life, ensuring that every project we undertake is a testament to innovation and quality."
          isReversed={false}
        >
          <div className="w-full flex justify-end">
            <PeriodicTableNeoMorph />
          </div>
        </AlternatingSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-2 h-2 mt-2 rounded-full bg-tealAccent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-darkGrey mb-2">
                  {problem.title}
                </h3>
                <p className="text-darkGrey/70">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
