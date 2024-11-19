import React, { useState } from "react";
import styles from "../style";

const Business = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Feature data
  const features = [
    {
      id: 1,
      title: "Importing high-quality products",
      description:
        "We import high-quality products from reputable manufacturers around the world.",
      video: "/src/assets/sample3.mp4", // Replace with the actual video path
    },
    {
      id: 2,
      title: "Well-staffed professionals",
      description:
        "Well-staffed with professional pharmacists and bio-medical engineers.",
      video: "/src/assets/sample2.mp4", // Replace with another video path
    },
    {
      id: 3,
      title: "We provide training sessions",
      description: "Comprehensive training sessions for effective product use.",
      video: "/src/assets/sample1.mp4", // Replace with another video path
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 ">
      <h2 className="text-5xl font-bold text-center mb-6 text-white">
        <span className="animate-pop text-gradient  "> Why Choose Us</span>
      </h2>
      <p className="text-center mb-8 text-white">
        At HELZ, we understand that choosing the right product is a crucial
        decision for your success.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Section: List */}
        <div className="text-white p-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`cursor-pointer mb-4 text-2xl feedback-card ${
                selectedFeature === feature.id ? "text-white" : ""
              }`}
              onClick={() => setSelectedFeature(feature.id)}
            >
              <h3>
                {feature.id}. {feature.title}
              </h3>
              {selectedFeature === feature.id && (
                <p className="ml-7">{feature.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Section: Video and Paragraph */}
        <div className="p-4 flex flex-col items-center">
          {selectedFeature ? (
            <div>
              <video
                src={
                  features.find((feature) => feature.id === selectedFeature)
                    .video
                }
                autoPlay
                loop
                className="mb-4 w-full max-w-xs rounded-lg shadow-lg"
              />
              <p className={`${styles.paragraph}`}>
                {
                  features.find((feature) => feature.id === selectedFeature)
                    .description
                }
              </p>
            </div>
          ) : (
            <div>
              <video
                src="/src/assets/sample5.mp4"
                autoPlay
                loop
                muted
                className="w-full max-w-md rounded-lg shadow-lg"
              ></video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Business;
