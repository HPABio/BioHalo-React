"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  logoUrl: string;
}

interface PartnersMarqueeSectionProps {
  className?: string;
  partners?: Partner[];
}

// Sample partners data - replace with actual partner logos
const samplePartners: Partner[] = [
  { id: 1, name: "Partner 1", logoUrl: "/images/partners/partner1.svg" },
  { id: 2, name: "Partner 2", logoUrl: "/images/partners/partner2.svg" },
  { id: 3, name: "Partner 3", logoUrl: "/images/partners/partner3.svg" },
  { id: 4, name: "Partner 4", logoUrl: "/images/partners/partner4.svg" },
  { id: 5, name: "Partner 5", logoUrl: "/images/partners/partner5.svg" },
  { id: 6, name: "Partner 6", logoUrl: "/images/partners/partner6.svg" },
  { id: 7, name: "Partner 7", logoUrl: "/images/partners/partner7.svg" },
  { id: 8, name: "Partner 8", logoUrl: "/images/partners/partner8.svg" },
  { id: 9, name: "Partner 9", logoUrl: "/images/partners/partner9.svg" },
  { id: 10, name: "Partner 10", logoUrl: "/images/partners/partner10.svg" },
];

// Duplicate the partners array to create a seamless loop
const createDuplicatedArray = (arr: Partner[]) => [...arr, ...arr];

export const PartnersMarqueeSection = ({
  className = "",
  partners = samplePartners,
}: PartnersMarqueeSectionProps) => {
  const duplicatedPartners = createDuplicatedArray(partners);

  return (
    <section className={`w-full py-16 overflow-hidden ${className} bg-[mask-image:linear-gradient(to_left,black,transparent)]`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-tealAccent via-tealAccent/70 to-mintAccent bg-clip-text text-transparent">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with leading organizations to advance sustainable
            solutions and drive innovation in biotechnology.
          </p>
        </motion.div>
      </div>

      {/* First marquee - left to right */}
      <div className="relative w-full py-6 "
      style={{ maskImage: 'linear-gradient(to right, transparent, rgba(0,0,0,0.5), black, black, black, black, black,black, rgba(0,0,0,0.5), transparent)' }}>

        <motion.div
          className="flex items-center space-x-16 whitespace-nowrap"
          animate={{ x: [0, -50 * partners.length] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-32 h-20 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center p-4 hover:bg-white/50 transition-colors"
            >
              <div className="relative w-full h-full">
                {/* Replace with actual partner logos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-700 font-medium text-center">
                    {partner.name}
                  </p>
                </div>
                {/* Uncomment when you have actual logo images */}
                {/* <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  fill
                  className="object-contain"
                /> */}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second marquee - right to left (opposite direction) */}
      <div className="relative w-full py-6 "
      style={{ maskImage: 'linear-gradient(to right, transparent, rgba(0,0,0,0.5), black, black, black, black, black,black, rgba(0,0,0,0.5), transparent)' }}>

        <motion.div
          className="flex items-center space-x-16 whitespace-nowrap"
          animate={{ x: [-50 * partners.length, 0] }}
          transition={{
            x: {
              duration: 25, // Slightly different speed for visual interest
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}-reverse`}
              className="flex-shrink-0 w-32 h-20 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center p-4 hover:bg-white/50 transition-colors"
            >
              <div className="relative w-full h-full">
                {/* Replace with actual partner logos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-700 font-medium text-center">
                    {partner.name}
                  </p>
                </div>
                {/* Uncomment when you have actual logo images */}
                {/* <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  fill
                  className="object-contain"
                /> */}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-600">
            Interested in partnering with us?{" "}
            <a href="#contact" className="text-tealAccent hover:underline">
              Get in touch
            </a>{" "}
            to explore collaboration opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
