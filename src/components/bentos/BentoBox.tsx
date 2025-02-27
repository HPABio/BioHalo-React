"use client";

type BentoBoxProps = {
  title?: string;
  subtitle?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  children?: React.ReactNode;
};

export const BentoBox = ({
  title,
  subtitle,
  text,
  buttonText,
  buttonLink,
  className,
  children,
}: BentoBoxProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-6 flex flex-col ${className}`}
    >
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {subtitle && (
        <h4 className="text-lg font-medium text-gray-600 mb-2">{subtitle}</h4>
      )}
      {text && <p className="text-gray-500 mb-4">{text}</p>}
      {children}
      {buttonText && buttonLink && (
        <a
          href={buttonLink}
          className="mt-auto inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors self-start"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};
