import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex space-x-6">
        <Link to="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">Home</Link>
        <Link to="/about" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">About</Link>
        <Link to="/services" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">Services</Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/contact" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">Contact</Link>
        <Link to="/blog" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
