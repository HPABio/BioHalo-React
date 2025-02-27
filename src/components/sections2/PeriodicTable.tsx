'use client'

import { motion } from 'framer-motion'
import { SonarPing } from '@/components/ui/SonarPing'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface Element {
  number: number
  symbol: string
  name: string
  period: number
  group: number
}

const elements: Element[] = [
  { "number": 1,   "symbol": "H",  "name": "Hydrogen",       "period": 1, "group": 1 },
  { "number": 2,   "symbol": "He", "name": "Helium",         "period": 1, "group": 18 },
  { "number": 3,   "symbol": "Li", "name": "Lithium",        "period": 2, "group": 1 },
  { "number": 4,   "symbol": "Be", "name": "Beryllium",      "period": 2, "group": 2 },
  { "number": 5,   "symbol": "B",  "name": "Boron",          "period": 2, "group": 13 },
  { "number": 6,   "symbol": "C",  "name": "Carbon",         "period": 2, "group": 14 },
  { "number": 7,   "symbol": "N",  "name": "Nitrogen",       "period": 2, "group": 15 },
  { "number": 8,   "symbol": "O",  "name": "Oxygen",         "period": 2, "group": 16 },
  { "number": 9,   "symbol": "F",  "name": "Fluorine",       "period": 2, "group": 17 },
  { "number": 10,  "symbol": "Ne", "name": "Neon",           "period": 2, "group": 18 },
  { "number": 11,  "symbol": "Na", "name": "Sodium",         "period": 3, "group": 1 },
  { "number": 12,  "symbol": "Mg", "name": "Magnesium",      "period": 3, "group": 2 },
  { "number": 13,  "symbol": "Al", "name": "Aluminum",       "period": 3, "group": 13 },
  { "number": 14,  "symbol": "Si", "name": "Silicon",        "period": 3, "group": 14 },
  { "number": 15,  "symbol": "P",  "name": "Phosphorus",     "period": 3, "group": 15 },
  { "number": 16,  "symbol": "S",  "name": "Sulfur",         "period": 3, "group": 16 },
  { "number": 17,  "symbol": "Cl", "name": "Chlorine",       "period": 3, "group": 17 },
  { "number": 18,  "symbol": "Ar", "name": "Argon",          "period": 3, "group": 18 },
  { "number": 19,  "symbol": "K",  "name": "Potassium",      "period": 4, "group": 1 },
  { "number": 20,  "symbol": "Ca", "name": "Calcium",        "period": 4, "group": 2 },
  { "number": 21,  "symbol": "Sc", "name": "Scandium",       "period": 4, "group": 3 },
  { "number": 22,  "symbol": "Ti", "name": "Titanium",       "period": 4, "group": 4 },
  { "number": 23,  "symbol": "V",  "name": "Vanadium",       "period": 4, "group": 5 },
  { "number": 24,  "symbol": "Cr", "name": "Chromium",       "period": 4, "group": 6 },
  { "number": 25,  "symbol": "Mn", "name": "Manganese",      "period": 4, "group": 7 },
  { "number": 26,  "symbol": "Fe", "name": "Iron",           "period": 4, "group": 8 },
  { "number": 27,  "symbol": "Co", "name": "Cobalt",         "period": 4, "group": 9 },
  { "number": 28,  "symbol": "Ni", "name": "Nickel",         "period": 4, "group": 10 },
  { "number": 29,  "symbol": "Cu", "name": "Copper",         "period": 4, "group": 11 },
  { "number": 30,  "symbol": "Zn", "name": "Zinc",           "period": 4, "group": 12 },
  { "number": 31,  "symbol": "Ga", "name": "Gallium",        "period": 4, "group": 13 },
  { "number": 32,  "symbol": "Ge", "name": "Germanium",      "period": 4, "group": 14 },
  { "number": 33,  "symbol": "As", "name": "Arsenic",        "period": 4, "group": 15 },
  { "number": 34,  "symbol": "Se", "name": "Selenium",       "period": 4, "group": 16 },
  { "number": 35,  "symbol": "Br", "name": "Bromine",        "period": 4, "group": 17 },
  { "number": 36,  "symbol": "Kr", "name": "Krypton",        "period": 4, "group": 18 },
  { "number": 37,  "symbol": "Rb", "name": "Rubidium",       "period": 5, "group": 1 },
  { "number": 38,  "symbol": "Sr", "name": "Strontium",      "period": 5, "group": 2 },
  { "number": 39,  "symbol": "Y",  "name": "Yttrium",        "period": 5, "group": 3 },
  { "number": 40,  "symbol": "Zr", "name": "Zirconium",      "period": 5, "group": 4 },
  { "number": 41,  "symbol": "Nb", "name": "Niobium",        "period": 5, "group": 5 },
  { "number": 42,  "symbol": "Mo", "name": "Molybdenum",     "period": 5, "group": 6 },
  { "number": 43,  "symbol": "Tc", "name": "Technetium",     "period": 5, "group": 7 },
  { "number": 44,  "symbol": "Ru", "name": "Ruthenium",      "period": 5, "group": 8 },
  { "number": 45,  "symbol": "Rh", "name": "Rhodium",        "period": 5, "group": 9 },
  { "number": 46,  "symbol": "Pd", "name": "Palladium",      "period": 5, "group": 10 },
  { "number": 47,  "symbol": "Ag", "name": "Silver",         "period": 5, "group": 11 },
  { "number": 48,  "symbol": "Cd", "name": "Cadmium",        "period": 5, "group": 12 },
  { "number": 49,  "symbol": "In", "name": "Indium",         "period": 5, "group": 13 },
  { "number": 50,  "symbol": "Sn", "name": "Tin",            "period": 5, "group": 14 },
  { "number": 51,  "symbol": "Sb", "name": "Antimony",       "period": 5, "group": 15 },
  { "number": 52,  "symbol": "Te", "name": "Tellurium",      "period": 5, "group": 16 },
  { "number": 53,  "symbol": "I",  "name": "Iodine",         "period": 5, "group": 17 },
  { "number": 54,  "symbol": "Xe", "name": "Xenon",          "period": 5, "group": 18 },
  { "number": 55,  "symbol": "Cs", "name": "Cesium",         "period": 6, "group": 1 },
  { "number": 56,  "symbol": "Ba", "name": "Barium",         "period": 6, "group": 2 },
  { "number": 57,  "symbol": "La", "name": "Lanthanum",      "period": 6, "group": 3 },
  { "number": 58,  "symbol": "Ce", "name": "Cerium",         "period": 8, "group": 4 },
  { "number": 59,  "symbol": "Pr", "name": "Praseodymium",   "period": 8, "group": 5 },
  { "number": 60,  "symbol": "Nd", "name": "Neodymium",      "period": 8, "group": 6 },
  { "number": 61,  "symbol": "Pm", "name": "Promethium",     "period": 8, "group": 7 },
  { "number": 62,  "symbol": "Sm", "name": "Samarium",       "period": 8, "group": 8 },
  { "number": 63,  "symbol": "Eu", "name": "Europium",       "period": 8, "group": 9 },
  { "number": 64,  "symbol": "Gd", "name": "Gadolinium",     "period": 8, "group": 10 },
  { "number": 65,  "symbol": "Tb", "name": "Terbium",        "period": 8, "group": 11 },
  { "number": 66,  "symbol": "Dy", "name": "Dysprosium",     "period": 8, "group": 12 },
  { "number": 67,  "symbol": "Ho", "name": "Holmium",        "period": 8, "group": 13 },
  { "number": 68,  "symbol": "Er", "name": "Erbium",         "period": 8, "group": 14 },
  { "number": 69,  "symbol": "Tm", "name": "Thulium",        "period": 8, "group": 15 },
  { "number": 70,  "symbol": "Yb", "name": "Ytterbium",      "period": 8, "group": 16 },
  { "number": 71,  "symbol": "Lu", "name": "Lutetium",       "period": 8, "group": 17 },
  { "number": 72,  "symbol": "Hf", "name": "Hafnium",        "period": 6, "group": 4 },
  { "number": 73,  "symbol": "Ta", "name": "Tantalum",       "period": 6, "group": 5 },
  { "number": 74,  "symbol": "W",  "name": "Tungsten",       "period": 6, "group": 6 },
  { "number": 75,  "symbol": "Re", "name": "Rhenium",        "period": 6, "group": 7 },
  { "number": 76,  "symbol": "Os", "name": "Osmium",         "period": 6, "group": 8 },
  { "number": 77,  "symbol": "Ir", "name": "Iridium",        "period": 6, "group": 9 },
  { "number": 78,  "symbol": "Pt", "name": "Platinum",       "period": 6, "group": 10 },
  { "number": 79,  "symbol": "Au", "name": "Gold",           "period": 6, "group": 11 },
  { "number": 80,  "symbol": "Hg", "name": "Mercury",        "period": 6, "group": 12 },
  { "number": 81,  "symbol": "Tl", "name": "Thallium",       "period": 6, "group": 13 },
  { "number": 82,  "symbol": "Pb", "name": "Lead",           "period": 6, "group": 14 },
  { "number": 83,  "symbol": "Bi", "name": "Bismuth",        "period": 6, "group": 15 },
  { "number": 84,  "symbol": "Po", "name": "Polonium",       "period": 6, "group": 16 },
  { "number": 85,  "symbol": "At", "name": "Astatine",       "period": 6, "group": 17 },
  { "number": 86,  "symbol": "Rn", "name": "Radon",          "period": 6, "group": 18 },
  { "number": 87,  "symbol": "Fr", "name": "Francium",       "period": 7, "group": 1 },
  { "number": 88,  "symbol": "Ra", "name": "Radium",         "period": 7, "group": 2 },
  { "number": 89,  "symbol": "Ac", "name": "Actinium",       "period": 7, "group": 3 },
  { "number": 90,  "symbol": "Th", "name": "Thorium",        "period": 9, "group": 4 },
  { "number": 91,  "symbol": "Pa", "name": "Protactinium",   "period": 9, "group": 5 },
  { "number": 92,  "symbol": "U",  "name": "Uranium",        "period": 9, "group": 6 },
  { "number": 93,  "symbol": "Np", "name": "Neptunium",      "period": 9, "group": 7 },
  { "number": 94,  "symbol": "Pu", "name": "Plutonium",      "period": 9, "group": 8 },
  { "number": 95,  "symbol": "Am", "name": "Americium",      "period": 9, "group": 9 },
  { "number": 96,  "symbol": "Cm", "name": "Curium",         "period": 9, "group": 10 },
  { "number": 97,  "symbol": "Bk", "name": "Berkelium",      "period": 9, "group": 11 },
  { "number": 98,  "symbol": "Cf", "name": "Californium",    "period": 9, "group": 12 },
  { "number": 99,  "symbol": "Es", "name": "Einsteinium",    "period": 9, "group": 13 },
  { "number": 100, "symbol": "Fm", "name": "Fermium",        "period": 9, "group": 14 },
  { "number": 101, "symbol": "Md", "name": "Mendelevium",    "period": 9, "group": 15 },
  { "number": 102, "symbol": "No", "name": "Nobelium",       "period": 9, "group": 16 },
  { "number": 103, "symbol": "Lr", "name": "Lawrencium",     "period": 9, "group": 17 },
  { "number": 104, "symbol": "Rf", "name": "Rutherfordium",  "period": 7, "group": 4 },
  { "number": 105, "symbol": "Db", "name": "Dubnium",        "period": 7, "group": 5 },
  { "number": 106, "symbol": "Sg", "name": "Seaborgium",     "period": 7, "group": 6 },
  { "number": 107, "symbol": "Bh", "name": "Bohrium",        "period": 7, "group": 7 },
  { "number": 108, "symbol": "Hs", "name": "Hassium",        "period": 7, "group": 8 },
  { "number": 109, "symbol": "Mt", "name": "Meitnerium",     "period": 7, "group": 9 },
  { "number": 110, "symbol": "Ds", "name": "Darmstadtium",   "period": 7, "group": 10 },
  { "number": 111, "symbol": "Rg", "name": "Roentgenium",    "period": 7, "group": 11 },
  { "number": 112, "symbol": "Cn", "name": "Copernicium",    "period": 7, "group": 12 },
  { "number": 113, "symbol": "Nh", "name": "Nihonium",       "period": 7, "group": 13 },
  { "number": 114, "symbol": "Fl", "name": "Flerovium",      "period": 7, "group": 14 },
  { "number": 115, "symbol": "Mc", "name": "Moscovium",      "period": 7, "group": 15 },
  { "number": 116, "symbol": "Lv", "name": "Livermorium",    "period": 7, "group": 16 },
  { "number": 117, "symbol": "Ts", "name": "Tennessine",     "period": 7, "group": 17 },
  { "number": 118, "symbol": "Og", "name": "Oganesson",      "period": 7, "group": 18 }
]


// Color variables for the periodic table
const TILE_BG = '#F8F8F8'         // Default tile background - ADJUSTABLE (lightGrey)
const HALOGEN_BG = '#225566'      // Special background for halogens - ADJUSTABLE (tealAccent)
const HALOGEN_TEXT = '#BCE2E2'    // Special text color for halogens - ADJUSTABLE (mintAccent)
const FLUORINE_BG = '#E10C73'     // Special background for fluorine - ADJUSTABLE (pinkAccent)
const FLUORINE_TEXT = '#FFFFFF'   // Special text color for fluorine - ADJUSTABLE

// Convert hex to RGB for brightness calculation
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

// Calculate relative text color based on background brightness
const getBrightness = (color: string) => {
  const rgb = hexToRgb(color);
  if (!rgb) return 255;
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
};

function ElementTile({ element }: { element: Element }) {
  // POTENTIAL HYDRATION ISSUE: Any direct DOM measurements or window queries here would cause mismatches
  const isHalogen = element.group === 17 && element.period < 8;
  const isFluorine = element.number === 9;
  const bgColor = isFluorine ? FLUORINE_BG : (isHalogen ? HALOGEN_BG : TILE_BG);
  
  const textColor = isFluorine ? FLUORINE_TEXT : 
    (isHalogen ? HALOGEN_TEXT : '#333333');
  const numberColor = isFluorine ? FLUORINE_TEXT : 
    (isHalogen ? HALOGEN_TEXT : '#CCCCCC');
  const tileContent = (
    <motion.div
      // POTENTIAL HYDRATION ISSUE: Using dynamic inline styles that depend on client-side measurements
      // Instead, we use CSS variables and calc() for responsive values
      whileHover={{ scale: 1.05 }}
      className="absolute p-[2%] flex flex-col items-center justify-center cursor-pointer transition-colors hover:brightness-95"
      style={{
        top: `calc(
          (${element.period - 1} * var(--tile-size)) + 
          (${element.period - 1} * var(--tile-gap)) +
          ${element.period > 7 ? 'clamp(5px, 1vw, 20px)' : '0px'}
        )`,
        left: `calc(
          (${element.group - 1} * var(--tile-size)) + 
          (${element.group - 1} * var(--tile-gap)) +
          ${element.group > 3 ? 'clamp(5px, 1vw, 20px)' : '0px'}
        )`,
        width: 'var(--tile-size)',
        height: 'var(--tile-size)', 
        borderRadius: 'calc(var(--tile-size) * 0.1)',
        boxShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: bgColor,
      }}
      title={element.name}
    >
      {isFluorine && (
       <SonarPing 
        color={FLUORINE_BG}
        size={35}
        animationDuration={4}
        interval={8}
      />
      )} 
      <span 
        style={{ 
          fontSize: 'calc(var(--tile-size) * 0.25)',
          color: numberColor,
        }}
      >
        {element.number}
      </span>
      <span 
        className="font-bold"
        style={{ 
          fontSize: 'calc(var(--tile-size) * 0.35)',
          color: textColor,
        }}
      >
        {element.symbol}
      </span>
    </motion.div>
  );

  if (isFluorine) {
    // POTENTIAL HYDRATION ISSUE: HoverCard uses client-side interactions
    // This is fine because it's only mounted after hydration
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          {tileContent}
        </HoverCardTrigger>
        <HoverCardContent 
          className="backdrop-blur-sm bg-white/65" 
          side="left"
          align="start"
          style={{
            width: `clamp(200px, 30vw, 320px)`,
            transform: 'translateY(calc(var(--tile-size) + 4px))'
          }}
        >
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <h4 className="text-[clamp(12px,1.2vw,14px)] font-semibold text-pinkAccent">Fluorine (F)</h4>
              <span className="text-[clamp(10px,1vw,12px)] text-gray-500">Atomic number: 9</span>
            </div>
            <p className="text-[clamp(11px,1.1vw,13px)] text-gray-600">
              A highly reactive halogen element that plays a crucial role in modern chemistry. 
              It's the most electronegative element and forms strong bonds with most elements.
            </p>
            <div className="pt-1.5 space-y-0.5">
              <div className="flex justify-between text-[clamp(10px,1vw,12px)]">
                <span className="text-gray-500">Atomic mass:</span>
                <span className="font-medium">18.998 u</span>
              </div>
              <div className="flex justify-between text-[clamp(10px,1vw,12px)]">
                <span className="text-gray-500">Electron configuration:</span>
                <span className="font-medium">[He] 2s² 2p⁵</span>
              </div>
              <div className="flex justify-between text-[clamp(10px,1vw,12px)]">
                <span className="text-gray-500">Electronegativity:</span>
                <span className="font-medium">3.98 (Pauling scale)</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  }

  return tileContent;
}

export function PeriodicTable({ className }: { className?: string }) {
  // POTENTIAL HYDRATION ISSUE: Using window.innerWidth directly would cause hydration mismatch
  // Instead, we use CSS media queries and CSS variables for responsive values
  return (
    <div className={`w-full overflow-x-auto p-[10px] ${className}`}>
      <div 
        className="relative mx-auto [--tile-gap:1px] md:[--tile-gap:2px]"
        style={{
          ['--tile-size' as string]: 'clamp(15px, 2.3vw, 35px)',
          width: 'calc(18 * var(--tile-size) + 17 * var(--tile-gap) + 20px)', // 18 groups + 17 gaps
          height: 'calc(11 * var(--tile-size) + 10 * var(--tile-gap))',  // 9 periods + 2 spacer rows + 10 gaps
          minWidth: '200px',
          maxWidth: '680px',
        }}
      >
        {elements.map((element) => {
          // Adjust position for lanthanides (period 8)
          return <ElementTile key={element.number} element={element} />;
        })}
      </div>
    </div>
  )
}

