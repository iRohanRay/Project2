import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-purple-600 p-4 shadow-md pl-6 pr-8 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          {/* Circular Logo Image */}
          <img
  src="/public/logo.png" 
  alt="WonderScan Logo"
  className="w-16 h-16 rounded-full object-cover mx-auto transform transition-transform duration-300 hover:scale-110 animate__animated animate__fadeIn animate__delay-1s"
  loading="lazy" 
/>

          <h1 className="text-white text-2xl font-bold">WonderScan</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white">
          <li>
            <NavLink 
              to="/" 
              className="text-xl hover:text-gray-300 active:text-yellow-300 relative group transition-all duration-300 ease-in-out"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className="text-xl hover:text-gray-300 active:text-yellow-300 relative group transition-all duration-300 ease-in-out"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact-us" 
              className="text-xl hover:text-gray-300 active:text-yellow-300 relative group transition-all duration-300 ease-in-out"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products" 
              className="text-xl hover:text-gray-300 active:text-yellow-300 relative group transition-all duration-300 ease-in-out"
            >
              3D Models
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
