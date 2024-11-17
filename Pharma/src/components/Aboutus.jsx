import React from "react";
import {
  FaRegBuilding,
  FaGlobeAfrica,
  FaCheckCircle,
  FaHandHoldingHeart,
} from "react-icons/fa";
import styles, { layout } from "../style";
import Button from "./Button";
import Footer from "./Footer"; // Import Footer component

const Aboutus = () => (
  <>
    <div className="flex items-center mb-12 ml-10 animate-fade-in">
      <FaRegBuilding className="text-5xl text-yellow-500 mr-4 animate-pulse" />
      <h2 className={`${styles.heading2} ml-2`}>About Us</h2>
    </div>
    <section
      className={`${layout.section} relative overflow-hidden text-white py-20`}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10  bg-cover"></div>

      {/* About Us Header with Icon */}

      {/* About Us Content */}
      <div className={`${styles.sectionInfo} relative z-10`}>
        <p
          className={`${styles.paragraph} ml-[180px] mt-[-50px] max-w-[700px]  mb-10`}
        >
          Established in 2024, <strong>M HELZ Trading Plc</strong> is a leading
          pharmaceutical importing company based in Ethiopia. We specialize in
          sourcing high-quality pharmaceutical products to meet the growing
          healthcare needs of our nation. Our commitment to excellence and
          compliance with international standards ensures that we provide safe
          and effective medications.
        </p>

        {/* Animated Values List */}
        <div className="grid grid-cols-1 ml-[230px] md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center w-[600px] gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <FaGlobeAfrica className="text-4xl text-blue-500" />
            <div>
              <h4 className="text-xl font-semibold text-white">
                Importation of Pharmaceuticals
              </h4>
              <p className="text-gray-300">
                Sourcing a wide range of medications, (including generics and
                branded products), Medical Equipments, Devices, Instruments and
                Supplies.
              </p>
            </div>
          </div>
          <div className="flex items-center w-[600px] gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <FaCheckCircle className="text-4xl text-green-500" />
            <div>
              <h4 className="text-xl font-semibold text-white">
                Regulatory Compliance
              </h4>
              <p className="text-gray-300">
                Navigating the complexities of Ethiopian pharmaceutical
                regulations to ensure smooth import processes.
              </p>
            </div>
          </div>
          <div className="flex items-center w-[600px] gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <FaHandHoldingHeart className="text-4xl text-red-500" />
            <div>
              <h4 className="text-xl font-semibold text-white">
                Market Insights
              </h4>
              <p className="text-gray-300">
                Providing valuable market intelligence to our partners for
                informed decision-making..
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <Button styles="mt-6 bg-blue-600 hover:bg-blue-700 text-white flex items-center shadow-lg hover:shadow-xl">
          Contact Us
        </Button>
      </div>

      {/* Decorative Divider */}
      <div className="mt-16 border-t-2 border-dashed border-white opacity-30"></div>
    </section>

    {/* Footer Section */}
    <Footer />
  </>
);

export default Aboutus;
