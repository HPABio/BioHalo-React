import React, { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";

interface RasterizedCircleProps {
  children: React.ReactNode;
  className?: string;
  rasterizeDelay?: number; // Delay in ms before rasterizing
  quality?: number; // Canvas quality (0-1)
  debug?: boolean; // Show debug info
}

/**
 * RasterizedCircle component
 *
 * Renders its children normally on first render, then captures the rendered content
 * as a static image to reduce ongoing resource consumption.
 */
export const RasterizedCircle: React.FC<RasterizedCircleProps> = ({
  children,
  className = "",
  rasterizeDelay = 500,
  quality = 1,
  debug = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isRasterized, setIsRasterized] = useState(false);

  useEffect(() => {
    // Wait for children to fully render before capturing
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const element = containerRef.current;

        // Get dimensions before rasterizing
        const rect = element.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height,
        });

        // Convert to canvas and then to image
        html2canvas(element, {
          scale: quality,
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          logging: debug,
        })
          .then((canvas) => {
            // Convert canvas to data URL
            const dataUrl = canvas.toDataURL("image/png");
            setImageSrc(dataUrl);
            setIsRasterized(true);

            if (debug) {
              console.log("Circle rasterized successfully");
            }
          })
          .catch((err) => {
            console.error("Error rasterizing circle:", err);
          });
      }
    }, rasterizeDelay);

    return () => clearTimeout(timer);
  }, [rasterizeDelay, quality, debug]);

  return (
    <>
      {!isRasterized && (
        <div ref={containerRef} className={className}>
          {children}
        </div>
      )}

      {imageSrc && (
        <div
          className={className}
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: dimensions.width,
            height: dimensions.height,
          }}
        />
      )}
    </>
  );
};

export default RasterizedCircle;
