import React from "react";
import {
  FaHeartbeat,
  FaCheckCircle,
  FaGlobe,
  FaPills,
  FaUsers,
} from "react-icons/fa";
import styles, { layout } from "../style";
import Button from "./Button";
import Footer from "./Footer"; // Import Footer component

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
      className={`${layout.section} relative overflow-hidden  text-white py-20`}
    >
      <div className="absolute inset-0 opacity-20  bg-cover"></div>

      <div className="flex items-center mb-12 ml-10 animate-fade-in">
        <FaHeartbeat className="text-5xl text-red-500 mr-4 animate-pulse" />
        <h2 className={`${styles.heading2} ml-2`}>Our Mission</h2>
      </div>

      <div className={`${styles.sectionInfo} relative z-10`}>
        <p className={`${styles.paragraph} max-w-[600px] mb-10`}>
          To enhance the health and well-being of the Ethiopian population by
          providing access to quality pharmaceuticals while fostering strong
          partnerships with global manufacturers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FeatureCard
            icon={<FaCheckCircle />}
            title=" Importation of Pharmaceuticals"
          />
          <FeatureCard icon={<FaGlobe />} title=" Regulatory Compliance" />
          <FeatureCard icon={<FaPills />} title="Quality Pharmaceuticals" />
          <FeatureCard icon={<FaUsers />} title="Collaboration" />
        </div>

        <Button styles="mt-6 bg-blue-600 hover:bg-blue-700 text-white flex items-center shadow-lg hover:shadow-xl">
          Learn More
        </Button>
      </div>

      <div className="mt-16 border-t-2 border-dashed border-white opacity-30"></div>
    </section>

    <Footer />
  </>
);

export default Mission;
