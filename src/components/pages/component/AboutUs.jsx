import React from "react";
import toyStoreImage from "../../../assets/logo.png";
import namePhoto from "../../../assets/namePhoto.svg";

const AboutUs = () => {
  return (
    <div className="py-10 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:mr-10 my-auto">
            <img
              src={toyStoreImage}
              alt="Toy Store"
              className="rounded-lg h-auto w-full"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center">
              <h2 className="md:text-4xl text-2xl font-bold mb-4 mr-2">
                Welcome to
              </h2>
              <img
                className="md:h-9 h-5 text-blue-400"
                src={namePhoto}
                alt=""
              />
            </div>
            <p className="text-lg mb-6">
              At The Thy Lab, we believe in the power of play and imagination.
              We are an online toy store that offers a wide range of
              high-quality toys for children of all ages. Whether you're looking
              for educational toys, interactive games, or fun playsets, we have
              something for everyone.
            </p>
            <p className="text-lg mb-6">
              Our mission is to provide children with the best toys that promote
              creativity, learning, and joy. We carefully curate our collection
              to ensure that every toy we offer meets our high standards of
              safety, durability, and entertainment value.
            </p>
            <p className="text-lg mb-6">
              Shop with confidence at The Thy Lab. We offer secure online
              transactions, fast shipping, and excellent customer service. We
              believe in making your shopping experience convenient and
              enjoyable. Let us help you find the perfect toys that will bring
              smiles to your little ones' faces.
            </p>
            <p className="text-lg">
              Thank you for choosing The Thy Lab. We look forward to serving you
              and being a part of your child's playtime adventures!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
