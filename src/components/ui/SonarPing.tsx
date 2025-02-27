'use client'

interface SonarPingProps {
  color?: string;
  size?: number;
  animationDuration?: number;
  interval?: number;
}

export function SonarPing({ 
  color = '#E10C73', 
  size = 35,
  animationDuration = 3,
  interval = 0
}: SonarPingProps) {
  return (
    <div 
      className="absolute inset-0 z-10"
      style={{
        '--ping-color': color,
        '--ping-size': `${size}px`,
        '--animation-duration': `${animationDuration}s`,
        '--animation-delay': `${interval}s`,
      } as React.CSSProperties}
    >
      <style jsx>{`
        @keyframes smallPulse {
          from {
            transform: scale(0.75);
            opacity: 0.8;
          }
          95%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes largePulse {
          from {
            transform: scale(0.75);
            opacity: 0.6;
          }
          to {
            transform: scale(3.5);
            opacity: 0;
          }
        }

        div:before,
        div:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 50%;
          background: transparent;
          box-sizing: border-box;
          border: var(--ping-color) 1px solid;
          z-index: 1;
        }

        div:before {
          animation: smallPulse var(--animation-duration) var(--animation-delay) ease-out infinite;
        }

        div:after {
          animation: largePulse var(--animation-duration) var(--animation-delay) ease-out infinite;
        }
      `}</style>
    </div>
  )
} 