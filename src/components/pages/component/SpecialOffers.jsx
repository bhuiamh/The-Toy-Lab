// src/components/SpecialOffers.js
import React from "react";

const SpecialOffers = () => {
  const offers = [
    {
      title: "Limited-Time Offer",
      description:
        "Get 20% off on all educational toys. Hurry, this offer expires on December 31st!",
    },
    {
      title: "Back-to-School Promotion",
      description:
        "Buy one, get one 50% off on select school-themed toys. Perfect for the new school year!",
    },
    // Add more offers as needed
  ];

  return (
    <section className="m-6 p-4 md:py-8 md:px-12 shadow-2xl rounded-lg bg-gradient-to-t from-yellow-100 to-yellow-300 py-12 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block hover:bg-blue-600 transition duration-300">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
