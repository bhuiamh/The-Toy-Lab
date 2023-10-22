// src/components/FAQ.js
import React, { useState } from "react";

const FAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="p-4">
      {data.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className={`flex justify-between items-center py-2 px-4 cursor-pointer border border-gray-300 rounded-md ${
              openIndex === index ? "bg-blue-100" : "hover:bg-gray-100"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="font-semibold">{faq.question}</div>
            <div className="text-gray-500">
              {openIndex === index ? "−" : "+"}
            </div>
          </div>
          {openIndex === index && (
            <div className="mt-2 p-4 border border-gray-300 rounded-md bg-white">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
