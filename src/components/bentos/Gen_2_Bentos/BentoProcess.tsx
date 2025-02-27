'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Analysis',
    description: 'Deep understanding of current fluorine processes'
  },
  {
    number: '02',
    title: 'Innovation',
    description: 'Development of safer, efficient solutions'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Seamless integration into existing systems'
  }
]

export function BentoProcess({ className }: { className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      transition={{ duration: 0.2 }}
      className={`col-span-2 row-span-1 relative overflow-hidden rounded-3xl bg-gradient-to-r from-darkGrey to-gray-700 p-6 text-white ${className}`}
    >
      {/* <div className="fixed w-full h-full bg-[#cccccc] bg-[url('https://www.transparenttextures.com/patterns/ecailles.png')]"></div> */}

          <motion.div 
            initial={{ 
              scale: 1,
            }}
            variants={{
              hover: {  
                scale: 1.1,
              }
            }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full h-full  bg-[url('https://www.transparenttextures.com/patterns/ecailles.png')]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-tealAccent to-transparent "></div>
          </motion.div>
          
          
          <motion.div 
        initial={{ 
          fontSize: "1rem",
          scale: 1,
          rotate: 0,
          backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.7), transparent, transparent)",
        }}
        variants={{
          hover: {  
            scale: 1.2,
            fontSize: "1.6rem",
            backgroundImage: "linear-gradient(to top right, rgba(0,0,0,0.7), rgba(0,0,0,0.5), transparent)",
            transform: "translate(0%, 0%)",
          }
        }}
        transition={{ duration: 0.2 }}
         className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-transparent to-transparent ">
            <h3 className=" font-semibold mt-4 mb-4">Our Process</h3>
         </motion.div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-transparent to-transparent "></div>

      <div className="relative h-full w-full">

      <div className="grid grid-cols-3 gap-4 mt-8">
        {steps.map((step) => (
          <div key={step.number} className="space-y-2">
            <div className="text-sm font-mono text-mintAccent">{step.number}</div>
            <div className="font-semibold">{step.title}</div>
            <div className="text-sm opacity-80">{step.description}</div>
          </div>
        ))}
      </div>
      </div>

 
    </motion.div>
  )
} 