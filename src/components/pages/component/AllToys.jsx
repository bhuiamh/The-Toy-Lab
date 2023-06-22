import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Toy from "./Toy";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const loading = useRef(true);

  useEffect(() => {
    fetch("https://the-toy-lab-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        loading.current = false;
      });
  }, []);
  console.log(toys);

  return (
    <div className="mx-5 px-5 my-10 place-content-center">
      <div className="grid md:grid-cols-3  grid-cols-1">
        {loading.current ? (
          <div
            className="radial-progress"
            style={{
              "--value": "70",
              "--size": "12rem",
              "--thickness": "2rem",
            }}
          >
            70%
          </div>
        ) : (
          toys.map((toy) => <Toy key={toy._id} toy={toy} />)
        )}
      </div>

      <div className="flex justify-center">
        <button>Pagination Will Appear here</button>
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
