import React, { useState } from 'react';
import carusel1 from "../assets/carusel1.png";
import carusel2 from "../assets/carusel2.png";


const images = [
  carusel1,
  carusel2, 
];


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="container-fluid flex justify-center w-11/12 ml-10 items-center mt-10 pb-1 rounded-[1.25rem] bg-gradient-to-r from-[#96E9FB] to-[#ABECD6]">
      <div className="row flex justify-center items-center w-full mx-auto">
        <div className="col-md-6 flex flex-col w-6/12 justify-center items-start gap-8">
          <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#2A7CC7]">
            SUMMER 2020
          </h5>
          <h1 className="font-montserrat font-bold text-6xl leading-[5rem]">
            NEW COLLECTION
          </h1>
          <h4 className="font-montserrat text-xl font-normal text-custom-gray w-6/12">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex items-start gap-2.5">
            <button className="btn-primary flex flex-col items-center gap-2.5 py-4 px-10 bg-[#23A6F0] rounded-md" onClick={handleNext}>
              <h3 className="font-montserrat font-bold text-2xl tracking-[0.00625] text-custom-white">
                SHOP NOW
              </h3>
            </button>
          </div>
        </div>
        <div className="col-md-6 flex justify-center items-center">
          <div className="hero-cover-1 flex justify-center items-center flex-container">
            <div className="relative flex">
              <img className="w-[50rem] z-[3] relative" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={handlePrev}>
        &#10094;
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={handleNext}>
        &#10095;
      </div>





</div>


    


    
  );
};

export default Hero;