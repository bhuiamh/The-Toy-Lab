import React, { useState } from "react";

const AddToy = () => {
  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setPictureUrl("");
    setName("");
    setSellerName("");
    setSellerEmail("");
    setSubCategory("");
    setPrice("");
    setRating("");
    setAvailableQuantity("");
    setDescription("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add A Toy</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <label htmlFor="pictureUrl" className="w-1/4">
            Picture URL of the toy:
          </label>
          <input
            type="text"
            id="pictureUrl"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="name" className="w-1/4">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="sellerName" className="w-1/4">
            Seller Name:
          </label>
          <input
            type="text"
            id="sellerName"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="sellerEmail" className="w-1/4">
            Seller Email:
          </label>
          <input
            type="email"
            id="sellerEmail"
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="subCategory" className="w-1/4">
            Sub-category:
          </label>
          <input
            type="text"
            id="subCategory"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="price" className="w-1/4">
            Price:
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="rating" className="w-1/4">
            Rating:
          </label>
          <input
            type="text"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="availableQuantity" className="w-1/4">
            Available Quantity:
          </label>
          <input
            type="text"
            id="availableQuantity"
            value={availableQuantity}
            onChange={(e) => setAvailableQuantity(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="description" className="w-1/4">
            Detail Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddToy;
