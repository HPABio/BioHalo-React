export function PfasPolution({ className }: { className?: string }) {
  return (
    <section className={`relative h-screen w-full flex items-center justify-center bg-gray-900 ${className || ''}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">PFAS Pollution</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Understanding the impact of PFAS pollution on our environment and
          health...
        </p>
        {/* Add more content as needed */}
      </div>
    </section>
  );
}
