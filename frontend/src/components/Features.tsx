export default function Features() {
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Interactive Applets
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Explore dynamic and interactive applets for learning and teaching.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Customizable Tools
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Customize tools and settings to fit your specific needs.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Seamless Integration
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Integrate GeoGebra applets into your projects effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}