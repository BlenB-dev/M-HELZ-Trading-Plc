import React from "react";
import {
  FaRegBuilding,
  FaGlobeAfrica,
  FaCheckCircle,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { layout } from "../style";

import Footer from "./Footer"; // Import Footer component

const Aboutus = () => (
  <div className=" text-white">
    {/* About Us Header with Icon */}
    <div className="flex flex-col items-center text-center mb-12 px-4">
      <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
        <FaRegBuilding className="text-4xl sm:text-5xl text-yellow-500 animate-pulse" />
        <h1 className="text-2xl text-gradient sm:text-3xl lg:text-4xl font-bold">
          About Us
        </h1>
      </div>
    </div>

    {/* Video Section */}
    <div className="relative  py-10 px-4 sm:px-8  lg:px-16">
      <div className="flex justify-center">
        <img
          src="/image4.jpg" // Default image when no feature is selected
          alt="Default"
          className="w-full animate-slide max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>

    {/* About Us Section */}
    <section
      className={`${layout.section} relative  text-white py-10 mt-[-95px] px-4 sm:px-8 lg:px-16`}
    >
      <div className="relative z-10 max-w-7xl ">
        {/* About Us Content */}
        <div className="text-center md:text-left">
          <p className="  mx-auto max-w-2xl text-base sm:text-lg lg:text-xl">
            Established in 2024, <strong>M HELZ Trading Plc</strong> is a
            leading pharmaceutical importing company based in Ethiopia. We
            specialize in sourcing high-quality pharmaceutical products to meet
            the growing healthcare needs of our nation. Our commitment to
            excellence and compliance with international standards ensures that
            we provide safe and effective medications.
          </p>
        </div>

        {/* Animated Values List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
          <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
          <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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

export default Aboutus;
