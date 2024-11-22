import React from "react";
import {
  FaHeartbeat,
  FaCheckCircle,
  FaGlobe,
  FaPills,
  FaUsers,
} from "react-icons/fa";
import styles, { layout } from "../style";

import Footer from "./Footer";

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-blue-500 text-3xl">{icon}</div>
    <div className="flex flex-col">
      <h4 className="font-semibold text-lg text-white">{title}</h4>
      <p className="text-gray-300">{content}</p>
    </div>
  </div>
);

const Mission = () => (
  <>
    <section
      className={`${layout.section} relative overflow-hidden text-white py-20 px-4 sm:px-8 lg:px-16`}
    >
      <div className="absolute inset-0 opacity-20 bg-cover"></div>

      {/* Header Section */}
      <div className="flex items-center mb-12 animate-fade-in">
        <FaHeartbeat className="text-5xl text-red-500 mr-4 animate-pulse" />
        <h2 className={`${styles.heading2} ml-2`}>Our Mission</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Section: Features */}
        <div>
          <p className={`${styles.paragraph} max-w-[600px] mb-10`}>
            To enhance the health and well-being of the Ethiopian population by
            providing access to quality pharmaceuticals while fostering strong
            partnerships with global manufacturers.
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

    <Footer />
  </>
);

export default Mission;
