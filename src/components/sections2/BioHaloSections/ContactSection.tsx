"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";
import AtomDiagram from "@/components/ui/AtomDiagram";
import Link from "next/link";
import BioHaloLogoOnly from "@/assets/BioHaloLogoOnly.svg";
import Image from "next/image";

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

      <div className="container mx-auto px-12 md:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-center bg-gradient-to-br from-mintAccent/30 via-gray-500/40 to-lightGrey/30 bg-clip-text text-transparent text-2xl lg:text-3xl 2xl:text-4xl font-Poppins font-light relative">
            to get in touch with
          </h2>
          <h1 className="text-center bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparent relative">
            <span className="text-5xl md:text-6xl 2xl:text-7xl drop-shadow-sm font-bold font-Poppins flex flex-col sm:flex-row items-center justify-center">
              <Image
                src={BioHaloLogoOnly}
                alt="BioHalo Logo"
                className="h-[0.8em] sm:h-[1em] w-auto sm:ml-4"
              />
              <span className="mt-2 sm:mt-0 ml-2 text-gray-300/40 bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text">
                BioHalo
              </span>
            </span>
            <span
              className="text-5xl md:text-6xl 2xl:text-7xl uppercase drop-shadow-sm font-normal font-Poppins
              bg-gradient-to-br from-mintAccent/60 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparentt"
            >
              reach out to us via
              <br />
            </span>
            <div className="relative w-full max-w-2xl mx-auto h-0.5 bg-gradient-to-r from-transparent via-tealAccent to-transparent mt-6 opacity-60"></div>
            <div className="w-[30%] h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-6 opacity-20 absolute bottom-0 left-[50%] translate-x-[-50%] " />
            <div className="w-[10%] h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-6 opacity-20 absolute bottom-0 left-[50%] translate-x-[-50%] " />
          </h1>
        </motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto w-full text-center my-12">
            Say <b>"hello"</b> to us! We're excited to hear from you.
          </p>

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
