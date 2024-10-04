import React from "react";

const Header = () => {
  return (
    <header className="bg-white w-full shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-purple-600 text-2xl font-bold">botika</div>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-purple-600">
            Home
          </a>
          <a href="#shop" className="text-gray-600 hover:text-purple-600">
            Shop
          </a>
          <a href="#about" className="text-gray-600 hover:text-purple-600">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-purple-600">
            Contact
          </a>
        </nav>
        {/* Call-to-Action Button */}
        <a
          href="#get-started"
          className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Get Started
        </a>
        {/* Mobile Menu Button */}
        <div className="md:hidden text-purple-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
