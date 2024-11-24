import React, { useState } from "react";

const Business = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Feature data
  const features = [
    {
      id: 1,
      title: "Importing high-quality products",
      description:
        "We import high-quality products from reputable manufacturers around the world.",
      img: "/image1.jpg", // Replace with the actual image path
    },
    {
      id: 2,
      title: "Well-staffed professionals",
      description:
        "Well-staffed with professional pharmacists and bio-medical engineers.",
      img: "/image2.jpg", // Replace with another image path
    },
    {
      id: 3,
      title: "We provide training sessions",
      description: "Comprehensive training sessions for effective product use.",
      img: "/image3.jpg", // Replace with another image path
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-white">
        <span className="animate-pop text-gradient"> Why Choose Us</span>
      </h2>
      <p className="text-center mb-8 text-white">
        At HELZ, we understand that choosing the right product is a crucial
        decision for your success.
      </p>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: List */}
        <div className="text-white space-y-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`cursor-pointer p-4 bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ${
                selectedFeature === feature.id
                  ? "ring-2 ring-purple-500 text-white"
                  : ""
              }`}
              onClick={() => setSelectedFeature(feature.id)}
            >
              <h3 className="text-xl sm:text-2xl font-semibold">
                {feature.id}. {feature.title}
              </h3>
              {selectedFeature === feature.id && (
                <p className="text-sm sm:text-base mt-2">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Section: Image and Description */}
        <div className="flex flex-col animate-slide items-center space-y-4">
          {selectedFeature ? (
            <div>
              <img
                src={
                  features.find((feature) => feature.id === selectedFeature).img
                }
                alt={
                  features.find((feature) => feature.id === selectedFeature)
                    .title
                }
                className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] rounded-lg shadow-lg"
              />
              <p className="text-sm sm:text-base text-white text-center mt-4">
                {
                  features.find((feature) => feature.id === selectedFeature)
                    .description
                }
              </p>
            </div>
          ) : (
            <div>
              <img
                src="/image7.jpg" // Default image when no feature is selected
                alt="Default"
                className="w-full animate-slide max-w-md rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Business;
