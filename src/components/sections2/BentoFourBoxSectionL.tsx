"use client";

import { BentoBox } from "../bentos/BentoBox";

type BentoBoxContent = {
  title: string;
  subtitle: string;
  text: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
};

type BentoFourBoxSectionLProps = {
  className?: string;
  mainBox: BentoBoxContent;
  featureOne: BentoBoxContent;
  featureTwo: BentoBoxContent;
  secondaryBox: BentoBoxContent;
};

export const BentoFourBoxSectionL = ({
  className,
  mainBox,
  featureOne,
  featureTwo,
  secondaryBox,
}: BentoFourBoxSectionLProps) => {
  const DEBUG = false; // Toggle this to enable/disable logging

  if (DEBUG) console.log("Rendering BentoFourBoxSectionL");

  return (
    <section className={`py-8 ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Big Box (takes half the space) */}
          <BentoBox {...mainBox} className="md:col-span-2 md:row-span-2" />

          {/* Two Small Boxes (each takes a quarter of the width) */}
          <BentoBox {...featureOne} className="" />

          <BentoBox {...featureTwo} className="" />

          {/* Medium Box (takes half the width) */}
          <BentoBox {...secondaryBox} className="md:col-span-2" />
        </div>
      </div>
    </section>
  );
};
