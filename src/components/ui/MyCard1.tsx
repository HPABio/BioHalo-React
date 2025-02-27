"use client"; 
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; 

export function MyCard1() {
  return (
    <main
      className=""
    >
      <div
        className="bg-gradient-to-b from-gray-100 to-gray-200 p-8 rounded-lg border border-gray-300/50 shadow-lg w-auto max-w-[90vw] mx-auto"
      >
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>

        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"
        ></div>
        <div
          className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center"
        >
          {/* Left side: Text content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 z-10">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-blue-400 via-blue-100 to-blue-600 text-transparent bg-clip-text relative z-[100]"
            >
              Innovative Solutions
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
              Transforming Ideas into Reality
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Discover cutting-edge technologies and services that propel your
              business into the future. We're here to turn your vision into success.
            </p>
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Right side: Overlapping cards */}
          <div className="lg:w-1/2 relative h-96">
            <Card
              className="absolute top-0 left-0 w-64 h-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-filter backdrop-blur-lg border border-white/20 rounded-xl shadow-neon transform -rotate-6 z-20"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Innovation
                </h3>
                <p className="text-blue-200">
                  Pushing boundaries and exploring new frontiers in technology.
                </p>
              </div>
            </Card>
            <Card
              className="absolute top-5 left-20 w-64 h-80 bg-gradient-to-br from-white/15 to-white/10 backdrop-filter backdrop-blur-lg border border-white/30 rounded-xl shadow-neon transform rotate-3 z-10"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Creativity
                </h3>
                <p className="text-blue-200">
                  Bringing imagination to life through cutting-edge solutions.
                </p>
              </div>
            </Card>
            <Card
              className="absolute top-10 left-40 w-64 h-80 bg-gradient-to-br from-white/20 to-white/15 backdrop-filter backdrop-blur-lg border border-white/40 rounded-xl shadow-neon"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Excellence
                </h3>
                <p className="text-blue-200">
                  Delivering top-notch quality in every project we undertake.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyCard1;
