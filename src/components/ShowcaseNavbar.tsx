"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import { ContactOverlay } from "@/components/ui/ContactOverlay";

export const ShowcaseNavbar = () => {
  const [isContactOverlayOpen, setIsContactOverlayOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  const handleOpenContactOverlay = () => {
    setIsContactOverlayOpen(true);
  };

  const handleCloseContactOverlay = () => {
    setIsContactOverlayOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#what-we-do" },
    { name: "Technology", href: "#platform-technology" },
    { name: "Features", href: "#platform-features-content" },
    { name: "Team", href: "#team-section" },

    /*  { name: "Challenges", href: "/challenges" },
  { name: 'Technology', href: '/technology' },
  { name: "Team", href: "/team" },
  { name: "Achievements", href: "/achievements" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" }, */
    // { name: "Blog", href: "/blog" },
  ];

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Remove the '#' from the href
    const targetId = href.substring(1);

    // Handle top case separately
    if (targetId === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // Find the target element
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Get the element's position with offset for the fixed header
      // The 80px offset accounts for the navbar height
      const yPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - 80;

      // Scroll to the element
      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-screen border-b border-mediumGrey/5 bg-lightGrey/50 backdrop-blur-lg box-shadow-md fixed top-0 z-50"
      >
        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-tealAccent to-pinkAccent"
          style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
        />

        <div className="container mx-auto px-4 py-4 z-90">
          <nav className="flex items-center justify-between">
            <a
              href="#top"
              onClick={(e) => handleScrollToSection(e, "#top")}
              className="flex items-center"
            >
              <Image
                src={logo}
                alt="BioHalo Logo"
                width={80}
                height={80}
                quality={100}
                className="w-auto h-10"
              />
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="text-darkGrey hover:text-tealAccent transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Button
                className="bg-tealAccent hover:bg-pinkAccent/90 text-white"
                onClick={handleOpenContactOverlay}
              >
                Get in Touch
              </Button>
            </div>

            {/* Mobile menu button - to be implemented */}
            <Button variant="outline" className="md:hidden">
              Menu
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Contact Overlay */}
      <ContactOverlay
        isOpen={isContactOverlayOpen}
        onClose={handleCloseContactOverlay}
      />
    </>
  );
};
