"use client";

import { BentoInfo } from "../bentos/Gen_1_Bentos/BentoInfo";
import { BentoStats } from "../bentos/Gen_1_Bentos/BentoStats";
import { BentoPeriodicTable } from "../bentos/Gen_1_Bentos/BentoPeriodicTable";
import { BentoProcess } from "../bentos/Gen_1_Bentos/BentoProcess";
import { BentoVideo } from "../bentos/Gen_1_Bentos/BentoVideo";
import { BentoTeam } from "../bentos/Gen_1_Bentos/BentoTeam";
import { BentoSafety } from "../bentos/Gen_1_Bentos/BentoSafety";
import { BentoEnvironment } from "../bentos/Gen_1_Bentos/BentoEnvironment";
import { BentoContact } from "../bentos/Gen_1_Bentos/BentoContact";

export function BentoSection({ className }: { className?: string }) {
  return (
    <section className={`py-16 bg-gray-50 ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Row 1 */}
          <BentoInfo /> {/* col-span-2 row-span-2 */}
          <BentoStats />
          <BentoVideo />
          {/* Row 2 */}
          <BentoTeam />
          <BentoSafety />
          {/* Row 3 */}
          <BentoPeriodicTable /> {/* col-span-2 row-span-2 */}
          <BentoEnvironment />
          <BentoContact />
          {/* Row 4 */}
          <BentoProcess /> {/* col-span-2 */}
        </div>
      </div>
    </section>
  );
}
