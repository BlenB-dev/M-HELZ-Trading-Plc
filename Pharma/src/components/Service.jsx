import React, { useState } from "react";
import { FaPills, FaRegBuilding, FaChartLine } from "react-icons/fa";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Service = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col justify-between text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?health,medical')", // Replace with your desired image URL
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Add overlay effect
        backgroundBlendMode: "overlay",
      }}
    >
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
      <div>
        {/* Header Section */}
        <div className="text-center mt-20 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Our Services
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore the wide range of services we offer to enhance healthcare
            and support pharmaceutical growth in Ethiopia.
          </p>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-12">
          {/* Service 1 */}
          <div className="relative bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div
              className="absolute inset-0 opacity-20 bg-cover rounded-lg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/400x400/?medicine,health')",
              }}
            ></div>
            <div className="relative z-10 text-center">
              <FaPills className="text-5xl text-blue-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">
                Importation of Pharmaceuticals
              </h3>
              <p className="text-gray-400">
                Sourcing a wide range of medications (including generics and
                branded products), medical equipment, devices, instruments, and
                supplies.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="relative bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div
              className="absolute inset-0 opacity-20 bg-cover rounded-lg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/400x400/?regulation,compliance')",
              }}
            ></div>
            <div className="relative z-10 text-center">
              <FaRegBuilding className="text-5xl text-yellow-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">
                Regulatory Compliance
              </h3>
              <p className="text-gray-400">
                Navigating the complexities of Ethiopian pharmaceutical
                regulations to ensure smooth import processes.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="relative bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div
              className="absolute inset-0 opacity-20 bg-cover rounded-lg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/400x400/?market,intelligence')",
              }}
            ></div>
            <div className="relative z-10 text-center">
              <FaChartLine className="text-5xl text-green-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
              <p className="text-gray-400">
                Providing valuable market intelligence to our partners for
                informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Service;
