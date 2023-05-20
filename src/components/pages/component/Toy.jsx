import React from "react";
import StarRatings from "react-star-ratings";

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
          <p className="text-lg font-bold text-green-700">${price}</p>
          <p>
            <StarRatings
              rating={ratings}
              starRatedColor="green"
              starEmptyColor="lightgray"
              numberOfStars={5}
              starDimension="15px"
              starSpacing="2px"
            />
          </p>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary font-bold bg-pink-500">
              {availableQuantity}+
            </span>
            <p className="px-2 py-0 bg-green-700 rounded font-bold">
              Available
            </p>
          </div>
        </div>

        <div className="card-actions justify-end ">
          <button className="btn btn-primary w-full mt-2">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Toy;
