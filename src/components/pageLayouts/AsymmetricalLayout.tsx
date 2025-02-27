export function AsymmetricalLayout() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main content - takes up 2 columns */}
        <div className="md:col-span-2 bg-blue-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Main Content</h2>
          <p className="text-gray-700">
            This is the main content area that spans two columns on larger
            screens. It contains the primary information and takes up more
            visual space.
          </p>
        </div>

        {/* Sidebar content - takes up 1 column */}
        <div className="space-y-4">
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Sidebar Section 1</h3>
            <p className="text-gray-600">
              Supporting content that adds context.
            </p>
          </div>

          <div className="bg-pink-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Sidebar Section 2</h3>
            <p className="text-gray-600">
              Additional information or related links.
            </p>
          </div>
        </div>

        {/* Full width section */}
        <div className="md:col-span-3 bg-green-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Full Width Section</h2>
          <p className="text-gray-700">
            This section spans the full width of the container, creating visual
            interest and breaking up the asymmetrical layout above.
          </p>
        </div>

        {/* Two unequal columns */}
        <div className="md:col-span-1 bg-yellow-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Narrow Column</h3>
          <p className="text-gray-600">
            A smaller section for less important content.
          </p>
        </div>
 
        <div className="md:col-span-2 bg-red-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Wide Column</h2>
          <p className="text-gray-700">
            Another wide section that demonstrates the asymmetrical nature of
            the layout.
          </p>
        </div>
      </div>
    </div>
  );
}
