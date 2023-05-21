import React, { useEffect, useState } from "react";
import Toys from "./Toys";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [displayedToys, setDisplayedToys] = useState([]);
  const [showAllToys, setShowAllToys] = useState(false);
  const toysPerPage = 6;

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    if (showAllToys) {
      setDisplayedToys(toys);
    } else {
      setDisplayedToys(toys.slice(0, toysPerPage));
    }
  }, [toys, showAllToys]);

  const handleViewMore = () => {
    setShowAllToys(true);
  };

  const handleShowLess = () => {
    setShowAllToys(false);
  };

  return (
    <div className="mx-5 px-5 my-10 place-content-center">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="pl-8">Name</th>
              <th>Details</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>

          {displayedToys.map((toys, index) => (
            <Toys key={toys._id} toys={toys} serialNumber={index + 1} />
          ))}
        </table>
      </div>

      <div className="flex justify-center">
        {!showAllToys && toys.length > toysPerPage && (
          <button
            onClick={handleViewMore}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none"
          >
            View More
          </button>
        )}
        {showAllToys && (
          <button
            onClick={handleShowLess}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none"
          >
            Show Less
          </button>
        )}
      </div>
      <div className="text-center mt-10">
        <button className="w-1/2 btn btn-outline text-blue-500">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default AllToys;
