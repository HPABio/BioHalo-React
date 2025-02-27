import React, { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";

interface RasterizeComponentProps {
  children: React.ReactNode;
  className?: string;
  rasterizeDelay?: number; // Delay in ms before rasterizing
  quality?: number; // Canvas quality (0-1)
  debug?: boolean; // Show debug info
  shouldRasterize?: boolean; // Whether to actually perform rasterization
  forceWidth?: number; // Force a specific width
  forceHeight?: number; // Force a specific height
  maxRetries?: number; // Maximum number of retries for dimension detection
  saveToAssets?: boolean; // Whether to save the rasterized image to Assets folder
  componentName?: string; // Name of the component for saved image filename
  removeOriginalFromDOM?: boolean; // Whether to completely remove original elements from DOM after rasterization
}

/**
 * RasterizeComponent
 *
 * Renders its children normally on first render, then captures the rendered content
 * as a static image to reduce ongoing resource consumption.
 *
 * Can be used for any complex UI elements that don't change after initial render.
 */
export const RasterizeComponent: React.FC<RasterizeComponentProps> = ({
  children,
  className = "",
  rasterizeDelay = 2000, // Increased default to 2000ms
  quality = 1,
  debug = false,
  shouldRasterize = true, // Default to true for backward compatibility
  forceWidth,
  forceHeight,
  maxRetries = 5, // Increased from 3 to 5
  saveToAssets = false, // Default to false for backward compatibility
  componentName = "UnnamedComponent", // Default component name
  removeOriginalFromDOM = true, // Default to false to maintain backward compatibility
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isRasterized, setIsRasterized] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [attempts, setAttempts] = useState(0);
  const retryDelay = 500; // ms between retries
  const [originalRemoved, setOriginalRemoved] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Extract styles from the first child if it's a div with className
  let childClassName = "";
  let childStyle: React.CSSProperties = {};
  let childWidth = "";
  let childHeight = "";

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === "div") {
      if (child.props.className) {
        childClassName = child.props.className;

        // Try to extract width and height from className
        const widthMatch = child.props.className.match(/w-\[(\d+)px\]/);
        const heightMatch = child.props.className.match(/h-\[(\d+)px\]/);

        if (widthMatch) childWidth = `${widthMatch[1]}px`;
        if (heightMatch) childHeight = `${heightMatch[1]}px`;
      }

      if (child.props.style) {
        childStyle = { ...childStyle, ...child.props.style };

        // Extract width and height from style if available
        if (child.props.style.width) childWidth = child.props.style.width;
        if (child.props.style.height) childHeight = child.props.style.height;
      }
    }
  });

  // Function to get dimensions from various sources
  const getDimensions = () => {
    // First priority: forced dimensions from props
    if (forceWidth && forceHeight && forceWidth > 0 && forceHeight > 0) {
      if (debug)
        console.log(`Using forced dimensions: ${forceWidth}x${forceHeight}`);
      return { width: forceWidth, height: forceHeight };
    }

    // Second priority: getBoundingClientRect
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        if (debug)
          console.log(
            `Using getBoundingClientRect dimensions: ${rect.width}x${rect.height}`
          );
        return { width: rect.width, height: rect.height };
      }
    }

    // Third priority: offsetWidth/offsetHeight
    if (containerRef.current) {
      const offsetWidth = containerRef.current.offsetWidth;
      const offsetHeight = containerRef.current.offsetHeight;
      if (offsetWidth > 0 && offsetHeight > 0) {
        if (debug)
          console.log(
            `Using offset dimensions: ${offsetWidth}x${offsetHeight}`
          );
        return { width: offsetWidth, height: offsetHeight };
      }
    }

    // Fourth priority: explicit dimensions from child props
    if (childWidth && childHeight) {
      const width = parseInt(childWidth);
      const height = parseInt(childHeight);
      if (!isNaN(width) && !isNaN(height) && width > 0 && height > 0) {
        if (debug)
          console.log(
            `Using explicit dimensions from props: ${width}x${height}`
          );
        return { width, height };
      }
    }

    // Fifth priority: computed style
    if (containerRef.current) {
      const computedStyle = window.getComputedStyle(containerRef.current);
      const computedWidth = parseFloat(computedStyle.width);
      const computedHeight = parseFloat(computedStyle.height);
      if (computedWidth > 0 && computedHeight > 0) {
        if (debug)
          console.log(
            `Using computed style dimensions: ${computedWidth}x${computedHeight}`
          );
        return { width: computedWidth, height: computedHeight };
      }
    }

    // No valid dimensions found
    return null;
  };

  // Function to save image to Assets folder
  const saveImageToAssets = (dataUrl: string) => {
    if (!saveToAssets) return;

    try {
      // Create a timestamp for the filename
      const now = new Date();
      const timestamp = `${now.getFullYear()}-${String(
        now.getMonth() + 1
      ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}_${String(
        now.getHours()
      ).padStart(2, "0")}-${String(now.getMinutes()).padStart(2, "0")}-${String(
        now.getSeconds()
      ).padStart(2, "0")}`;

      // Create filename
      const filename = `${componentName}_${timestamp}.png`;

      // Create a link element to trigger download
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = filename;
      link.style.display = "none";

      // Add to document, click to download, then remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (debug) {
        console.log(`Image saved as ${filename}`);
      }

      // Note: This will prompt a download in the browser
      // For server-side saving, you would need a backend API endpoint
    } catch (err) {
      console.error("Error saving image to Assets:", err);
    }
  };

  useEffect(() => {
    // If shouldRasterize is false, don't do anything
    if (!shouldRasterize) {
      if (debug) console.log("Rasterization disabled via shouldRasterize prop");
      return;
    }

    // Function to check dimensions and rasterize
    const checkAndRasterize = () => {
      setIsProcessing(true); // Start processing
      if (!containerRef.current) {
        if (debug) console.log("Container ref is null, cannot rasterize");
        setIsProcessing(false); // End processing if error
        return;
      }

      // Get dimensions using our helper function
      const dims = getDimensions();

      if (!dims) {
        // No valid dimensions found, retry if we haven't hit the limit
        if (attempts < maxRetries) {
          const nextAttempt = attempts + 1;
          if (debug)
            console.log(
              `Element has zero dimensions, retrying (${nextAttempt}/${maxRetries})...`
            );
          setAttempts(nextAttempt);

          // Exponential backoff for retries (500ms, 1000ms, 2000ms, etc.)
          const backoffDelay = retryDelay * Math.pow(1.5, attempts);
          setTimeout(checkAndRasterize, backoffDelay);
          return;
        } else {
          if (debug)
            console.log(
              "Element still has zero dimensions after max attempts, skipping rasterization"
            );
          setError(
            new Error("Element has zero dimensions after multiple attempts")
          );
          setIsProcessing(false); // End processing on error
          return;
        }
      }

      // We have valid dimensions, proceed with rasterization
      setDimensions(dims);

      // Pre-process the DOM to handle gradients and other special elements
      const element = containerRef.current;

      // Process gradients before rasterizing
      const processGradients = () => {
        // Store original styles to restore later
        const originalStyles = new Map();

        // Find all elements with gradients
        const elementsWithGradients = element.querySelectorAll(
          '[style*="gradient"], [class*="gradient"]'
        );

        if (debug && elementsWithGradients.length > 0) {
          console.log(
            `Found ${elementsWithGradients.length} elements with gradients`
          );
        }

        // Process each element with a gradient
        elementsWithGradients.forEach((el, index) => {
          if (el instanceof HTMLElement) {
            // Store original styles
            originalStyles.set(el, {
              background: el.style.background,
              backgroundImage: el.style.backgroundImage,
              className: el.className,
            });

            // Replace gradient with a solid color temporarily
            // This avoids the "non-finite" error in html2canvas
            const solidColor = "rgba(128, 128, 128, 0.5)"; // Semi-transparent gray
            el.style.background = solidColor;
            el.style.backgroundImage = "none";

            // Remove gradient-related classes temporarily
            if (el.className.includes("gradient")) {
              el.className = el.className
                .split(" ")
                .filter((cls) => !cls.includes("gradient"))
                .join(" ");
            }

            if (debug) {
              console.log(`Processed gradient element ${index + 1}`);
            }
          }
        });

        // Return a function to restore the original styles
        return () => {
          originalStyles.forEach((styles, el) => {
            if (el instanceof HTMLElement) {
              el.style.background = styles.background;
              el.style.backgroundImage = styles.backgroundImage;
              el.className = styles.className;
            }
          });

          if (debug && originalStyles.size > 0) {
            console.log(
              `Restored ${originalStyles.size} elements with gradients`
            );
          }
        };
      };

      // Ensure all images are loaded
      const waitForImages = () => {
        return new Promise<void>((resolve) => {
          const images = element.querySelectorAll("img");
          if (!images || images.length === 0) {
            resolve();
            return;
          }

          let loadedCount = 0;
          const totalImages = images.length;

          const checkAllLoaded = () => {
            if (loadedCount === totalImages) {
              if (debug) console.log(`All ${totalImages} images loaded`);
              resolve();
            }
          };

          images.forEach((img) => {
            if (img.complete) {
              loadedCount++;
              checkAllLoaded();
            } else {
              img.onload = () => {
                loadedCount++;
                checkAllLoaded();
              };
              img.onerror = () => {
                loadedCount++;
                if (debug) console.warn("Image failed to load:", img.src);
                checkAllLoaded();
              };
            }
          });
        });
      };

      // Process gradients
      const restoreGradients = processGradients();

      // Wait for images to load, then rasterize
      waitForImages().then(() => {
        try {
          if (!containerRef.current) return;
          html2canvas(containerRef.current, {
            scale: quality,
            useCORS: true,
            allowTaint: true,
            backgroundColor: null,
            logging: debug,
            width: dims.width,
            height: dims.height,
            onclone: (documentClone) => {
              const clonedElement = documentClone.querySelector(
                '[data-rasterize="true"]'
              );
              if (clonedElement && clonedElement instanceof HTMLElement) {
                // Process gradients in the clone instead of the original
                const elementsWithGradients = clonedElement.querySelectorAll(
                  '[style*="gradient"], [class*="gradient"]'
                );
                elementsWithGradients.forEach((el, index) => {
                  if (el instanceof HTMLElement) {
                    // Store original styles
                    const originalStyles = {
                      background: el.style.background,
                      backgroundImage: el.style.backgroundImage,
                      className: el.className,
                    };

                    // Replace gradient with a solid color temporarily
                    // This avoids the "non-finite" error in html2canvas
                    const solidColor = "rgba(128, 128, 128, 0.5)"; // Semi-transparent gray
                    el.style.background = solidColor;
                    el.style.backgroundImage = "none";

                    // Remove gradient-related classes temporarily
                    if (el.className.includes("gradient")) {
                      el.className = el.className
                        .split(" ")
                        .filter((cls) => !cls.includes("gradient"))
                        .join(" ");
                    }

                    if (debug) {
                      console.log(`Processed gradient element ${index + 1}`);
                    }
                  }
                });

                // Preserve pseudo-elements by converting them to actual elements
                if (containerRef.current) {
                  const style = window.getComputedStyle(
                    containerRef.current,
                    ":before"
                  );
                  if (style.content !== "none" && style.content !== "") {
                    const beforeElement = documentClone.createElement("div");
                    beforeElement.style.position = "absolute";
                    beforeElement.style.top = "0";
                    beforeElement.style.left = "0";
                    beforeElement.style.width = "100%";
                    beforeElement.style.height = "100%";
                    beforeElement.style.background = style.background;
                    beforeElement.style.borderRadius = style.borderRadius;
                    beforeElement.style.opacity = style.opacity;
                    beforeElement.style.zIndex = style.zIndex;
                    clonedElement.appendChild(beforeElement);
                  }

                  const afterStyle = window.getComputedStyle(
                    containerRef.current,
                    ":after"
                  );
                  if (
                    afterStyle.content !== "none" &&
                    afterStyle.content !== ""
                  ) {
                    const afterElement = documentClone.createElement("div");
                    afterElement.style.position = "absolute";
                    afterElement.style.top = "0";
                    afterElement.style.left = "0";
                    afterElement.style.width = "100%";
                    afterElement.style.height = "100%";
                    afterElement.style.background = afterStyle.background;
                    afterElement.style.borderRadius = afterStyle.borderRadius;
                    afterElement.style.opacity = afterStyle.opacity;
                    afterElement.style.zIndex = afterStyle.zIndex;
                    afterElement.style.border = afterStyle.border;
                    clonedElement.appendChild(afterElement);
                  }
                }
              }
            },
          })
            .then((canvas) => {
              const dataUrl = canvas.toDataURL("image/png");
              setImageSrc(dataUrl);
              setIsRasterized(true);
              setError(null);

              // Save the image if saveToAssets is true
              saveImageToAssets(dataUrl);

              // Small delay before removing original to ensure smooth transition
              setTimeout(() => {
                if (removeOriginalFromDOM) {
                  setOriginalRemoved(true);
                }
                setIsProcessing(false); // End processing
              }, 100);
            })
            .catch((err) => {
              console.error("Error rasterizing element:", err);
              setError(err instanceof Error ? err : new Error(String(err)));
              setIsRasterized(false);
              setIsProcessing(false); // End processing on error
            });
        } catch (err) {
          console.error("Unexpected error during rasterization:", err);
          setError(err instanceof Error ? err : new Error(String(err)));
          setIsRasterized(false);
          setIsProcessing(false); // End processing on error
        }
      });
    };

    // Set up a MutationObserver to detect when the element is fully rendered
    let observer: MutationObserver | null = null;

    if (containerRef.current) {
      observer = new MutationObserver((mutations) => {
        // Check if the element has images that need to load
        const images = containerRef.current?.querySelectorAll("img");
        let allImagesLoaded = true;

        if (images && images.length > 0) {
          images.forEach((img) => {
            if (!img.complete) {
              allImagesLoaded = false;
            }
          });

          // If not all images are loaded, wait for them
          if (!allImagesLoaded) return;
        }

        // Check if dimensions are available
        const dims = getDimensions();
        if (!dims) return; // Wait until dimensions are available

        // Disconnect the observer once we're ready to rasterize
        observer?.disconnect();

        // Wait a bit more to ensure everything is rendered
        setTimeout(checkAndRasterize, 100);
      });

      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }

    // Wait for children to fully render before capturing
    const timer = setTimeout(() => {
      // If the observer hasn't triggered by now, disconnect it and proceed
      if (observer) {
        observer.disconnect();
      }
      checkAndRasterize();
    }, rasterizeDelay);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [
    rasterizeDelay,
    quality,
    debug,
    attempts,
    childWidth,
    childHeight,
    shouldRasterize,
    forceWidth,
    forceHeight,
    maxRetries,
    saveToAssets,
    componentName,
    removeOriginalFromDOM,
  ]);

  // If there was an error rasterizing, show the original content
  if (error && debug) {
    console.error("Rasterization error:", error);
  }

  // If shouldRasterize is false, just render the children
  if (!shouldRasterize) {
    return (
      <div className={className} style={{ position: "relative" }}>
        {children}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Original content with opacity transition */}
      {(!isRasterized ||
        error ||
        !removeOriginalFromDOM ||
        !originalRemoved) && (
        <div
          ref={containerRef}
          className={`${className} transition-opacity duration-200`}
          style={{
            position: "relative",
            opacity: isProcessing ? 0 : 1, // Fade out during processing
          }}
          data-rasterize="true"
        >
          {children}
        </div>
      )}

      {/* Rasterized image with opacity transition */}
      {imageSrc && !error && (
        <div
          className={`${className} ${childClassName} transition-opacity duration-200`}
          style={{
            ...childStyle,
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: forceWidth
              ? `${forceWidth}px`
              : childWidth || `${dimensions.width}px`,
            height: forceHeight
              ? `${forceHeight}px`
              : childHeight || `${dimensions.height}px`,
            position: "absolute",
            top: 0,
            left: 0,
            opacity: isProcessing ? 0 : 1, // Fade in after processing
          }}
          aria-label="Rasterized content"
        />
      )}

      {/* Processing overlay */}
      {isProcessing && (
        <div
          className="absolute inset-0 bg-transparent"
          style={{
            zIndex: 1000,
          }}
        />
      )}
    </div>
  );
};

export default RasterizeComponent;
