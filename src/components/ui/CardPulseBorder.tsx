"use client";

interface CardPulseBorderProps {
  children?: React.ReactNode;
  className?: string;
}

const CardPulseBorder = ({
  children,
  className = "",
}: CardPulseBorderProps) => {
  return (
    <div className={`relative h-48 w-48 ${className}`}>
      <div className="absolute top-0 flex w-full justify-center">
        <div className="left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] [animation:border-pulse_3s_infinite_alternate] transition-all duration-1000" />
      </div>
      <div className="flex h-full items-center justify-center rounded-md border border-gray-800 bg-gradient-to-b from-gray-950 to-black px-3 py-2">
        {children || <p className="text-sm text-gray-200">Card Content</p>}
      </div>
      <style jsx>{`
        @keyframes border-pulse {
          from {
            width: 10px;
            opacity: 0;
          }
          to {
            width: 100px;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CardPulseBorder;
