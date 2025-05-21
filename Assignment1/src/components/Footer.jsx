import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-medium">© 2025 Talha's Web. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="hover:text-blue-400 transition">Facebook</a>
          <a href="#" className="hover:text-pink-400 transition">Instagram</a>
          <a href="#" className="hover:text-blue-300 transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
