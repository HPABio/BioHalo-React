export function ContentLayout() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Article Header */}
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-6">
          The Art of Content Layout Design
        </h1>
        <div className="flex items-center text-gray-600 mb-8">
          <img
            src="https://picsum.photos/32/32"
            alt="Author"
            className="w-8 h-8 rounded-full mr-3"
          />
          <span className="mr-4">By John Doe</span>
          <span className="mr-4">•</span>
          <span>January 15, 2024</span>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn how to create engaging and readable content layouts that keep
          your users coming back for more. This comprehensive guide covers
          everything from typography to spacing.
        </p>
      </header>

      {/* Main Content */}
      <article className="prose prose-lg max-w-none">
        <h2>Introduction to Content Layout</h2>
        <p>
          Content layout is more than just arranging text on a page. It's about
          creating a visual hierarchy that guides readers through your content
          while maintaining their interest and engagement.
        </p>

        {/* Featured Quote */}
        <blockquote className="border-l-4 border-blue-500 pl-4 my-8">
          <p className="text-xl italic">
            "Good content layout is invisible. Great content layout enhances the
            message."
          </p>
          <cite className="text-gray-600">— Design Expert</cite>
        </blockquote>

        <h3>Key Principles of Content Layout</h3>
        <ul>
          <li>Establish clear visual hierarchy</li>
          <li>Maintain consistent spacing</li>
          <li>Use appropriate typography</li>
          <li>Consider content flow</li>
        </ul>

        {/* Image with Caption */}
        <figure className="my-8">
          <img
            src="https://picsum.photos/800/400"
            alt="Content layout example"
            className="w-full rounded-lg"
          />
          <figcaption className="text-center text-gray-600 mt-2">
            An example of effective content layout in action
          </figcaption>
        </figure>

        <h3>Typography in Content Layout</h3>
        <p>
          Typography plays a crucial role in content layout. The right font
          choices, sizes, and spacing can make your content more readable and
          engaging.
        </p>

        {/* Example Typography Styles */}
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h4 className="font-bold mb-4">Typography Examples</h4>
          <div className="space-y-4">
            <p className="text-4xl">Large Heading (40px)</p>
            <p className="text-2xl">Medium Heading (24px)</p>
            <p className="text-lg">Body Text (18px)</p>
            <p className="text-sm">Small Text (14px)</p>
          </div>
        </div>

        <h3>Content Sections and Spacing</h3>
        <p>
          Proper spacing between elements is crucial for readability. Here's an
          example of different content sections with appropriate spacing:
        </p>

        {/* Content Sections Example */}
        <div className="space-y-8 my-8">
          <section className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-bold mb-2">Section One</h4>
            <p>
              This section demonstrates how content can be grouped together with
              appropriate padding and background colors.
            </p>
          </section>

          <section className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-bold mb-2">Section Two</h4>
            <p>
              Different background colors can help distinguish between different
              types of content or sections.
            </p>
          </section>
        </div>

        <h3>Interactive Elements</h3>
        <p>
          Interactive elements should be clearly distinguishable and easy to
          use:
        </p>

        {/* Interactive Elements Example */}
        <div className="flex flex-wrap gap-4 my-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Primary Button
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Secondary Button
          </button>
          <a href="#" className="text-blue-600 hover:underline">
            Text Link
          </a>
        </div>

        <h3>Conclusion</h3>
        <p>
          Remember that good content layout is about finding the right balance
          between aesthetics and functionality. Keep testing and iterating to
          find what works best for your audience.
        </p>
      </article>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
              ← Previous Article
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
              Next Article →
            </button>
          </div>
          <div className="flex space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
