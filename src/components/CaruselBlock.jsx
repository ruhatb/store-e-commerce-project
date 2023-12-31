import React, { useState } from "react";
import { Link } from "react-router-dom"; // React Router'dan Link ekleyin
import carusel1 from "../assets/carusel1.jpg";
import carusel2 from "../assets/carusel2.jpg";

const CarouselBlock = () => {
  const images = [carusel1, carusel2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center">
        <button
          onClick={handlePrevClick}
          className="bg-blue-500 text-white  text-4xl px-4 py-2 rounded mr-4"
        >
          {"<"}
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center">
        <button
          onClick={handleNextClick}
          className="bg-blue-500 text-white text-4xl px-4 py-2 rounded ml-4"
        >
          {">"}
        </button>
      </div>

      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="max-w-full h-auto"
      />
      {/* Görselin tam ortasına yerleştirilmiş <p> etiketleri */}
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-extrabold">
        BLACK FRIDAY
      </p>
      <p className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        We know how large objects will act, but things on <br></br> a small
        scale just do not act that way.
        <Link
          to="/shop/product"
          className="text-white font-bold bg-blue-500 py-2 px-4 rounded-full ml-2 mt-2 block text-center mx-auto"
        >
          START NOW
        </Link>
      </p>
    </div>
  );
};

export default CarouselBlock;
