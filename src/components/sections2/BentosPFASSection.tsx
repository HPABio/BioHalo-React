  "use client";

  import { BentoInfo } from "../bentos/PFAS_Bentos/BentoInfo";
  import { BentoStats } from "../bentos/PFAS_Bentos/BentoStats";
  import { BentoPeriodicTable } from "../bentos/PFAS_Bentos/BentoPeriodicTable";
  import { BentoProcess } from "../bentos/PFAS_Bentos/BentoProcess";
  import { BentoVideo } from "../bentos/PFAS_Bentos/BentoVideo";
  import { BentoTeam } from "../bentos/PFAS_Bentos/BentoTeam";
  import { BentoSafety } from "../bentos/PFAS_Bentos/BentoSafety";
  import { BentoEnvironment } from "../bentos/PFAS_Bentos/BentoEnvironment";
  import { BentoContact } from "../bentos/PFAS_Bentos/BentoContact";

  export const BentosPFASSection = ({ className }: { className?: string }) => {
    const DEBUG = false; // Toggle this to enable/disable logging

    if (DEBUG) console.log("Rendering BentoSection2");

    return (
      <section className={`py-16 ${className || ""}`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 capitalize">
            Fluorine drives our modern society
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding the key characteristics of Per- and Polyfluoroalkyl
            Substances
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            {/* Row 1 */}
            <BentoInfo className="" /> {/* col-span-2 row-span-2 */}
            <BentoStats className="border-2 border-gray-600" />
            <BentoVideo className="" />
            {/* Row 2 */}
            <BentoTeam className="" />
            <BentoSafety className="bg-gradient-to-bl from-mintAccent/50 to-gray-400" />
            {/* Row 3 */}
            <BentoEnvironment className="bg-gradient-to-br from-mintAccent/50 to-gray-400" />
            <BentoContact className="border-2 border-gray-600" />
            <BentoPeriodicTable className="bg-gradient-to-br from-lightGrey to-tealAccent border-2 border-gray-200" />{" "}
            {/* col-span-2 row-span-2 */}
            {/* Row 4 */}
            <BentoProcess className="" /> {/* col-span-2 */}
          </div>
        </div>
      </section>
    );
  };
