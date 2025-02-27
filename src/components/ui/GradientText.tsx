'use client'
const gradient1 = 'bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple-500 via-teal-500 to-red-500'

export function GradientText({ 
  text, 
  className = 'bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400',
  blur = true
}: { 
  text: string; 
  className?: string;
  blur?: boolean; //default is false
}) {
  return (
    <div className="relative">
      {blur && (
        <span 
          className={`absolute inset-0 bg-clip-text text-transparent ${className} blur-sm`}
          aria-hidden="true"
        >
          {text}
        </span>
      )}
      <span className={`relative bg-clip-text text-transparent ${className}`}>
        {text}
      </span>
    </div>
  );
}
