import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ToyDetails = () => {
  const { id } = useParams();
  const [toyDetails, setToyDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/alltoys/${id}`);
        const data = await response.json();
        setToyDetails(data);
      } catch (error) {
        console.error("Error fetching toy details:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {toyDetails && (
        <div className=" w-2/3 bg-base-100 shadow-2xl my-8 mx-auto">
          <img
            className="h-64 w-full object-cover mx-auto"
            src={toyDetails.toyImg}
          />

          <div className="card-body">
            <h2 className="card-title text-pink-600 text-2xl font-bold">
              {toyDetails.toyName}{" "}
              <span className="text-sm text-black">
                ({toyDetails.subCategory})
              </span>
            </h2>

            <p className="text-sm">
              by{" "}
              <span className="text-base text-blue-400 font-bold">
                {toyDetails.seller}
              </span>
            </p>

            <div className="grid grid-cols-3">
              <div>
                <p className="font-bold text-green-700 text-2xl">
                  $
                  <span className="text-4xl text-orange-500">
                    {toyDetails.price}
                  </span>
                </p>
              </div>

              <div>
                <p>
                  <StarRatings
                    rating={Number(toyDetails.ratings)}
                    starRatedColor="green"
                    starEmptyColor="lightgray"
                    numberOfStars={5}
                    starDimension="30px"
                    starSpacing="4px"
                  />
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-green-600">
                  Quantity:{" "}
                  <span className="text-4xl text-orange-500">
                    {toyDetails.availableQuantity}+
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full gap-4 flex">
              <button className="btn btn-primary w-1/2 mt-2">Delete</button>
              <button className="btn btn-primary w-1/2 mt-2">Edit</button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center">
        <button className="w-1/2 btn btn-outline text-blue-500">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ToyDetails;
