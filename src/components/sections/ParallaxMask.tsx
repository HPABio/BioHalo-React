import React, { useState, useEffect } from 'react';
import droplets1 from '@/assets/images/Droplets1.jpg'

export function ParallaxMask() {
  // Track scroll position in state
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Full‐viewport background with parallax effect
  const backgroundStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundImage: droplets1.src,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Simple parallax: shift background as user scrolls
    transform: `translateY(${scrollY * 0.5}px)`,
    zIndex: -1, // keep it behind other elements
  };

  // Foreground mask div to reveal the background in a pattern
  const maskStyle: React.CSSProperties = {
    width: '80vw',
    height: '400px',
    margin: '150vh auto', // positioned down the page so you can scroll to it
    backgroundColor: 'white',

    // Use CSS mask to reveal a portion of the background
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
    maskSize: 'contain',
    maskRepeat: 'no-repeat',

    // For better cross‐browser support, also add: -webkit-mask-image, etc.
  };

  return (
    <div style={{ height: '300vh', position: 'relative' }}>
      {/* Full‐viewport background */}
      <div style={backgroundStyle} />

      {/* Masked foreground element */}
      <div style={maskStyle}>
        <h1 style={{ textAlign: 'center', paddingTop: '150px' }}>
          Scroll Mask Effect
        </h1>
      </div>
    </div>
  );
}
