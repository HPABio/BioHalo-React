"use client";

//Things to consider:
//1. Add a variable to controll the speed for each section transition
//2. Add a way to feed the button to the individual sections to trigger their respective animations
//3. Fix the scroll issues with the footer 
//4. Diable scrolling on the entire (desktop) page and only allow the snap scroll to work
//5. Add a little progress bar to the side with the arrow buttons to show the progress of the scroll
//6. The tree should have circles on the nodes to indicate the current section and responsive to the scroll
//7. Maybe the current node gets a little bit bigger and more opaque
//8. These nodes should also get a hover effect to indicate that they are clickable
//9. On click, the section should scroll to their respective section
//10. Add lazy loading to the sections so the section-divs load directly but the content is loaded on scroll
//11. Load 3 sections on the initial page load. The next 3 when the page is idle and the remaining pages is chunks of 3 as the page scroll progresses



import { motion, useScroll } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";

interface SnapScrollSectionsProps {
  children: ReactNode;
}

export function SnapScrollSections({ children }: SnapScrollSectionsProps) {
  const { scrollYProgress } = useScroll();
  const childrenArray = Array.isArray(children) ? children : [children];
  const numSections = childrenArray.length;
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index: number) => {
    const section = document.querySelectorAll(".section")[index];
    section?.scrollIntoView({ behavior: "smooth" });
    setCurrentSection(index);
  };

  const scrollToTop = () => {
    const firstSection = document.querySelector(".section");
    firstSection?.scrollIntoView({ behavior: "smooth" });
    setCurrentSection(0);
  };

  useEffect(() => {
    // 1. Creates a scroll event listener that runs handleScroll function
    const handleScroll = () => {
      // 2. Gets all sections and checks each one's position
      const sections = document.querySelectorAll(".section");
      sections.forEach((section, index) => {
        // 3. Updates currentSection state when a section's top edge is in the upper half of viewport
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setCurrentSection(index);
        }
      });
    };

    // 4. Adds scroll listener on mount and cleans it up on unmount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full scroll-container relative"
      style={{
        scrollSnapType: "y mandatory",
        overflowY: "scroll",
        height: "100vh",
      }}
    >
      {/* Up Arrow */}
      <button
        onClick={() => scrollToSection(Math.max(0, currentSection - 1))}
        className="fixed top-[100px] right-8 z-50 p-4 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-teal-800/20 transition-colors"
        style={{ display: currentSection === 0 ? "none" : "block" }}
      >
        ↑
      </button>

      {/* Down Arrow */}
      <button
        onClick={() =>
          scrollToSection(Math.min(numSections - 1, currentSection + 1))
        }
        className="fixed bottom-[100px] right-8 z-50 p-4 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-teal-800/20 transition-colors"
        style={{
          display: currentSection === numSections - 1 ? "none" : "block",
        }}
      >
        ↓
      </button>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-[100px] left-8 z-50 p-4 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-teal-800/20 transition-colors"
        style={{ display: currentSection === 0 ? "none" : "block" }}
      >
        ⌂
      </button>

      {childrenArray}
    </div>
  );
}
