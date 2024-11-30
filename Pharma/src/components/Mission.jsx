import React, { useState } from "react";
import {
  FaHeartbeat,
  FaCheckCircle,
  FaGlobe,
  FaPills,
  FaUsers,
} from "react-icons/fa";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex items-center gap-4 p-6 bg-primary rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-blue-500 text-3xl">{icon}</div>
    <div className="flex flex-col">
      <h4 className="font-semibold text-lg text-white">{title}</h4>
      <p className="text-gray-300">{content}</p>
    </div>
  </div>
);

const Mission = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
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
                  <li className="hover:bg-gray-200  px-4 py-2 cursor-pointer">
                    <a href="/ImportProducts">Import</a>
                  </li>
                  <li className="hover:bg-gray-200  px-4 py-2 cursor-pointer">
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

      {/* Main Content */}
      <section
        className={`${layout.section} flex-grow bg-secondary mt-[60px] relative overflow-hidden text-white py-20 px-4 sm:px-8 lg:px-16`}
      >
        <div className="flex items-center mb-12 animate-fade-in">
          <FaHeartbeat className="text-5xl text-red-500 mr-4 animate-pulse" />
          <h2 className={`${styles.heading2} ml-2 text-gradient`}>
            Our Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Section: Features */}
          <div>
            <p className={`${styles.paragraph} max-w-[600px] mb-10`}>
              “To improve healthcare accessibility and outcomes by importing
              high-quality medicines, equipment, and vaccines while building a
              trusted chain of pharmacies that deliver reliable and affordable
              care to communities.”
            </p>

            <div className="grid grid-cols-1 gap-8 mb-12">
              <FeatureCard
                icon={<FaCheckCircle />}
                title="Importation of Pharmaceuticals"
                content="We ensure high-quality pharmaceuticals are imported for better healthcare."
              />
              <FeatureCard
                icon={<FaGlobe />}
                title="Regulatory Compliance"
                content="Adhering to global standards and regulatory requirements."
              />
              <FeatureCard
                icon={<FaPills />}
                title="Quality Pharmaceuticals"
                content="Committed to delivering the best pharmaceutical products."
              />
              <FeatureCard
                icon={<FaUsers />}
                title="Collaboration"
                content="Partnering with global manufacturers for a sustainable future."
              />
              <FeatureCard
                icon={<FaUsers />}
                title="Planting our own pharmaceutical and diagnostic company."
                content=""
              />
            </div>
          </div>

          {/* Right Section: Responsive Image/Video */}
          <div className="relative animate-slide overflow-hidden rounded-lg shadow-lg max-w-full">
            <img
              src="/image5.jpg" // Replace with actual image path
              alt="Mission"
              className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t-2 border-dashed border-white opacity-30"></div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mission;
