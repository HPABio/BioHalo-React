import * as React from "react";

const BioHaloLogoRingOnly = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Ebene_1"
    viewBox="0 0 179.04 147.47"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <filter id="blurFilter">
        <feGaussianBlur stdDeviation="8">
          <animate
            attributeName="stdDeviation"
            values="8;0"
            dur="1.5s"
            begin="0s"
          />
        </feGaussianBlur>
      </filter>
      <style>
        {`
          .BioHaloLogoRingOnly-cls-3 {
            fill: #305464;
            animation: fadeIn 1s ease-out forwards, removeBlur 1.5s forwards;
          }
          
          @keyframes drawRing {
            to {
              stroke-dashoffset: 0;
            }
          }
          
          @keyframes slideIn {
            from {
              transform: translateX(-100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes removeBlur {
            0%, 99% {
              filter: url(#blurFilter);
            }
            100% {
              filter: none;
            }
          }
          
          .ring {
            stroke: #305464;
            stroke-width: 2;
            fill: none;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawRing 2s ease-out forwards;
          }
          
          .circle {
            animation: slideIn 1s ease-out 1s forwards, removeBlur 1.5s forwards;
            opacity: 0;
          }
          
          .mint-shape {
            animation: fadeIn 1s ease-out 2s forwards, removeBlur 1.5s forwards;
            opacity: 0;
          }
        `}
      </style>
    </defs>

    <circle
      className="circle"
      cx={44.5}
      cy={72.2}
      r={44.5}
      style={{
        fill: "#ca3072",
      }}
    />
    <path
      className="mint-shape"
      d="M50.5 73.74c0 14.58 5.74 27.84 15.06 37.67 13.96-7.51 23.45-22.25 23.45-39.21S80.4 41.9 67.52 34.1c-10.47 9.99-17.01 24.06-17.01 39.63Z"
      style={{
        fill: "#c2dee0",
      }}
    />
    <path
      d="M105.3 0C81.99 0 61.18 10.88 47.66 27.82c-10.06 12.61-16.1 28.56-16.1 45.91 0 16.01 5.15 30.84 13.85 42.94 13.4 18.63 35.24 30.8 59.89 30.8 40.66 0 73.74-33.08 73.74-73.74S145.97 0 105.3 0Zm0 128.54c-15.64 0-29.76-6.59-39.75-17.13-9.32-9.83-15.06-23.09-15.06-37.67 0-15.58 6.54-29.64 17.01-39.63 9.84-9.39 23.15-15.17 37.8-15.17 30.22 0 54.81 24.59 54.81 54.81s-24.59 54.81-54.81 54.81Z"
      className="BioHaloLogoRingOnly-cls-3"
    />
    {/*     <path
      className="ring"
      d="M31.57 73.74C31.57 33.08 64.64 0 105.3 0s73.74 33.08 73.74 73.74-33.08 73.74-73.74 73.74-73.73-33.08-73.73-73.74m128.54 0c0-30.22-24.59-54.81-54.81-54.81S50.49 43.52 50.49 73.74s24.58 54.81 54.81 54.81 54.81-24.59 54.81-54.81"
    /> */}
  </svg>
);

export default BioHaloLogoRingOnly;
