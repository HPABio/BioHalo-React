import React, { useEffect, useRef, useState } from "react";

interface StyleProps {
  width?: string;
  height?: string;
  strokewidth?: string;
  strokedasharray?: string;
  strokedashoffset?: string;
  textanimation?: string;
  animationdelay?: string;
  animationduration?: string;
  viewBox?: string;
  darkMode?: boolean;
  classNames?: string;
}

const defaultStyles: StyleProps = {
  strokewidth: "14",
  strokedasharray: "1000",
  strokedashoffset: "1000",
  textanimation: "text-animation 1s ease-in-out forwards",
  animationdelay: "0.5s",
  animationduration: "3s",
  viewBox: "0 0 1310.99 303.96",
  darkMode: true,
};

export function BioHaloLogo2({
  styles = {},
}: {
  styles?: Partial<StyleProps>;
}) {
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef(null);
  const finalStyles = { ...defaultStyles, ...styles };
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const svgProps = {
    width: finalStyles.width,
    height: finalStyles.height,
    overflow: "visible",
    viewBox: finalStyles.viewBox,
    xmlns: "http://www.w3.org/2000/svg",
    className: finalStyles.classNames,
  };

  useEffect(() => {
    if (isInView) {
      // Set a timeout to clean up animations after they complete
      const animationDuration =
        parseFloat(finalStyles.animationduration || "3") * 1000;
      const animationDelay =
        parseFloat(finalStyles.animationdelay || "0.5") * 1000;

      animationTimeoutRef.current = setTimeout(() => {
        // Clean up animations after they complete
        const styleSheet = document.styleSheets[0];
        for (let i = 0; i < styleSheet.cssRules.length; i++) {
          const rule = styleSheet.cssRules[i];
          if (
            rule instanceof CSSStyleRule &&
            (rule.selectorText.includes("animatedFill") ||
              rule.selectorText.includes("animatedStroke") ||
              rule.selectorText.includes("bigCircle"))
          ) {
            styleSheet.deleteRule(i);
            i--;
          }
        }
      }, animationDuration + animationDelay);
    }
  }, [isInView, finalStyles.animationduration, finalStyles.animationdelay]);

  return (
    <div
      ref={componentRef}
      className="flex justify-center items-center overflow-visible"
    >
      <style>
        {`
          :root {
              --duration: ${finalStyles.animationduration};
              --delay: ${finalStyles.animationdelay};
              --animation-iteration-count: 1;
          }

          ${
            isInView
              ? `
          .animatedFill {
              stroke: none;
              stroke-width: 0;
              opacity: 0;
              animation: fill-animation var(--duration) linear forwards;
              animation-delay: var(--delay);
              animation-iteration-count: var(--animation-iteration-count);
          }

          @keyframes fill-animation {
              80% {
                  opacity: 0;
              }
              100% {
                  opacity: 1;
              }
          }

          .animatedStroke {
              fill: none;
              stroke-width: 5;
              stroke-linejoin: miter-clip;
              stroke-linecap: round;
              stroke-alignment: inner;
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: stroke-animation var(--duration) linear forwards;
              animation-delay: var(--delay);
              animation-iteration-count: var(--animation-iteration-count);
          }

          @keyframes stroke-animation {
              0% { stroke-dashoffset: 1000;}
              70% {stroke-dashoffset: 200;}
              100% {
                  stroke-dashoffset: 3;
                  opacity: 1;
              }
          }

          #bigCircleFill {
              stroke: none;
              opacity: 0;
              animation: bigCircle-fill-animation 2s linear forwards;
              animation-delay: none;
              animation-iteration-count: var(--animation-iteration-count);
          }

          #bigCircleStroke {
              fill: none;
              stroke-width: 7;
              stroke-linejoin: miter-clip;
              stroke-linecap: round;
              stroke-alignment: inner;
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: bigCircle-stroke-animation 2s linear forwards;
              animation-delay: none;
              animation-iteration-count: var(--animation-iteration-count);
          }

          @keyframes bigCircle-fill-animation {
              50% { opacity: 0; }
              70% { opacity: 1; }
              100% { opacity: 1; }
          }

          @keyframes bigCircle-stroke-animation {
              0% { stroke-dashoffset: 1000;}
              70% {stroke-dashoffset: 100;}
              100% {stroke-dashoffset: 0 }
          }
          `
              : ""
          }
        `}
      </style>
      <svg {...svgProps}>
        <path
          className="animatedFill"
          style={{ fill: finalStyles.darkMode ? "#101010" : "lightgray" }}
          d="M617.6,96.45c-4.25-3.95-6.37-8.83-6.37-14.65s2.13-10.92,6.37-14.87c4.25-3.95,9.73-5.93,16.44-5.93s11.96,1.98,16.22,5.93c4.25,3.95,6.37,8.91,6.37,14.87s-2.13,10.7-6.37,14.65c-4.25,3.95-9.66,5.92-16.22,5.92s-12.19-1.97-16.44-5.92M653.05,240.14h-38.24v-124.79h38.24v124.79h0ZM701.47,234.11c-9.77-5.22-17.44-12.67-23.03-22.37-5.59-9.69-8.39-21.02-8.39-33.99s2.83-24.11,8.5-33.88c5.66-9.77,13.42-17.26,23.26-22.48,9.84-5.21,20.88-7.82,33.1-7.82s23.26,2.61,33.1,7.82c9.84,5.22,17.59,12.72,23.26,22.48,5.66,9.77,8.5,21.06,8.5,33.88s-2.87,24.12-8.61,33.88c-5.75,9.77-13.57,17.26-23.49,22.48-9.92,5.22-20.99,7.83-33.21,7.83s-23.22-2.61-32.98-7.83M753.13,200.78c5.14-5.37,7.72-13.05,7.72-23.03s-2.5-17.67-7.49-23.03c-4.99-5.36-11.14-8.05-18.45-8.05s-13.64,2.65-18.56,7.94c-4.92,5.3-7.38,13.01-7.38,23.15s2.42,17.67,7.27,23.03c4.84,5.37,10.92,8.05,18.23,8.05s13.53-2.68,18.68-8.05M952.95,83.15h-38.24v61.5h-59.49v-61.5h-38.25v157h38.25v-64.63h59.49v64.63h38.24V83.15h0ZM976.99,143.75c4.84-9.69,11.44-17.14,19.79-22.37,8.35-5.22,17.67-7.82,27.96-7.82,8.79,0,16.51,1.79,23.15,5.36,6.63,3.58,11.74,8.28,15.32,14.09v-17.67h38.25v124.79h-38.25v-17.67c-3.73,5.81-8.91,10.51-15.54,14.09-6.64,3.58-14.35,5.37-23.15,5.37-10.14,0-19.39-2.65-27.73-7.94-8.35-5.3-14.95-12.82-19.79-22.59-4.85-9.76-7.27-21.05-7.27-33.88s2.42-24.08,7.27-33.77M1055.27,155.16c-5.29-5.52-11.74-8.28-19.34-8.28s-14.06,2.72-19.35,8.16c-5.3,5.45-7.94,12.94-7.94,22.48s2.65,17.11,7.94,22.7c5.29,5.59,11.74,8.39,19.35,8.39s14.05-2.76,19.34-8.28c5.29-5.51,7.94-13.04,7.94-22.58s-2.65-17.07-7.94-22.59M1164.29,240.14V74.65h-38.24v165.5h38.24ZM1212.71,234.11c-9.77-5.22-17.44-12.67-23.03-22.37-5.59-9.69-8.39-21.02-8.39-33.99s2.83-24.11,8.5-33.88c5.66-9.77,13.42-17.26,23.26-22.48,9.84-5.21,20.88-7.82,33.1-7.82s23.26,2.61,33.1,7.82c9.84,5.22,17.59,12.72,23.26,22.48,5.66,9.77,8.5,21.06,8.5,33.88s-2.87,24.12-8.61,33.88c-5.75,9.77-13.57,17.26-23.49,22.48-9.92,5.22-20.99,7.83-33.21,7.83s-23.22-2.61-32.98-7.83M1264.37,200.78c5.14-5.37,7.71-13.05,7.71-23.03s-2.49-17.67-7.49-23.03c-4.99-5.36-11.14-8.05-18.45-8.05s-13.64,2.65-18.56,7.94c-4.92,5.3-7.38,13.01-7.38,23.15s2.42,17.67,7.27,23.03c4.84,5.37,10.92,8.05,18.23,8.05s13.53-2.68,18.68-8.05M587.52,173.16c5.51,7.09,8.28,15.18,8.28,24.27,0,13.12-4.59,23.52-13.75,31.2-9.17,7.68-21.96,11.52-38.35,11.52h-73.13V83.15h70.67c15.95,0,28.44,3.65,37.46,10.95,9.02,7.3,13.53,17.22,13.53,29.75,0,9.24-2.42,16.92-7.27,23.03-4.84,6.12-11.29,10.37-19.35,12.75,9.09,1.95,16.4,6.46,21.92,13.53M508.8,146.66h25.05c6.26,0,11.07-1.37,14.42-4.14,3.35-2.76,5.03-6.82,5.03-12.19s-1.68-9.46-5.03-12.3c-3.35-2.83-8.16-4.26-14.42-4.26h-25.05v32.88h0ZM551.85,204.92c3.5-2.91,5.26-7.12,5.26-12.64s-1.83-9.84-5.48-12.97c-3.65-3.13-8.69-4.69-15.09-4.69h-27.73v34.66h28.18c6.41,0,11.37-1.45,14.87-4.36"
        />
        <path
          className="animatedFill"
          style={{ fill: "#E10C73" }}
          d="M89.96,58.83C40.15,59.6,0,100.15,0,150.14s38.66,88.94,87.15,91.17c-18.32-25.1-29.17-55.99-29.17-89.38,0-35.06,11.96-67.35,31.97-93.09h0Z"
        />
        <path
          className="animatedFill"
          style={{ fill: "#BCE2E2" }}
          d="M176.13,149.98c0-33.49-19.66-62.31-48.02-75.78-19.26,20.27-31.11,47.63-31.11,77.73s10.83,55.07,28.62,75.04c29.72-12.92,50.51-42.51,50.51-76.98h0Z"
        />
        <path
          id="bigCircleFill"
          style={{ fill: "#225566" }}
          d="M57.98,151.98C57.98,68.17,126.15,0,209.96,0s151.98,68.17,151.98,151.98-68.17,151.98-151.98,151.98S57.98,235.79,57.98,151.98M322.92,151.98c0-62.29-50.68-112.96-112.96-112.96s-112.96,50.68-112.96,112.96,50.67,112.96,112.96,112.96,112.96-50.68,112.96-112.96"
        />

        <path
          className="animatedStroke"
          style={{ stroke: finalStyles.darkMode ? "#101010" : "lightgray" }}
          d="M617.6,96.45c-4.25-3.95-6.37-8.83-6.37-14.65s2.13-10.92,6.37-14.87c4.25-3.95,9.73-5.93,16.44-5.93s11.96,1.98,16.22,5.93c4.25,3.95,6.37,8.91,6.37,14.87s-2.13,10.7-6.37,14.65c-4.25,3.95-9.66,5.92-16.22,5.92s-12.19-1.97-16.44-5.92M653.05,240.14h-38.24v-124.79h38.24v124.79h0ZM701.47,234.11c-9.77-5.22-17.44-12.67-23.03-22.37-5.59-9.69-8.39-21.02-8.39-33.99s2.83-24.11,8.5-33.88c5.66-9.77,13.42-17.26,23.26-22.48,9.84-5.21,20.88-7.82,33.1-7.82s23.26,2.61,33.1,7.82c9.84,5.22,17.59,12.72,23.26,22.48,5.66,9.77,8.5,21.06,8.5,33.88s-2.87,24.12-8.61,33.88c-5.75,9.77-13.57,17.26-23.49,22.48-9.92,5.22-20.99,7.83-33.21,7.83s-23.22-2.61-32.98-7.83M753.13,200.78c5.14-5.37,7.72-13.05,7.72-23.03s-2.5-17.67-7.49-23.03c-4.99-5.36-11.14-8.05-18.45-8.05s-13.64,2.65-18.56,7.94c-4.92,5.3-7.38,13.01-7.38,23.15s2.42,17.67,7.27,23.03c4.84,5.37,10.92,8.05,18.23,8.05s13.53-2.68,18.68-8.05M952.95,83.15h-38.24v61.5h-59.49v-61.5h-38.25v157h38.25v-64.63h59.49v64.63h38.24V83.15h0ZM976.99,143.75c4.84-9.69,11.44-17.14,19.79-22.37,8.35-5.22,17.67-7.82,27.96-7.82,8.79,0,16.51,1.79,23.15,5.36,6.63,3.58,11.74,8.28,15.32,14.09v-17.67h38.25v124.79h-38.25v-17.67c-3.73,5.81-8.91,10.51-15.54,14.09-6.64,3.58-14.35,5.37-23.15,5.37-10.14,0-19.39-2.65-27.73-7.94-8.35-5.3-14.95-12.82-19.79-22.59-4.85-9.76-7.27-21.05-7.27-33.88s2.42-24.08,7.27-33.77M1055.27,155.16c-5.29-5.52-11.74-8.28-19.34-8.28s-14.06,2.72-19.35,8.16c-5.3,5.45-7.94,12.94-7.94,22.48s2.65,17.11,7.94,22.7c5.29,5.59,11.74,8.39,19.35,8.39s14.05-2.76,19.34-8.28c5.29-5.51,7.94-13.04,7.94-22.58s-2.65-17.07-7.94-22.59M1164.29,240.14V74.65h-38.24v165.5h38.24ZM1212.71,234.11c-9.77-5.22-17.44-12.67-23.03-22.37-5.59-9.69-8.39-21.02-8.39-33.99s2.83-24.11,8.5-33.88c5.66-9.77,13.42-17.26,23.26-22.48,9.84-5.21,20.88-7.82,33.1-7.82s23.26,2.61,33.1,7.82c9.84,5.22,17.59,12.72,23.26,22.48,5.66,9.77,8.5,21.06,8.5,33.88s-2.87,24.12-8.61,33.88c-5.75,9.77-13.57,17.26-23.49,22.48-9.92,5.22-20.99,7.83-33.21,7.83s-23.22-2.61-32.98-7.83M1264.37,200.78c5.14-5.37,7.71-13.05,7.71-23.03s-2.49-17.67-7.49-23.03c-4.99-5.36-11.14-8.05-18.45-8.05s-13.64,2.65-18.56,7.94c-4.92,5.3-7.38,13.01-7.38,23.15s2.42,17.67,7.27,23.03c4.84,5.37,10.92,8.05,18.23,8.05s13.53-2.68,18.68-8.05M587.52,173.16c5.51,7.09,8.28,15.18,8.28,24.27,0,13.12-4.59,23.52-13.75,31.2-9.17,7.68-21.96,11.52-38.35,11.52h-73.13V83.15h70.67c15.95,0,28.44,3.65,37.46,10.95,9.02,7.3,13.53,17.22,13.53,29.75,0,9.24-2.42,16.92-7.27,23.03-4.84,6.12-11.29,10.37-19.35,12.75,9.09,1.95,16.4,6.46,21.92,13.53M508.8,146.66h25.05c6.26,0,11.07-1.37,14.42-4.14,3.35-2.76,5.03-6.82,5.03-12.19s-1.68-9.46-5.03-12.3c-3.35-2.83-8.16-4.26-14.42-4.26h-25.05v32.88h0ZM551.85,204.92c3.5-2.91,5.26-7.12,5.26-12.64s-1.83-9.84-5.48-12.97c-3.65-3.13-8.69-4.69-15.09-4.69h-27.73v34.66h28.18c6.41,0,11.37-1.45,14.87-4.36"
        />
        <path
          className="animatedStroke"
          style={{ stroke: "#E10C73" }}
          d="M89.96,58.83C40.15,59.6,0,100.15,0,150.14s38.66,88.94,87.15,91.17c-18.32-25.1-29.17-55.99-29.17-89.38,0-35.06,11.96-67.35,31.97-93.09h0Z"
        />
        <path
          className="animatedStroke"
          style={{ stroke: "#BCE2E2" }}
          d="M176.13,149.98c0-33.49-19.66-62.31-48.02-75.78-19.26,20.27-31.11,47.63-31.11,77.73s10.83,55.07,28.62,75.04c29.72-12.92,50.51-42.51,50.51-76.98h0Z"
        />
        <path
          id="bigCircleStroke"
          style={{ stroke: "#225566" }}
          d="M57.98,151.98C57.98,68.17,126.15,0,209.96,0s151.98,68.17,151.98,151.98-68.17,151.98-151.98,151.98S57.98,235.79,57.98,151.98M322.92,151.98c0-62.29-50.68-112.96-112.96-112.96s-112.96,50.68-112.96,112.96,50.67,112.96,112.96,112.96,112.96-50.68,112.96-112.96"
        />
      </svg>
    </div>
  );
}
