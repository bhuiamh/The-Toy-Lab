import React from "react";
import FAQ from "./FAQ";
import faqData from "./FaqData";

const FaqPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center my-4">
        Frequently Asked Questions
      </h1>
      <FAQ data={faqData} />
    </div>
  );
};

export default FaqPage;
