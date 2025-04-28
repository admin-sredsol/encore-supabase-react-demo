import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export default function NavBar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="https://assets-cdn.sredsol.com/logos/logo-new.svg"
            alt="Logo"
            className="h-9 w-9"
          />
          <span className="hidden md:block text-lg font-bold text-blue-600 dark:text-blue-400">
            Math Explorations
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Buttons */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex space-x-0 items-center`}
        >
          <button
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="px-2 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
          >
            Features
          </button>
          <button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="px-2 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
          >
            About
          </button>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="px-2 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
          >
            Contact
          </button>
          <button
            onClick={() => {
              navigate('/app');
              setIsMenuOpen(false);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500"
          >
            Login
          </button>
          {/* <button
            onClick={() => {
              toggleTheme();
              setIsMenuOpen(false);
            }}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button> */}
        </div>
      </div>
    </nav>
  );
}