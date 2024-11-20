import React from "react";
import {
  FaRegBuilding,
  FaGlobeAfrica,
  FaCheckCircle,
  FaHandHoldingHeart,
} from "react-icons/fa";
import styles, { layout } from "../style";

import Footer from "./Footer"; // Import Footer component

const Aboutus = () => (
  <>
    {/* About Us Header with Icon */}
    <div className="flex items-center mt-[-70px] justify-center mb-12 animate-fade-in">
      <FaRegBuilding className="text-5xl text-yellow-500 absolute top-[116px] left-[3px] sm:top-32 sm:left-20 lg:top-30 lg:left-[380px] animate-pulse" />
    </div>

    {/* Video Section */}
    <div className="relative bg-black/50 py-10 px-4 sm:px-8 lg:px-16">
      <h3 className="text-2xl font-semibold text-center text-white mb-4">
        Learn More About M HELZ Trading
      </h3>
      <div className="flex justify-center">
        <video
          className="rounded-lg shadow-lg w-full max-w-4xl"
          autoPlay
          loop
          muted
        >
          <source src="/sample7.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    {/* About Us Section */}
    <section
      className={`${layout.section} relative overflow-hidden text-white py-10 px-4 sm:px-8 lg:px-16`}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 "></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* About Us Content */}
        <div className="text-center md:text-left">
          <p className={`${styles.paragraph} mt-5 md:-mt-14 mx-auto max-w-2xl`}>
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
  </>
);

export default Aboutus;
