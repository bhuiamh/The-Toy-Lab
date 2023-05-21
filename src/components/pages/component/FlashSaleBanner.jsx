import React, { useEffect, useState } from "react";
import flashSell from "../../../assets/sell.png";
const FlashSaleBanner = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2023-06-10T00:00:00Z").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const remainingMinutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const remainingSeconds = Math.floor(
        (timeDifference % (1000 * 60)) / 1000
      );

      setDays(remainingDays);
      setHours(remainingHours);
      setMinutes(remainingMinutes);
      setSeconds(remainingSeconds);

      if (timeDifference < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#fb9094] to-[#84f5e4] text-white m-6 p-4 md:py-8 md:px-12 shadow-2xl rounded-lg">
      <div className="flex flex-col items-center justify-between md:flex-row md:mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="h-12 md:h-52 w-auto mr-4"
            src={flashSell}
            alt="Flash Sale"
          />
          <p className="text-2xl text-orange-600 md:text-4xl font-bold">
            Flash Sale! Get{" "}
            <span className="text-red-600 text-8xl font-bolder">75%</span> off
          </p>
        </div>
        <div className="flex text-2xl md:text-4xl">
          <div className="flex flex-col mr-6">
            <span className="countdown font-mono text-5xl md:text-7xl">
              <span style={{ "--value": days }}></span>
            </span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col mr-6">
            <span className="countdown font-mono text-5xl md:text-7xl">
              <span style={{ "--value": hours }}></span>
            </span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col mr-6">
            <span className="countdown font-mono text-5xl md:text-7xl">
              <span style={{ "--value": minutes }}></span>
            </span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl md:text-7xl">
              <span style={{ "--value": seconds }}></span>
            </span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>
      <p className="text-center text-lg text-black">
        Hurry up and grab your favorite items before the sale ends!
      </p>
      <p className="text-center text-lg text-black">
        *Conditions apply. Limited stock available.
      </p>
    </div>
  );
};

export default FlashSaleBanner;
