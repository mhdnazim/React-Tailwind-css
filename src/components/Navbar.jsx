import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-extrabold tracking-wide italic">
          MyWebsite
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="#home"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors"
          >
            Services
          </a>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors"
            >
              More
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded z-50">
                <li>
                  <a
                    href="#profile"
                    className="block px-4 py-2 text-blue-700 hover:bg-gray-100 transition-colors"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#setting"
                    className="block px-4 py-2 text-blue-700 hover:bg-gray-100 transition-colors"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#logout"
                    className="block px-4 py-2 text-blue-700 hover:bg-gray-100 transition-colors"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-blue-500 bg-opacity-90 md:hidden transform transition-transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}
        >
          <div className="flex flex-col items-center py-8 space-y-4">
            <a
              href="#home"
              className="text-white text-2xl hover:bg-blue-700 px-4 py-2 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white text-2xl hover:bg-blue-700 px-4 py-2 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-white text-2xl hover:bg-blue-700 px-4 py-2 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white text-2xl hover:bg-blue-700 px-4 py-2 rounded transition-colors"
              >
                More
              </button>
              {dropdownOpen && (
                <ul className="absolute mt-2 w-40 bg-white shadow-lg rounded z-50">
                  <li>
                    <a
                      href="#profile"
                      className="block px-4 py-2 text-blue-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#setting"
                      className="block px-4 py-2 text-blue-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#logout"
                      className="block px-4 py-2 text-blue-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
