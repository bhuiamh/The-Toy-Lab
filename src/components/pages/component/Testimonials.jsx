// src/components/Testimonials.js
import React from "react";

const Testimonials = () => {
  // Define your testimonials here
  const testimonials = [
    {
      name: "John Doe",
      text: "I was impressed with the quality and educational value of the toys I bought for my children. They love them!",
    },
    {
      name: "Jane Smith",
      text: "The customer service was outstanding. They helped me find the perfect toy for my classroom. Highly recommended!",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="m-6 p-4 md:py-8 md:px-12 shadow-2xl rounded-lg bg-gradient-to-r from-blue-300 to-purple-400text-white bg-opacity-80">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 bg-opacity-70 rounded-lg shadow-md p-4"
            >
              <p className="text-black  text-lg">{testimonial.text}</p>
              <p className="text-black font-bold mt-2">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
