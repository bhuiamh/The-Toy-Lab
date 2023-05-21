import React, { useContext, useState } from "react";
import namePhoto from "../../../assets/namePhoto.svg";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [ratings, setRatings] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const addedToys = {
      toyImg: pictureUrl,
      toyName: name,
      seller: sellerName,
      sellerEmail,
      subCategory: subCategory,
      price: price,
      ratings: ratings,
      availableQuantity: availableQuantity,
      description,
    };

    fetch("https://the-toy-lab-server.vercel.app/addatoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedToys),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something Went Wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Toy Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    setPictureUrl("");
    setName("");
    setSellerName("");
    setSellerEmail("");
    setSubCategory("");
    setPrice("");
    setRatings("");
    setAvailableQuantity("");
    setDescription("");
  };

  return (
    <div className="container mx-auto p-4 w-3/4 mt-10">
      <div className="flex">
        <h1 className="text-2xl text-blue-500 font-bold mb-4 mr-3">
          Add A Toy to
        </h1>
        <img src={namePhoto} alt="" className="h-10" />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <label
            htmlFor="pictureUrl"
            className="w-1/4 text-xl font-bold text-pink-500"
          >
            Picture URL of the toy:
          </label>
          <input
            type="text"
            id="pictureUrl"
            required
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="name"
            className="w-1/4 text-xl font-bold text-pink-500"
          >
            Toy Name:
          </label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="sellerName"
            className="w-1/4 text-xl font-bold text-pink-500"
          >
            Seller Name:
          </label>
          <input
            type="text"
            id="sellerName"
            required
            defaultValue={user?.displayName}
            onChange={(e) => setSellerName(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="sellerEmail"
            className="w-1/4 text-xl font-bold text-pink-500"
          >
            Seller Email:
          </label>
          <input
            type="email"
            id="sellerEmail"
            required
            defaultValue={user?.email}
            onChange={(e) => setSellerEmail(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="subCategory"
            className="w-1/4 text-xl font-bold text-pink-500"
          >
            Sub-category:
          </label>
          <select
            id="subCategory"
            required
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="select select-info w-3/4 px-4 py-2 border border-gray-300 rounded"
          >
            <option disabled selected>
              Select Category
            </option>
            <option>Math Learning Toy</option>
            <option>Alphabet Learning Toy</option>
            <option>Color Learning Toy</option>
            <option>Science Learning Toy</option>
          </select>
        </div>
        <div className="flex items-center">
          <label
            htmlFor="price"
            className="w-1/4 text-xl font-bold text-pink-500"
          >
            Price:
          </label>
          <input
            type="number"
            required
            id="price"
            value={price}
            placeholder="Price in USD"
            onChange={(e) => setPrice(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="ratings"
            className="w-1/4 text-xl font-bold text-pink-500"
          >
            Ratings:
          </label>
          <input
            type="number"
            id="ratings"
            min="0"
            max="5"
            step="0.1"
            value={ratings}
            placeholder="Enter a rating between 0 and 5"
            required
            onChange={(e) => setRatings(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="availableQuantity"
            className="w-1/4 text-xl font-bold text-pink-500"
          >
            Available Quantity:
          </label>
          <input
            type="number"
            required
            id="availableQuantity"
            value={availableQuantity}
            onChange={(e) => setAvailableQuantity(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="description"
            className="w-1/4 text-xl font-bold text-pink-500"
          >
            Detail Description:
          </label>
          <textarea
            id="description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
