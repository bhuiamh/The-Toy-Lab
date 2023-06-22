import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazy-load";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const carouselItems = [
    "https://i.ibb.co/qDvTFhv/toy-1.jpg",
    "https://i.ibb.co/hK4zCSY/toy-2.jpg",
    "https://i.ibb.co/XD95k3v/toy-3.jpg",
    "https://i.ibb.co/fp7PdMt/toy-4.jpg",
    "https://i.ibb.co/cYs0L3Z/toy-5.jpg",
    "https://i.ibb.co/TcSRYVf/toy-6.jpg",
    "https://i.ibb.co/Q9qb5h7/toy-7.jpg",
    "https://i.ibb.co/XDKQZg4/toy-8.jpg",
    "https://i.ibb.co/fp7PdMt/toy-4.jpg",
    "https://i.ibb.co/4Fg7fbK/toy-10.jpg",
    "https://i.ibb.co/WHyGx8Y/toy-11.jpg",
    "https://i.ibb.co/Q6bs4zf/toy-12.jpg",
    "https://i.ibb.co/wJhZMgC/toy-13.jpg",
    "https://i.ibb.co/2WkHJxp/toy-14.jpg",
    "https://i.ibb.co/DWW2bBV/toy-15.jpg",
  ];

  console.log(carouselItems[0]);

  return (
    <div className="carousel-container m-5">
      <div className="carousel rounded-lg overflow-hidden">
        <div
          className="carousel-inner flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="carousel-item flex-shrink-0 w-full h-80"
            >
              <LazyLoad height={762}>
                <img
                  src={item}
                  className="w-full h-full object-cover"
                  alt={`Toy ${index + 1}`}
                />
              </LazyLoad>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
