"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MapPin, Linkedin } from "lucide-react";
import AtomDiagram from "./AtomDiagram";

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const ContactOverlay: React.FC<ContactOverlayProps> = ({
  className,
  isOpen,
  onClose,
}) => {
  // Close overlay when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent scrolling when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md ${className}`}
        >
          {/* Background decoration */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-black/0 via-black/50 to-black"></div>

          {/* Atom diagrams in background */}
          <div className="absolute top-[20%] right-[30%] translate-x-[-50%] translate-y-[50%] opacity-[4%] mix-blend-screen">
            <AtomDiagram
              width={5300}
              height={5300}
              color="rgba(18,110,119,1)"
            />
          </div>
          <div className="absolute bottom-[20%] left-[20%] translate-x-[50%] -translate-y-[50%] opacity-[2%]">
            <AtomDiagram
              width={2300}
              height={2300}
              color="rgba(18,110,119,1)"
            />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 text-white hover:text-tealAccent transition-colors z-50"
            aria-label="Close overlay"
          >
            <X size={32} />
          </button>

          {/* Contact content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-10 max-w-4xl w-full mx-auto px-4"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center">
              <span className="uppercase bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent drop-shadow-sm font-black font-Poppins">
                Get in Touch
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {/* Email address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-6 bg-white/10 backdrop-blur-sm border border-tealAccent/20 rounded-xl hover:border-tealAccent/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-tealAccent/10 flex items-center justify-center mb-4 group-hover:shadow-[0px_0px_15px_1px_rgba(18,110,99,0.3)]">
                  <Mail className="w-6 h-6 text-tealAccent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-300">
                  Email
                </h3>
                <a
                  href="mailto:info@biohalo.io"
                  className="text-tealAccent hover:text-mintAccent transition-colors"
                >
                  info@biohalo.io
                </a>
              </motion.div>

              {/* Office address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="p-6 bg-white/10 backdrop-blur-sm border border-tealAccent/20 rounded-xl hover:border-tealAccent/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-tealAccent/10 flex items-center justify-center mb-4 group-hover:shadow-[0px_0px_15px_1px_rgba(18,110,99,0.3)]">
                  <MapPin className="w-6 h-6 text-tealAccent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-300">
                  Office
                </h3>
                <p className="text-gray-400">
                  BioInnovation Institute
                  <br />
                  Ole Maaløes Vej 3<br />
                  2200 København
                </p>
              </motion.div>

              {/* LinkedIn profile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="p-6 bg-white/10 backdrop-blur-sm border border-tealAccent/20 rounded-xl hover:border-tealAccent/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-tealAccent/10 flex items-center justify-center mb-4 group-hover:shadow-[0px_0px_15px_1px_rgba(18,110,99,0.3)]">
                  <Linkedin className="w-6 h-6 text-tealAccent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-300">
                  LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/company/biohalo/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tealAccent hover:text-mintAccent transition-colors"
                >
                  Connect with us
                </a>
              </motion.div>
            </div>

            <div className="mt-16 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-gray-400 max-w-2xl mx-auto"
              >
                We're excited to hear from you! Reach out to us with any
                questions, partnership inquiries, or just to say hello.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
