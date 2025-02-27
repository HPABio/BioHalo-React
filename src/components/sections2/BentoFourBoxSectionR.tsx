"use client";

import { BentoBox } from "../bentos/BentoBox";

export const BentoFourBoxSectionR = ({ className }: { className?: string }) => {
  const DEBUG = false; // Toggle this to enable/disable logging

  if (DEBUG) console.log("Rendering BentoFourBoxSectionR");

  return (
    <section className={`py-8 ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Four Small Boxes (taking up half the space) */}
          <BentoBox
            title="Feature One"
            subtitle="Quick info"
            text="First small box with concise information."
            className=""
          />

          <BentoBox
            title="Feature Two"
            subtitle="Key points"
            text="Second small box highlighting important details."
            className=""
          />

          <BentoBox
            title="Feature Three"
            subtitle="Statistics"
            text="Third small box with relevant metrics."
            className=""
          />

          <BentoBox
            title="Feature Four"
            subtitle="Benefits"
            text="Fourth small box showcasing advantages."
            className=""
          />

          {/* One Big Box (taking up the remaining half) */}
          <BentoBox
            title="Main Feature"
            subtitle="Comprehensive overview"
            text="This large box provides detailed information and takes up half the space on the right side layout."
            buttonText="Learn More"
            buttonLink="#"
            className="md:col-span-2 md:row-span-2"
          />
        </div>
      </div>
    </section>
  );
};
