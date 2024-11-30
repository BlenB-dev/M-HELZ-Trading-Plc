import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { ExportPro } from "../constants"; // Assuming you have an ExportPro array similar to ImportPro

const ExportProducts = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-secondary min-h-screen text-white">
      {/* Header/Navbar */}

      <header className="fixed top-0 left-0 w-full bg-primary z-50 shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">M HELZ</div>

          {/* Desktop Navigation Links */}
          <ul className="hidden sm:flex space-x-6 text-lg text-white">
            <li className="hover:underline cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/Aboutus">About Us</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/Mission">Our Mission</Link>
            </li>

            {/* Dropdown */}
            <div className="relative">
              <li
                className="hover:underline cursor-pointer flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown on click
              >
                Our Services
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </li>

              {isDropdownOpen && (
                <ul
                  className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg"
                  onMouseLeave={() => setIsDropdownOpen(false)} // Close on mouse leave
                >
                  <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                    <a href="/ImportProducts">Import</a>
                  </li>
                  <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                    <a href="/ExportProducts">Export</a>
                  </li>
                </ul>
              )}
            </div>

            <li className="hover:underline cursor-pointer">
              <Link to="/MoreContactus">Contact Us</Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="sm:hidden flex items-center cursor-pointer text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="sm:hidden bg-primary text-white text-lg space-y-4 py-4 px-6">
            <li
              className="hover:underline cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <Link to="/Aboutus">About Us</Link>
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <Link to="/Mission">Our Mission</Link>
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <Link to="/Service">Our Services</Link>
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <Link to="/MoreContactus">Contact Us</Link>
            </li>
          </ul>
        )}
      </header>

      {/* Content Section */}
      <section className="py-12 mt-10 px-6 max-w-7xl mx-auto">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            What We Export
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            M HELZ PLC exports a variety of top-quality products, ensuring
            reliable services and partnerships across the globe.
          </p>
        </div>

        {/* Export Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ExportPro.map((Export) => (
            <div
              key={Export.id}
              className="flex flex-col items-center bg-secondary rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={Export.img}
                className="w-full h-[200px] object-contain mb-4 rounded-md"
                alt={Export.name}
              />
              <h3 className="text-lg font-bold mt-10 text-white">
                {Export.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ExportProducts;
