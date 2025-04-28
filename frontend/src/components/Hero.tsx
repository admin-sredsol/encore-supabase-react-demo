export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>

      {/* Overlay for Content */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Welcome to Math Explorations
        </h1>
        <p className="mb-6 text-lg text-white max-w-2xl drop-shadow-lg">
          Explore mathematics in a dynamic and interactive way. Join us to discover the beauty of math through engaging activities and resources.
        </p>
        <img
          src="/assets/hero-image.svg" // Replace with your actual image path
          alt="Hero Illustration"
          className="w-3/4 max-w-lg"
        />
      </div>
    </header>
  );
}