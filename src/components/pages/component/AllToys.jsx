import React, { useEffect, useState } from "react";
import Toy from "./Toy";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div className="mx-5 px-5 my-10 place-content-center">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {toys.map((toy) => (
          <Toy key={toy._id} toy={toy}></Toy>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
