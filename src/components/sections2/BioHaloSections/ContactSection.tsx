"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";
import AtomDiagram from "@/components/ui/AtomDiagram";
import Link from "next/link";

interface ContactSectionProps {
  className?: string;
}

export const ContactSection = ({ className = "" }: ContactSectionProps) => {
  return (
    <section className={`relative py-20 overflow-hidden ${className}`}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Decorative atom diagrams */}
      <div className="absolute top-0 right-0 translate-x-[60%] -translate-y-[30%] opacity-[2%] mix-blend-screen">
        <AtomDiagram width={3000} height={3000} color="rgba(18,110,119,1)" />
      </div>
      <div className="absolute bottom-0 left-0 translate-x-[-60%] translate-y-[20%] opacity-[5%] mix-blend-screen">
        <AtomDiagram width={2000} height={2000} color="rgba(18,110,119,1)" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="uppercase bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent drop-shadow-sm font-black font-Poppins">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're excited to hear from you! Reach out to us with any questions,
            partnership inquiries, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Email address card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-white/5 backdrop-blur-sm border border-tealAccent/20 rounded-xl hover:border-tealAccent/50 transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-tealAccent/10 flex items-center justify-center mb-6 group-hover:shadow-[0px_0px_15px_1px_rgba(18,110,99,0.3)] mx-auto">
              <Mail className="w-8 h-8 text-tealAccent" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300 text-center">
              Email
            </h3>
            <div className="text-center">
              <a
                href="mailto:info@biohalo.io"
                className="text-tealAccent hover:text-mintAccent transition-colors text-lg"
              >
                info@biohalo.io
              </a>
            </div>
          </motion.div>

          {/* Office address card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-white/5 backdrop-blur-sm border border-tealAccent/20 rounded-xl hover:border-tealAccent/50 transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-tealAccent/10 flex items-center justify-center mb-6 group-hover:shadow-[0px_0px_15px_1px_rgba(18,110,99,0.3)] mx-auto">
              <MapPin className="w-8 h-8 text-tealAccent" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300 text-center">
              Office
            </h3>
            <p className="text-gray-400 text-center text-lg">
              BioInnovation Institute
              <br />
              Ole Maaløes Vej 3<br />
              2200 København
            </p>
          </motion.div>

          {/* LinkedIn profile card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 bg-white/5 backdrop-blur-sm border border-tealAccent/20 rounded-xl hover:border-tealAccent/50 transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-tealAccent/10 flex items-center justify-center mb-6 group-hover:shadow-[0px_0px_15px_1px_rgba(18,110,99,0.3)] mx-auto">
              <Linkedin className="w-8 h-8 text-tealAccent" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300 text-center">
              LinkedIn
            </h3>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/company/biohalo/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tealAccent hover:text-mintAccent transition-colors text-lg"
              >
                Connect with us
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="w-20 h-1 bg-gradient-to-r from-tealAccent to-mintAccent/50 rounded-full mx-auto mb-10"></div>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} BioHalo. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
