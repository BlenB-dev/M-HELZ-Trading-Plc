import React, { useState, useEffect, useRef } from "react";
import { Medicines } from "../constants";

const Medicine = () => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const sliderRef = useRef(null); // Reference to the slider container

  const handleSelectMedicine = (medicine) => {
    setSelectedMedicine(medicine);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    // Auto-scroll function
    const scrollProducts = () => {
      if (slider) {
        slider.scrollBy({
          left: 300, // Amount to scroll horizontally
          behavior: "smooth",
        });

        // Reset to the beginning if the end is reached
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    };

    // Start auto-scrolling every 3 seconds
    const interval = setInterval(scrollProducts, 3000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <section className="relative w-full bg-gray-900 py-10">
      <h1 className="text-gradient text-2xl text-center mb-10">
        Medicine's That We Currently Have
      </h1>

      {/* Sliding Medicines Section */}
      <div ref={sliderRef} className="flex space-x-6 px-6 overflow-hidden">
        {Medicines.map((med) => (
          <div
            key={med.id}
            className="min-w-[250px] flex-shrink-0 bg-white rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => handleSelectMedicine(med)}
          >
            <img
              src={med.image}
              alt={med.title}
              className="w-full h-[150px] object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">
                {med.title}
              </h4>
              <p className="text-sm text-gray-600">{med.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Medicine Details Section */}
      {selectedMedicine && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-[400px] relative">
            <button
              className="absolute top-4 right-4 text-black text-xl font-bold"
              onClick={() => setSelectedMedicine(null)}
            >
              ✖
            </button>
            <img
              src={selectedMedicine.image}
              alt={selectedMedicine.title}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">
              {selectedMedicine.title}
            </h4>
            <p className="text-sm text-gray-600">{selectedMedicine.value}</p>
            <p className="mt-4 text-gray-700">
              {selectedMedicine.description ||
                "No additional details available."}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Medicine;
