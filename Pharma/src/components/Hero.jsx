import React, { useState } from "react";
import styles from "../style";
import { discount } from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section
      id="home"
      className={`relative flex md:flex-row flex-col bg-primary ${styles.paddingY}`}
    >
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

      {/* Left Section */}
      <div
        className={`flex-2 ${styles.flexStart} flex-col xl:px-0 sm:px-16 mt-10 px-6`}
      >
        <div className="flex flex-row items-center py-[5px] mt-10 px-4 bg-discount-gradient rounded-[10px] mb-2 animate-fade-in">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} text-white ml-3`}>
            Your partner in health solutions
          </p>
        </div>
        <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] mb-1 animate-slide-up">
          M HELZ Trading Plc
          <br />
        </h1>
        <p
          className={`${styles.paragraph} max-w-[470px] text-white text-opacity-90 mb-8 animate-fade-in`}
        >
          To enhance the health and well-being of the Ethiopian population by
          providing access to quality pharmaceuticals while fostering strong
          partnerships with global manufacturers.
        </p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition">
          Learn More
        </button>
      </div>

      {/* Video Section */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-11 relative animate-slide-in`}
      >
        <video
          src="/Intro.mp4"
          className="w-[80%] h-auto  relative z-[5] rounded-lg "
          autoPlay
          loop
          muted
          poster="/placeholder-image.jpg"
        />
      </div>

      {/* SVG Divider */}
      <div className="absolute w-full bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,149.3C672,128,768,128,864,154.7C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
