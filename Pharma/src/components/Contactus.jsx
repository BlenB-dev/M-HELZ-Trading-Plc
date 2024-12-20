import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Contactus = () => {
  return (
    <div className="min-h-screen bg-secondary flex flex-col justify-between px-5 bg-cover bg-center">
      {/* Content Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 max-w-4xl w-full ">
          {/* Header Section */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gradient mt-5 lg:mt-10">
            Get in Touch ✨
          </h1>
          <p className="text-gray-300 text-center mt-5 lg:mt-9 text-sm sm:text-base">
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
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white"
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
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white text-base sm:text-lg font-semibold py-3 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Send Message 🚀
            </button>
          </form>

          {/* Social Media Section */}
          <div className="mt-10 text-center">
            <h2 className="text-lg sm:text-xl font-bold animate-pop text-white mb-4">
              Follow Us
            </h2>
            <div className="flex justify-center space-x-4">
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
      </div>
    </div>
  );
};

export default Contactus;
