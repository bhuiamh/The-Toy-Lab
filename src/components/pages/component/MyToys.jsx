import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToy from "./MyToy";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [displayedToys, setDisplayedToys] = useState([]);
  const [showAllToys, setShowAllToys] = useState(false);
  const [added, setAdded] = useState(false);
  const toysPerPage = 6;
  const url = `https://the-toy-lab-server.vercel.app/mytoys?email=${user?.email}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "The-Toy-Lab-Token"
            )}`,
          },
        });
        const data = await response.json();

        if (!data.error) {
          setToys(data);
        }
      } catch (error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error Fetching Data",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    };

    fetchData();
  }, [url]);

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

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`https://the-toy-lab-server.vercel.app/mytoys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Toy Deleted Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };
  const handleAddConfirm = (id) => {
    setAdded((prevState) => !prevState);
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
              <th>Action</th>
            </tr>
          </thead>

          {displayedToys.map((toys, index) => (
            <MyToy
              key={toys._id}
              toys={toys}
              serialNumber={index + 1}
              handleDelete={handleDelete}
              handleAddConfirm={handleAddConfirm}
              added={added}
            />
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

export default MyToys;
