"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useState } from "react";

export function Footer() {
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
    <footer className="bg-darkGrey text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src={logo}
                alt="BioHalo Logo"
                width={80}
                height={80}
                quality={100}
                className="w-auto h-10"
              />
            </div>
            <p className="text-gray-400">
              Innovating sustainable solutions for a better future
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#top"
                  onClick={(e) => handleScrollToSection(e, "#top")}
                  className="text-gray-400 hover:text-mintAccent"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#what-we-do"
                  onClick={(e) => handleScrollToSection(e, "#what-we-do")}
                  className="text-gray-400 hover:text-mintAccent"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#platform-technology"
                  onClick={(e) =>
                    handleScrollToSection(e, "#platform-technology")
                  }
                  className="text-gray-400 hover:text-mintAccent"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#platform-features-content"
                  onClick={(e) =>
                    handleScrollToSection(e, "#platform-features-content")
                  }
                  className="text-gray-400 hover:text-mintAccent"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#team-section"
                  onClick={(e) => handleScrollToSection(e, "#team-section")}
                  className="text-gray-400 hover:text-mintAccent"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a
                  href="mailto:info@biohalo.io"
                  className="hover:text-mintAccent"
                >
                  info@biohalo.io
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-mintAccent"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-mintAccent"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BioHalo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
