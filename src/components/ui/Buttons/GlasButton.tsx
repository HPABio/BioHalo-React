import React from 'react';

const GlasButton: React.FC = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-[rgba(215,215,215,1)] overflow-hidden font-inter">
      {/* Background SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dottedGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(0,0,0,0.15)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dottedGrid)" />
      </svg>

      {/* Button Container */}
      <div className="button-wrap relative z-10 rounded-full pointer-events-none transition-all duration-400">
        <button className="relative rounded-full bg-gradient-to-br from-white/5 via-white/20 to-white/5 shadow-inner focus:outline-none transition-all duration-400">
          <span className="relative block select-none font-medium text-[rgba(50,50,50,1)] tracking-tight text-base px-6 py-3">
            Generate
          </span>
        </button>
        <div className="button-shadow" />
      </div>

      {/* Custom CSS for advanced styles */}
      <style jsx>{`
        /* CSS Custom Properties */
        :root {
          --global--size: clamp(2rem, 4vw, 5rem);
          --anim--hover-time: 400ms;
          --anim--hover-ease: cubic-bezier(0.25, 1, 0.5, 1);
          --border-width: clamp(1px, 0.0625em, 4px);
        }

        /* Button Shadow Styles */
        .button-shadow {
          --shadow-cuttoff-fix: 2em;
          position: absolute;
          width: calc(100% + var(--shadow-cuttoff-fix));
          height: calc(100% + var(--shadow-cuttoff-fix));
          top: calc(0% - var(--shadow-cuttoff-fix) / 2);
          left: calc(0% - var(--shadow-cuttoff-fix) / 2);
          filter: blur(clamp(2px, 0.125em, 12px));
          overflow: visible;
          pointer-events: none;
          transition: filter var(--anim--hover-time) var(--anim--hover-ease);
        }

        .button-shadow::after {
          content: "";
          position: absolute;
          z-index: 0;
          inset: 0;
          border-radius: 999vw;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
          width: calc(100% - var(--shadow-cuttoff-fix) - 0.25em);
          height: calc(100% - var(--shadow-cuttoff-fix) - 0.25em);
          top: calc(var(--shadow-cuttoff-fix) - 0.5em);
          left: calc(var(--shadow-cuttoff-fix) - 0.875em);
          padding: 0.125em;
          box-sizing: border-box;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          transition: all var(--anim--hover-time) var(--anim--hover-ease);
          overflow: visible;
          opacity: 1;
        }

        /* Hover & Active States using :has() pseudo-class */
        /* (Note: :has() is not supported in every browser) */
        .button-wrap:has(button:hover) .button-shadow {
          filter: blur(clamp(2px, 0.0625em, 6px));
        }
        .button-wrap:has(button:hover) .button-shadow::after {
          top: calc(var(--shadow-cuttoff-fix) - 0.875em);
          opacity: 1;
        }
        .button-wrap:has(button:active) {
          transform: rotate3d(1, 0, 0, 25deg);
        }
        .button-wrap:has(button:active) button {
          box-shadow: inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
            inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
            0 0.125em 0.125em -0.125em rgba(0, 0, 0, 0.2),
            0 0 0.1em 0.25em inset rgba(255, 255, 255, 0.2),
            0 0.225em 0.05em 0 rgba(0, 0, 0, 0.05),
            0 0.25em 0 0 rgba(255, 255, 255, 0.75),
            inset 0 0.25em 0.05em 0 rgba(0, 0, 0, 0.15);
        }
        .button-wrap:has(button:active) .button-shadow {
          filter: blur(clamp(2px, 0.125em, 12px));
        }
        .button-wrap:has(button:active) .button-shadow::after {
          top: calc(var(--shadow-cuttoff-fix) - 0.5em);
          opacity: 0.75;
        }
        .button-wrap:has(button:active) span {
          text-shadow: 0.025em 0.25em 0.05em rgba(0, 0, 0, 0.12);
        }

        /* Text Shine Effect */
        button span::after {
          content: "";
          display: block;
          position: absolute;
          z-index: 1;
          width: calc(100% - var(--border-width));
          height: calc(100% - var(--border-width));
          top: calc(0% + var(--border-width) / 2);
          left: calc(0% + var(--border-width) / 2);
          box-sizing: border-box;
          border-radius: 999vw;
          overflow: clip;
          background: linear-gradient(
            var(--angle-2, -45deg),
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 40% 50%,
            rgba(255, 255, 255, 0) 55%
          );
          z-index: 3;
          mix-blend-mode: screen;
          pointer-events: none;
          background-size: 200% 200%;
          background-position: 0% 50%;
          background-repeat: no-repeat;
          transition: background-position calc(var(--anim--hover-time) * 1.25)
              var(--anim--hover-ease),
            --angle-2 calc(var(--anim--hover-time) * 1.25) var(--anim--hover-ease);
        }
        button:hover span::after {
          background-position: 25% 50%;
        }
        button:active span::after {
          background-position: 50% 15%;
          --angle-2: -15deg;
        }
      `}</style>
    </div>
  );
};

export default GlasButton;
