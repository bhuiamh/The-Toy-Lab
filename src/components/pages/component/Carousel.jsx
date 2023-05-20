import React, { useState, useEffect } from "react";
import toy1 from "../../../assets/toy/toy (1).jpg";
import toy2 from "../../../assets/toy/toy (2).jpg";
import toy3 from "../../../assets/toy/toy (3).jpg";
import toy4 from "../../../assets/toy/toy (4).jpg";
import toy5 from "../../../assets/toy/toy (5).jpg";
import toy6 from "../../../assets/toy/toy (6).jpg";
import toy7 from "../../../assets/toy/toy (7).jpg";
import toy8 from "../../../assets/toy/toy (8).jpg";
import toy9 from "../../../assets/toy/toy (9).jpg";
import toy10 from "../../../assets/toy/toy (10).jpg";
import toy11 from "../../../assets/toy/toy (11).jpg";
import toy12 from "../../../assets/toy/toy (12).jpg";
import toy13 from "../../../assets/toy/toy (13).jpg";
import toy14 from "../../../assets/toy/toy (14).jpg";
import toy15 from "../../../assets/toy/toy (15).jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const carouselItems = [
    toy1,
    toy2,
    toy3,
    toy4,
    toy5,
    toy6,
    toy7,
    toy8,
    toy9,
    toy10,
    toy11,
    toy12,
    toy13,
    toy14,
    toy15,
  ];

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
              <img
                src={item}
                className="w-full h-full object-cover"
                alt={`Toy ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
