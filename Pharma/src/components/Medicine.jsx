import React, { useState, useRef, useEffect } from "react";
import { Medicines } from "../constants";

const Medicine = () => {
  const [selectedMedicine, setSelectedMedicine] = useState(null); // State for the selected medicine
  const carouselRef = useRef(null); // Reference for the carousel container
  const isDragging = useRef(false); // Track if the user is dragging
  const startPosition = useRef(0); // Starting mouse/touch position
  const scrollLeft = useRef(0); // Carousel scroll position before drag

  const handleSelectMedicine = (medicine) => {
    setSelectedMedicine(medicine); // Set the selected medicine
  };

  const closeModal = () => {
    setSelectedMedicine(null); // Close the modal
  };

  // Handle the start of drag (both mouse and touch)
  const handleDragStart = (e) => {
    isDragging.current = true;
    startPosition.current =
      e.type === "touchstart"
        ? e.touches[0].pageX
        : e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.scrollBehavior = "auto"; // Disable smooth scrolling during drag
  };

  // Handle dragging (both mouse and touch)
  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    const x =
      e.type === "touchmove"
        ? e.touches[0].pageX
        : e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startPosition.current) * 1.5; // Adjust drag sensitivity
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Handle the end of drag (both mouse and touch)
  const handleDragEnd = () => {
    isDragging.current = false;
    carouselRef.current.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && !isDragging.current) {
        carouselRef.current.scrollBy({
          left: 300, // Adjust the scroll distance
          behavior: "smooth",
        });

        // Reset carousel to the start when reaching the end
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000); // Adjust the timing for auto-slide

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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
        className="flex space-x-6 px-4 animate-slide-both overflow-hidden cursor-grab relative"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {Medicines.map((medicine, index) => (
          <div
            key={index}
            className="min-w-[250px] rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => handleSelectMedicine(medicine)}
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
      {selectedMedicine && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-[400px] relative">
            <button
              className="absolute top-4 right-4 text-black text-xl font-bold"
              onClick={closeModal}
            >
              ✖
            </button>
            <img
              src={selectedMedicine.image}
              alt={selectedMedicine.name}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">
              {selectedMedicine.name}
            </h4>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Description:</span>{" "}
              {selectedMedicine.details}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Contact:</span>{" "}
              {selectedMedicine.contact}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Medicine;
