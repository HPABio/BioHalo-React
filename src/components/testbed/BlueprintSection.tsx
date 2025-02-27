"use client";

import BioReactorBlueprint from "@/components/ui/BioReactorBlueprint";
import BacteriaWindowBlueprint from "@/components/ui/BacteriaWindowBlueprint";

export const BlueprintSection = () => {
  return (
    <section className="w-screen h-[100vh] bg-blue-500/50">
      <div className="relative w-full h-full bg-red-500/40 p-4 flex flex-row items-center justify-center">
        <div className="relative w-full h-full bg-yellow-500/90">
          <BioReactorBlueprint
            classNames="absolute top-0 right-0 p-3"
            duration="3s"
            delay="0.5s"
            iterationCount="2"
            isAnimating={false}
          />
        </div>

        <div className="relative w-full h-full bg-purple-500/90">
          <BacteriaWindowBlueprint
            classNames="absolute top-0 left-0 bg-blue-500 w-full h-full scale-100"
            duration="6.5s"
            delay="3.5s"
            iterationCount="2"
            isAnimating={false}
          />
        </div>
      </div>
    </section>
  );
}; 