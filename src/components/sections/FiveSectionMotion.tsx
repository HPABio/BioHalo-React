"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export function FiveSectionMotion() {
  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#1e1b4b", "#312e81", "#1e1b4b", "#312e81", "#1e1b4b"]
  );

  // Add state for current section
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index: number) => {
    const section = document.querySelectorAll(".section")[index];
    section?.scrollIntoView({ behavior: "smooth" });
    setCurrentSection(index); // Update current section when scrolling
  };

  // Add scroll event listener to update current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.main
      className="w-full h-full scroll-container" // Sets container to full width and height
      style={{
        background, // Uses the dynamic background color from useTransform
        scrollSnapType: "y mandatory", // Enables snap scrolling on the y-axis
        overflowY: "scroll", // Enables vertical scrolling
        height: "100vh", // Sets height to full viewport height
      }}
    >
      <div className="fixed top-[10%] left-4 z-50 flex gap-2 items-center">
        {" "}
        {/* Navigation buttons container fixed to top-left */}
        <button
          onClick={() => scrollToSection(Math.max(0, currentSection - 1))}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
        >
          ←
        </button>
        {[0, 1, 2, 3, 4].map(
          (
            index // Maps through indices to create navigation buttons
          ) => (
            <button
              key={index} // Unique key for React rendering
              onClick={() => scrollToSection(index)} // Calls scroll function when clicked
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors" // Styling for semi-transparent buttons with hover effect
            >
              Section {index + 1}
            </button>
          )
        )}
        <button
          onClick={() => scrollToSection(Math.min(4, currentSection + 1))}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
        >
          →
        </button>
      </div>

      <motion.section
        className="section w-screen h-screen flex justify-center items-center" // Full screen section with centered content
        style={{ scrollSnapAlign: "start" }} // Enables snap scrolling for this section
        initial={{ opacity: 0 }} // Starting animation state
        whileInView={{ opacity: 1 }} // Animation when section comes into view
        transition={{ duration: 0.6 }} // Animation duration
      >
        <h1 className="text-9xl text-yellow-300">Section 1</h1>
      </motion.section>

      <motion.section
        className="section w-screen h-screen flex justify-center items-center"
        style={{ scrollSnapAlign: "start" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-9xl text-yellow-300">Section 2</h1>
      </motion.section>

      <motion.section
        className="section w-screen h-screen flex justify-center items-center"
        style={{ scrollSnapAlign: "start" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-9xl text-yellow-300">Section 3</h1>
      </motion.section>

      <motion.section
        className="section w-screen h-screen flex justify-center items-center"
        style={{ scrollSnapAlign: "start" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-9xl text-yellow-300">Section 4</h1>
      </motion.section>

      <motion.section
        className="section w-screen h-screen flex justify-center items-center"
        style={{ scrollSnapAlign: "start" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-9xl text-yellow-300">Section 5</h1>
      </motion.section>
    </motion.main>
  );
}
