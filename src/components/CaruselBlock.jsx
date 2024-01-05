import React, { useState } from "react";
import { Link } from "react-router-dom";
import carusel1 from "../assets/carusel1.jpg";
import carusel2 from "../assets/carusel2.jpg";

// datanı burada statik resim olarak değil de bir obje arrayi olarak tutmanı öneririm.
// bu sayede resimlerin altındaki yazıları da değiştirebilirsin.
/*örneğin: [{ image: "carusel1.jpg", title: "BLACK FRIDAY", description: "We know how large objects will act, but things on a small scale just do not act that way." }, 
 { image: "carusel2.jpg", title: "WHITE FRIDAY", description: "We know how large objects will act, but things on a small scale just do not act that way." }]*/

const CarouselBlock = () => {
  const images = [carusel1, carusel2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Burada index değiştikçe bütün resim değişiyor. sadece resim değişiyor.
  // resimlerin altındaki yazılar değişmiyor. bunu nasıl yapabilirim?
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
    <div className="relative w-full h-full  sm:inline-block mx-auto">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center">
        <button
          onClick={handlePrevClick}
          className="bg-blue-500 text-white text-4xl px-4 py-2 rounded mr-4"
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

      <div
        style={{ backgroundImage: `url("${images[currentImageIndex]}")` }}
        className="flex flex-col justify-center items-center w-full h-full bg-cover bg-center bg-no-repeat px-4 py-8 min-h-[300px] sm:min-h-[600px] "
      >
        <p className="text-white md:text-5xl font-extrabold sm:inline-block mx-auto sm:text-xl sm:text-70  ">
          BLACK FRIDAY
        </p>
        <p className="text-white sm:inline-block mx-auto sm:text-xl sm:text-70  ">
          We know how large objects will act, but things on <br></br> a small
          scale just do not act that way.
          <Link
            to="/shop/product"
            className="text-white md:font-bold bg-blue-500 md:py-2 px-4 rounded-full ml-2 mt-2 block text-center  "
          >
            START NOW
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CarouselBlock;
