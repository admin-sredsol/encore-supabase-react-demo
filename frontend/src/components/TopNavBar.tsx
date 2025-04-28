import { useState } from 'react';
import Header from './Header';

interface TopNavBarProps {
  userEmail: string;
  onSignOut: () => void;
}

export default function TopNavBar({ userEmail, onSignOut }: TopNavBarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img
          src="https://assets-cdn.sredsol.com/logos/logo-new-dark.svg"
          alt="Logo"
          className="h-8 w-8"
        />
        <span className="text-lg font-bold">Math Explorations</span>
      </div>

      {/* User Avatar Section */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img
            src="https://assets-cdn.sredsol.com/icons/icon.png" // Replace with the user's avatar URL
            alt="User Avatar"
            className="h-10 w-10 rounded-full border-2 border-white"
          />
          <span className="hidden sm:block">{userEmail}</span>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10">
            <Header userEmail={userEmail} onSignOut={onSignOut} />
          </div>
        )}
      </div>
    </nav>
  );
}