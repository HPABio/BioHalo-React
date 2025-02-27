export function GridLayout() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Grid Layout Examples</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Various grid layouts demonstrating different patterns and responsive
          behaviors using CSS Grid and Flexbox.
        </p>
      </header>

      {/* Basic Grid - 3 Columns */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Basic 3-Column Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">Grid Item {item}</h3>
              <p className="text-gray-600">
                A simple grid item demonstrating basic layout structure.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Responsive Grid - Auto Fit */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Responsive Auto-Fit Grid</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-blue-100 p-6 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">
                Auto-Fit Item {item}
              </h3>
              <p className="text-gray-700">
                This grid automatically adjusts columns based on viewport width.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mixed Column Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Mixed Column Sizes</h2>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 md:col-span-4 bg-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Wide Column</h3>
            <p className="text-gray-700">
              This column spans 4 out of 6 columns on medium screens and above.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2 bg-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Narrow Column</h3>
            <p className="text-gray-700">
              This column spans 2 out of 6 columns on medium screens and above.
            </p>
          </div>
        </div>
      </section>

      {/* Grid with Featured Item */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Grid with Featured Item</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-1 bg-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Featured Item</h3>
            <p className="text-gray-700">
              This item spans multiple columns depending on screen size.
            </p>
          </div>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Regular Item {item}
              </h3>
              <p className="text-gray-700">Standard single-column grid item.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Masonry-style Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div className="bg-yellow-100 p-6 rounded-lg h-64">
              <h3 className="text-lg font-semibold">Tall Item</h3>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg h-32">
              <h3 className="text-lg font-semibold">Short Item</h3>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-yellow-100 p-6 rounded-lg h-32">
              <h3 className="text-lg font-semibold">Short Item</h3>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg h-64">
              <h3 className="text-lg font-semibold">Tall Item</h3>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-yellow-100 p-6 rounded-lg h-48">
              <h3 className="text-lg font-semibold">Medium Item</h3>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg h-48">
              <h3 className="text-lg font-semibold">Medium Item</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Grid with Nested Items */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Nested Grid</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-red-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Parent Grid Item</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-semibold">Nested Item 1</h4>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-semibold">Nested Item 2</h4>
              </div>
            </div>
          </div>
          <div className="bg-red-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Parent Grid Item</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-semibold">Nested Item 1</h4>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-semibold">Nested Item 2</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dense Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Dense Grid</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[100px]">
          <div className="bg-indigo-100 p-4 rounded-lg row-span-2">
            <h3 className="font-semibold">Tall Item</h3>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg col-span-2">
            <h3 className="font-semibold">Wide Item</h3>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <h3 className="font-semibold">Normal</h3>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg row-span-2 col-span-2">
            <h3 className="font-semibold">Large Item</h3>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <h3 className="font-semibold">Normal</h3>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <h3 className="font-semibold">Normal</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
