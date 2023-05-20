import React from "react";

const Toy = ({ toy }) => {
  const {
    _id,
    seller,
    toyName,
    subCategory,
    price,
    ratings,
    availableQuantity,
    toyImg,
  } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-2xl my-8">
      <figure className="h-56 w-full object-cover mx-auto rounded-t-2xl">
        <img className="" src={toyImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-pink-600 text-2xl font-bold">
          {toyName}
        </h2>
        <p className="text-sm">
          by <span className="text-base text-blue-400 font-bold">{seller}</span>
        </p>
        <p>{subCategory}</p>
        <div className="grid grid-cols-3">
          <p className="text-lg font-bold text-green-500">${price}</p>
          <p>{ratings}</p>
          <p>{availableQuantity}</p>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Toy;
