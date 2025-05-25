  "use client";

  import { BentoInfo } from "../bentos/Gen_3_Bentos/BentoInfo";
  import { BentoStats } from "../bentos/Gen_3_Bentos/BentoStats";
  import { BentoPeriodicTable } from "../bentos/Gen_3_Bentos/BentoPeriodicTable";
  import { BentoProcess } from "../bentos/Gen_3_Bentos/BentoProcess";
  import { BentoVideo } from "../bentos/Gen_3_Bentos/BentoVideo";
  import { BentoTeam } from "../bentos/Gen_3_Bentos/BentoTeam";
  import { BentoSafety } from "../bentos/Gen_3_Bentos/BentoSafety";
  import { BentoEnvironment } from "../bentos/Gen_3_Bentos/BentoEnvironment";
  import { BentoContact } from "../bentos/Gen_3_Bentos/BentoContact";

  export const BentoSectionGen3 = ({ className }: { className?: string }) => {
    const DEBUG = false; // Toggle this to enable/disable logging

    if (DEBUG) console.log("Rendering BentoSection2");

    return (
      <section className={`py-16 bg-gray-50 ${className || ""}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            {/* Row 1 */}
            <BentoInfo className="" /> {/* col-span-2 row-span-2 */}
            <BentoStats className="" />
            <BentoVideo className="" />
            {/* Row 2 */}
            <BentoTeam className="" />
            <BentoSafety className="border-2 border-white" />
            {/* Row 3 */}
            <BentoEnvironment className="border-2 border-white" />
            <BentoContact className="" />
            <BentoPeriodicTable className="bg-gradient-to-br from-lightGrey to-tealAccent border-2 border-gray-200" />{" "}
            {/* col-span-2 row-span-2 */}
            {/* Row 4 */}
            <BentoProcess className="" /> {/* col-span-2 */}
          </div>
        </div>
      </section>
    );
  };
