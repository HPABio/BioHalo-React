  "use client";

  import { BentoIntro } from "../bentos/Gen_3_Bentos/BentoIntro";
  import { BentoStats } from "../bentos/Gen_3_Bentos/BentoStats";
  import { BentoWaterRepellant } from "../bentos/Gen_3_Bentos/BentoWaterRepellant";
  import { BentoPeriodicTable } from "../bentos/Gen_3_Bentos/BentoPeriodicTable";
  import { BentoProcess } from "../bentos/Gen_3_Bentos/BentoProcess";
  import { BentoVideo } from "../bentos/Gen_3_Bentos/BentoVideo";
  import { BentoTeam } from "../bentos/Gen_3_Bentos/BentoTeam";
  import { BentoSafety } from "../bentos/Gen_3_Bentos/BentoSafety";
  import { BentoHeatResistant } from "../bentos/Gen_3_Bentos/BentoHeatResistant";
  import { BentoContact } from "../bentos/Gen_3_Bentos/BentoContact";

  export const BentoSectionGen3 = ({ className }: { className?: string }) => {
    const DEBUG = false; // Toggle this to enable/disable logging

    if (DEBUG) console.log("Rendering BentoSection2");

    return (
      <section className={`pt-4 pb-16 bg-gray-50 ${className || ""}`}>
        <div className="container mx-auto px-4 font-poppins">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            {/* Row 1 */}
            <BentoIntro className="border-2 border-lightGrey" /> {/* col-span-2 row-span-2 */}
            <BentoStats className="" />
            <BentoWaterRepellant className="" />
            <BentoVideo className="hidden" />
            {/* Row 2 */}
            <BentoTeam className="" />
            <BentoSafety className="border-2 border-white" />
            {/* Row 3 */}
            <BentoHeatResistant className="border-2 border-white" />
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
