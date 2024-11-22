import React, { useState, useRef } from "react";
import { Medicines } from "../constants";

const Medicine = () => {
  const [Medicine, setMedicine] = useState(null); // State for the selected medicine
  const carouselRef = useRef(null); // Ref for the carousel container
  const isDragging = useRef(false); // To track if the user is dragging
  const startX = useRef(0); // To store the initial X position
  const scrollLeft = useRef(0); // To store the initial scroll position

  const handleSelectMedicine = (medicine) => {
    setMedicine(medicine); // Set the selected medicine
  };

  const closeModal = () => {
    setMedicine(null); // Close the modal
  };

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX; // Store the start position
    scrollLeft.current = carouselRef.current.scrollLeft; // Store the initial scroll position
    carouselRef.current.style.scrollBehavior = "auto"; // Disable smooth scrolling while dragging
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX.current) * -1; // Calculate the distance moved
    carouselRef.current.scrollLeft = scrollLeft.current + walk;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    carouselRef.current.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
  };

  return (
    <section className="py-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl animate-pop font-bold text-gradient">
          Our Featured Medicines
        </h2>
        <p className="text-white mt-2">
          Explore our latest and most popular medical medicines!
        </p>
      </div>

      {/* Sliding Carousel */}
      <div
        ref={carouselRef}
        className="overflow-hidden relative flex animate-slide-both space-x-6 px-6"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp} // Ensure drag stops when pointer leaves the container
        onTouchStart={handlePointerDown} // For touch devices
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      >
        {Medicines.map((medicine, index) => (
          <div
            key={index}
            className="min-w-[250px] rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => handleSelectMedicine(medicine)} // Add click handler
          >
            <img
              src={medicine.image}
              alt={medicine.name}
              className="w-full h-[180px] object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gradient">
                {medicine.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Selected Medicine */}
      {Medicine && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-[400px] relative">
            <button
              className="absolute top-4 right-4 text-black text-xl font-bold"
              onClick={closeModal}
            >
              ✖
            </button>
            <img
              src={Medicine.image}
              alt={Medicine.name}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">
              {Medicine.name}
            </h4>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Description:</span> {Medicine.details}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Contact:</span> {Medicine.contact}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Medicine;
