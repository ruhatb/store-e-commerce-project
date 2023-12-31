import React from "react";
import carusel1 from "../assets/carusel1.jpg";
import carusel2 from "../assets/carusel2.jpg";

const Hero = () => {
  return (
    <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
      <div className="hidden duration-100 ease-linear" data-carousel-item>
        <img
          src={carusel1}
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="Carousel 1"
        />
      </div>
      <div className="hidden duration-100 ease-linear">
        <img
          src={carusel2}
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="Carousel 2"
        />
      </div>
      <div className="hidden duration-100 ease-linear">
        <img
          src={carusel1}
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="Carousel 3"
        />
      </div>
    </div>
  );
};

export default Hero;
