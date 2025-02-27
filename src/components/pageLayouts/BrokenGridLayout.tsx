export function BrokenGridLayout() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Broken Grid Layout</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A modern layout that breaks the traditional grid system to create
          visual interest and dynamic compositions.
        </p>
      </header>

      {/* Main Grid Section */}
      <div className="relative">
        {/* Large Feature */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative z-10 bg-white p-8 shadow-lg rounded-lg transform md:translate-x-12 md:translate-y-16">
            <h2 className="text-3xl font-bold mb-4">Breaking the Grid</h2>
            <p className="text-gray-600 mb-6">
              This section demonstrates how elements can overlap and break out
              of the traditional grid structure to create visual interest.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://picsum.photos/800/600"
              alt="Feature image"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Overlapping Cards */}
        <div className="grid md:grid-cols-3 gap-8 -mt-8 md:mt-0">
          <div className="bg-purple-100 p-6 rounded-lg transform hover:-translate-y-2 transition-transform">
            <h3 className="text-xl font-bold mb-2">Card One</h3>
            <p className="text-gray-600">
              This card breaks alignment with others to create visual interest.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg transform md:-translate-y-12 hover:-translate-y-14 transition-transform">
            <h3 className="text-xl font-bold mb-2">Card Two</h3>
            <p className="text-gray-600">
              Offset positioning helps break the monotony of regular grids.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg transform hover:-translate-y-2 transition-transform">
            <h3 className="text-xl font-bold mb-2">Card Three</h3>
            <p className="text-gray-600">
              Interactive elements add depth to the broken grid layout.
            </p>
          </div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid md:grid-cols-12 gap-8 mt-12">
          <div className="md:col-span-8 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Wide Section</h3>
            <p className="text-gray-600">
              This wider section creates an asymmetrical layout that draws
              attention and breaks the monotony of equal-width columns.
            </p>
          </div>
          <div className="md:col-span-4 bg-yellow-100 p-8 rounded-lg transform md:translate-y-8">
            <h3 className="text-xl font-bold mb-2">Offset Section</h3>
            <p className="text-gray-600">
              This section is offset to create visual interest.
            </p>
          </div>
        </div>

        {/* Overlapping Images */}
        <div className="relative mt-24 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative z-10">
              <img
                src="https://picsum.photos/600/400"
                alt="Overlapping image 1"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-600 rounded-full" />
            </div>
            <div className="relative mt-12 md:mt-24">
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-600 rounded-full" />
              <img
                src="https://picsum.photos/601/400"
                alt="Overlapping image 2"
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Text Sections with Offset */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="transform md:-translate-y-8">
            <h3 className="text-xl font-bold mb-2">Section One</h3>
            <p className="text-gray-600">
              Offset text sections create rhythm and flow in the layout.
            </p>
          </div>
          <div className="transform md:translate-y-8">
            <h3 className="text-xl font-bold mb-2">Section Two</h3>
            <p className="text-gray-600">
              Each section moves independently to break the grid.
            </p>
          </div>
          <div className="transform md:-translate-y-4">
            <h3 className="text-xl font-bold mb-2">Section Three</h3>
            <p className="text-gray-600">
              The final section completes the broken grid pattern.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
