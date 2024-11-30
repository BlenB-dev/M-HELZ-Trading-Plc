import React, { useState } from "react";
import {
  FaRegBuilding,
  FaGlobeAfrica,
  FaCheckCircle,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { layout } from "../style";
import Footer from "./Footer";
import { Link } from "react-router-dom"; // Import Footer component

const Aboutus = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-secondary text-white">
      {/* Navbar Adjustment */}
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

      {/* About Us Header with Icon */}
      <div className="flex flex-col items-center text-center mt-2 mb-12 px-4">
        <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
          <FaRegBuilding className="text-4xl sm:text-5xl text-yellow-500 animate-pulse mt-[90px]" />
          <h1 className="text-2xl mt-[90px] text-gradient sm:text-3xl lg:text-4xl font-bold">
            About Us
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative py-10 px-4 sm:px-8 lg:px-16">
        <div className="flex animate-slide justify-center">
          <img
            src="/image4.jpg"
            alt="About Us"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* About Us Section */}
      <section
        className={`${layout.section} text-white py-10 px-4 sm:px-8 lg:px-16`}
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* About Us Content */}
          <div className="text-center md:text-left mb-12">
            <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl">
              Established in 2024, <strong>M HELZ Trading Plc</strong> is a
              leading pharmaceutical importing company based in Ethiopia. We
              specialize in sourcing high-quality pharmaceutical products to
              meet the growing healthcare needs of our nation. Our commitment to
              excellence and compliance with international standards ensures
              that we provide safe and effective medications.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 bg-primary  rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <FaGlobeAfrica className="text-4xl text-blue-500" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Importation of Pharmaceuticals
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Sourcing a wide range of medications, including generics,
                  branded products, medical equipment, devices, and supplies.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-primary  rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <FaCheckCircle className="text-4xl text-green-500" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Regulatory Compliance
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Navigating the complexities of Ethiopian pharmaceutical
                  regulations to ensure smooth import processes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-primary  rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <FaHandHoldingHeart className="text-4xl text-red-500" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Market Insights
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Providing valuable market intelligence to our partners for
                  informed decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="mt-16 border-t-2 border-dashed border-white opacity-30"></div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Aboutus;
