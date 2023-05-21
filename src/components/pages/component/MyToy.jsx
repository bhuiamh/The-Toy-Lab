import React from "react";
import { FaCheck, FaPen, FaTimes } from "react-icons/fa";
import StarRatings from "react-star-ratings";

const MyToy = ({
  toys,
  serialNumber,
  handleDelete,
  handleAddConfirm,
  added,
}) => {
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
        <td className="flex items-center">
          <div>
            {subCategory}
            <br />
            <h1>
              <span className="badge badge-ghost badge-sm p-3">
                <StarRatings
                  rating={Number(ratings)}
                  starRatedColor="green"
                  starEmptyColor="lightgray"
                  numberOfStars={5}
                  starDimension="15px"
                  starSpacing="2px"
                />
              </span>
            </h1>
          </div>
          <h1 className="text-xl font-bold ml-3">
            {" "}
            $<span className="text-2xl text-green-600">{price}</span>{" "}
          </h1>
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
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle  btn-outline mr-2"
          >
            <FaTimes className="text-2xl"></FaTimes>
          </button>
          <button
            onClick={() => handleAddConfirm(_id)}
            className="btn btn-circle btn-outline"
          >
            {!added ? (
              <FaPen className="text-2xl"></FaPen>
            ) : (
              <FaCheck className="text-2xl"></FaCheck>
            )}
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default MyToy;
