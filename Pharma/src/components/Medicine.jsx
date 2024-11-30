import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Medicines } from "../constants";

const Medicine = () => {
  const [selectedMedicine, setSelectedMedicine] = useState(null); // State for the selected medicine

  // Custom Arrow Components
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
        onClick={onClick}
      >
        &#8594;
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
        onClick={onClick}
      >
        &#8592;
      </div>
    );
  };

  const settings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: true, // Enable arrows on mobile
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true, // Enable arrows on mobile
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="py-10 bg-secondary  ">
      {/* Header div */}
      <div className="text-center mb-8">
        <h2 className="text-3xl animate-slide  font-bold text-gradient">
          Some Of Our Latest Products
        </h2>
        <p className="text-sm animate-slide text-gradient">
          Check Out Our Newest Arrivals.
        </p>
      </div>

      {/* Carousel div */}
      <div className="max-w-6xl mx-auto px-4 relative">
        <Slider {...settings}>
          {Medicines.map((medicine, index) => (
            <div
              key={index}
              className="p-4"
              onClick={() => setSelectedMedicine(medicine)} // Set the selected medicine
            >
              <div className="rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src={medicine.img}
                  alt={medicine.name}
                  className="w-full h-[200px] object-contain rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-orange-600">
                    {medicine.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal for Selected Medicine */}
      {selectedMedicine && (
        <div className="fixed top-0 left-0 w-full h-full  flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-[400px] relative">
            <button
              className="absolute top-4 right-4 text-black text-xl font-bold"
              onClick={() => setSelectedMedicine(null)} // Close modal
            >
              ✖
            </button>
            <img
              src={selectedMedicine.img}
              alt={selectedMedicine.name}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">
              {selectedMedicine.name}
            </h4>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Description:</span>{" "}
              {selectedMedicine.description}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Contact:</span>{" "}
              {selectedMedicine.contact}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Medicine;
