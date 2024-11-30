import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-10 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src="" // Replace with your logo path
              alt=""
              className="h-10"
            />
            <h1 className="text-xl font-bold animate-pop text-gradient">
              M HELZ
            </h1>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-bold">Location:</span> Summit Fiyelbet
                Road
              </li>
              <li>📧 mhelztrading@gmail.com</li>
              <li>📞 +251 96 821 4723 </li>
              <li>📞 +251 946 724 253 </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-700 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-700 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-700 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-700 transition"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-700 transition"
              >
                <FaTiktok />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-700 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <a
          href="#top"
          className="bg-orange-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        >
          ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
