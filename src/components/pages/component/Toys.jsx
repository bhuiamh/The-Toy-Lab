import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const Toys = ({ toys, serialNumber }) => {
  const {
    _id,
    seller,
    toyName,
    subCategory,
    price,
    ratings,
    availableQuantity,
    toyImg,
  } = toys;
  return (
    <tbody>
      <tr>
        <td className="font-bold text-xl">{serialNumber}</td>
        <td>
          <div className="flex items-center space-x-3 ml-4">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toyImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-pink-600 text-2xl">{toyName}</div>
              <div className="text-sm opacity-50">
                {" "}
                by{" "}
                <span className="text-base text-blue-400 font-bold">
                  {seller}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td>
          {subCategory}
          <br />
          <span className="badge badge-ghost badge-sm p-3">
            <StarRatings
              rating={ratings}
              starRatedColor="green"
              starEmptyColor="lightgray"
              numberOfStars={5}
              starDimension="15px"
              starSpacing="2px"
            />
          </span>
        </td>
        <td>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary font-bold bg-pink-500">
              {availableQuantity}+
            </span>
            <p className="px-2 py-0 text-white bg-green-700 rounded font-bold">
              Available
            </p>
          </div>
        </td>
        <th>
          <Link to={`/alltoys/${toys?._id}`}>
            {" "}
            <button className="btn btn-ghost btn-xs">details</button>
          </Link>
        </th>
      </tr>
    </tbody>
  );
};

export default Toys;
