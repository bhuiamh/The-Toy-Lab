// src/components/GiftCard.js
import React from "react";
import Swal from "sweetalert2";

const GiftCard = () => {
  const discount = 0.17; // 17% discount
  const giftMessage = () => {
    Swal.fire({
      icon: "success",
      title: "Extra Discount on Gift Cart !!!",
      text: "Thank you for your purchase. Your discount code has been applied.",
    });
  };
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg text-white m-6 p-4 md:py-8 md:px-12 shadow-2xl rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Give the Gift of Learning</h2>
      <p className="text-lg mb-4">
        Looking for the perfect educational gift? Purchase a gift card and get a
        17% discount on any educational toy item!
      </p>
      <div className="flex items-center mb-6">
        <span className="text-2xl font-semibold mr-2">$100</span>
        <span className="text-lg line-through text-gray-300">$120</span>
      </div>
      <div className="text-lg mb-6">
        Use code: <span className="font-semibold">GIFT17</span>
      </div>
      <button
        onClick={giftMessage}
        className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 hover:text-gray-900 rounded-full py-2 px-6 text-lg font-semibold transition duration-300 transform hover:scale-105"
      >
        Buy Gift Card
      </button>
    </div>
  );
};

export default GiftCard;
