import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer from "./Footer";

const MoreContactus = () => {
  return (
    <div className="min-h-screen  bg-secondary flex flex-col justify-between px-5 ">
      {/* Content Section */}
      <header className="fixed top-0 left-0 w-full bg-primary z-50 ">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-gradient">M HELZ</div>
          <ul className="flex space-x-6 text-lg text-white">
            <a href="/">
              <li className="hover:underline cursor-pointer">Home</li>
            </a>
            <a href="/Aboutus">
              {" "}
              <li className="hover:underline cursor-pointer">About Us</li>{" "}
            </a>
            <a href="/Mission">
              <li className="hover:underline cursor-pointer">Our Mission</li>
            </a>
            <a href="/Service">
              {" "}
              <li className="hover:underline cursor-pointer">Our Services</li>
            </a>
            <a href="/MoreContactus">
              {" "}
              <li className="hover:underline cursor-pointer">Contact Us</li>
            </a>
          </ul>
        </nav>
      </header>
      <div className="flex-grow flex items-center mt-10 justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 max-w-6xl w-full ">
          {/* Left Section: Form */}
          <div>
            {/* Header Section */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left text-gradient mt-5 lg:mt-10">
              Get in Touch ✨
            </h1>
            <p className="text-white text-center lg:text-left mt-5 lg:mt-9 text-sm sm:text-base">
              Have questions? We're here to help! Fill out the form below, and
              we'll get back to you as soon as possible.
            </p>

            {/* Form Section */}
            <form className="space-y-4 sm:space-y-6 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white text-base sm:text-lg font-semibold py-3 rounded-lg hover:bg-purple-700 transition-all duration-300"
              >
                Send Message 🚀
              </button>
            </form>

            {/* Social Media Section */}
            <div className="mt-10">
              <h2 className="text-lg sm:text-xl font-bold animate-pop text-white mb-4 text-center lg:text-left">
                Follow Us
              </h2>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                >
                  <FaFacebookF className="text-sm sm:text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300"
                >
                  <FaInstagram className="text-sm sm:text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
                >
                  <FaTwitter className="text-sm sm:text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Video */}
          <div className="flex items-center justify-center">
            <img
              src="/image6.jpg" // Default image when no feature is selected
              alt="Default"
              className="w-full animate-slide max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Footer Section with Spacing */}
      <div className="mb-16"></div> {/* Adds spacing between form and footer */}
      <Footer />
    </div>
  );
};

export default MoreContactus;
