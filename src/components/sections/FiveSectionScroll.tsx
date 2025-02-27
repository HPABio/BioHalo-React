"use client";

//alternative to installing GSAP is to use the CDN script
//<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>

import { useEffect } from "react";
import { gsap } from "gsap";
import { FiveSectionGSAP } from "@/components/sections/FiveSectionGSAP";
import { FiveSectionMotion } from "@/components/sections/FiveSectionMotion";

// import Lenis from "@studio-freight/lenis";

export function FiveSectionScroll() {
  /*   
    useEffect(() => {
    // Initialize Lenis smooth scroll with custom configuration
    const lenis = new Lenis({
      duration: 1.2, // Animation duration in seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smoothWheel: true, // Enable smooth mouse wheel scrolling
    });
    // Bind lenis to requestAnimationFrame for smooth animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Optional scroll event listener for debugging purposes
    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    // Cleanup function to prevent memory leaks on component unmount
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array ensures effect runs only once on mount

  // This setup creates a smooth scrolling experience using Lenis:
  // 1. Creates new Lenis instance with custom easing and duration
  // 2. Binds Lenis to requestAnimationFrame for smooth animation
  // 3. Adds optional scroll event listener for debugging
  // 4. Includes cleanup to prevent memory leaks
  // 5. Wrapped in useEffect to properly handle mounting/unmounting
 */
  return (
    <main className="w-full">
      {/* <FiveSectionGSAP /> */}
      <FiveSectionMotion />


      {/* <div className="min-h-screen w-full bg-grey-200 flex justify-center items-center">
        <div className="h-full w-[50vw] mt-[50vh] bg-fuchsia-300 flex flex-col gap-8 justify-center items-center">
          <h1 className="text-9xl text-center">This is some text</h1>
          <div className="flex-1 w-full bg-green-300">
            <div className="h-[1000px] w-full bg-green-300"></div>
            <div className="h-[1000px] w-full bg-green-300"></div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
