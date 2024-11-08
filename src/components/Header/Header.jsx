import React, { useState } from 'react';
import { MenuIcon, XIcon, UserCircleIcon, SearchIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between bg-blue-600 text-white p-4 shadow-lg">
        {/* Logo */}
        <div className="text-2xl font-bold">
            Pioneer Learning Academy
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white text-gray-600 rounded-full px-3 py-1 w-1/3">
          <SearchIcon className="h-5 w-5 mr-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-full focus:outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <UserCircleIcon className="h-8 w-8 cursor-pointer" />

          {/* Hamburger Menu Icon (visible on all screen sizes) */}
          <button onClick={toggleMenu} className="focus:outline-none">
            <MenuIcon className="h-8 w-8" />
          </button>
        </div>
      </header>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-blue-700 text-white shadow-2xl w-64 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <XIcon className="h-8 w-8 text-white" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-4 p-4">
          <a href="#home" className="text-lg font-semibold hover:text-blue-300">
            Home
          </a>
          <a href="#about" className="text-lg font-semibold hover:text-blue-300">
            About Us
          </a>
          <a href="#services" className="text-lg font-semibold hover:text-blue-300">
            Services
          </a>
          <a href="#contact" className="text-lg font-semibold hover:text-blue-300">
            Contact
          </a>
        </nav>
      </div>

      {/* Backdrop (for closing menu by clicking outside) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
