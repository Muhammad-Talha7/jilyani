import React, { useState } from "react";

const images = [
];


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      <div className="absolute z-20 inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg mb-4">Explore Beauty</h1>
        <p className="text-xl md:text-2xl font-light drop-shadow-md">Swipe through moments of wonder</p>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full"
      >
        ❯
      </button>

      <div className="absolute bottom-5 w-full flex justify-center z-30 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
