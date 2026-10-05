import React from "react";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-gray-900 tracking-tight">
          TechMart
        </a>

        {/* Navigation Links (Hidden on mobile for minimalism) */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors text-[20px]"
          >
            Home
          </a>
          <a
            href="#shop"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors text-[20px]"
          >
            Shop
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors text-[20px]"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors text-[20px]"
          >
            Contact
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2">
            Sign In
          </button>
          <button className="bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
