import React from "react";
import { FaPills, FaRegBuilding, FaChartLine } from "react-icons/fa";

const Service = () => {
  return (
    <div
      className="min-h-screen text-white py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?health,medical')", // Replace with your desired image URL
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Add overlay effect
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
          Our Services
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore the wide range of services we offer to enhance healthcare and
          support pharmaceutical growth in Ethiopia.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* Service 1 */}
        <div className="relative bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <div
            className="absolute inset-0 opacity-20 bg-cover rounded-lg"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/400x400/?medicine,health')",
            }}
          ></div>
          <div className="relative z-10 text-center">
            <FaPills className="text-5xl text-blue-500 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold mb-2">
              Importation of Pharmaceuticals
            </h3>
            <p className="text-gray-400">
              Sourcing a wide range of medications (including generics and
              branded products), medical equipment, devices, instruments, and
              supplies.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <div
            className="absolute inset-0 opacity-20 bg-cover rounded-lg"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/400x400/?regulation,compliance')",
            }}
          ></div>
          <div className="relative z-10 text-center">
            <FaRegBuilding className="text-5xl text-yellow-500 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold mb-2">
              Regulatory Compliance
            </h3>
            <p className="text-gray-400">
              Navigating the complexities of Ethiopian pharmaceutical
              regulations to ensure smooth import processes.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <div
            className="absolute inset-0 opacity-20 bg-cover rounded-lg"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/400x400/?market,intelligence')",
            }}
          ></div>
          <div className="relative z-10 text-center">
            <FaChartLine className="text-5xl text-green-500 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
            <p className="text-gray-400">
              Providing valuable market intelligence to our partners for
              informed decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
