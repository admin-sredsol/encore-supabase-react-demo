import Features from '../components/Features';
import About from '../components/About';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';

export default function LandingPage() {
  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Navigation Bar */}
        <NavBar />

        {/* Hero Section */}
        <section id="hero" className="pt-16">
          <Hero />
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 px-4 md:px-8">
          <Features />
        </section>

        {/* About Section */}
        <section id="about" className="py-12 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 px-4 md:px-8">
          <Contact />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}