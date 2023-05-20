import React, { useEffect, useState } from "react";
import Toy from "./Toy";

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
      <div className="grid grid-cols-1 md:grid-cols-3">
        {displayedToys.map((toy) => (
          <Toy key={toy._id} toy={toy} />
        ))}
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
    </div>
  );
};

export default AllToys;
