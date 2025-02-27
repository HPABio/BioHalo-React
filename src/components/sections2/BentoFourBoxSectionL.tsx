"use client";

import { BentoBox } from "../bentos/BentoBox";

export const BentoFourBoxSectionL = ({ className }: { className?: string }) => {
  const DEBUG = false; // Toggle this to enable/disable logging

  if (DEBUG) console.log("Rendering BentoFourBoxSectionL");

  return (
    <section className={`py-8 ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Big Box (takes half the space) */}
          <BentoBox
            title="Main Feature"
            subtitle="Primary information"
            text="This is the main content area that takes up half the space on the left side."
            buttonText="Learn More"
            buttonLink="#"
            className="md:col-span-2 md:row-span-2"
          />

          {/* Two Small Boxes (each takes a quarter of the width) */}
          <BentoBox
            title="Feature One"
            subtitle="Supporting details"
            text="Additional information in a smaller box."
            className=""
          />

          <BentoBox
            title="Feature Two"
            subtitle="More details"
            text="Another small box with supporting content."
            className=""
          />

          {/* Medium Box (takes half the width) */}
          <BentoBox
            title="Secondary Feature"
            subtitle="Additional information"
            text="This medium-sized box completes the left-side layout."
            buttonText="Explore"
            buttonLink="#"
            className="md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};
