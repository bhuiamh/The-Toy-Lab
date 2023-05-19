import React, { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

import { AuthContext } from "../../../providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {});
  };

  return (
    <div className="">
      <div className="navbar px-5 md:px-20 py-2 border border-red-400">
        <div className="flex-1">
          <img src={logo} alt="" className="h-10 md:h-24 w-auto" />
        </div>
        <div className="flex md:hidden dropdown dropdown-end relative">
          <button tabIndex={0} className="btn btn-ghost">
            Menu
          </button>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute top-full left-[-100px]"
          >
            <ul>
              <button className="btn btn-ghost">
                <Link to="/">Home</Link>
              </button>
            </ul>

            <ul>
              <button className="btn btn-ghost">
                <Link to="/alltoys">All Toys</Link>
              </button>
            </ul>
            <ul>
              <button className="btn btn-ghost">
                <Link to="/mytoys">My Toys</Link>
              </button>
            </ul>
            <ul>
              <button className="btn btn-ghost">
                <Link to="/addatoy">Add A Toy</Link>
              </button>
            </ul>
            <ul>
              <button className="btn btn-ghost">
                <Link to="/blog">Blogs</Link>
              </button>
            </ul>
          </ul>
        </div>
        <div className="hidden md:block grow">
          <button className="btn btn-ghost mr-2">
            <Link to="/">Home</Link>
          </button>
          <button className="btn btn-ghost mr-2">
            <Link to="/alltoys">All Toys</Link>
          </button>
          <button className="btn btn-ghost mr-2">
            <Link to="/mytoys">My Toys</Link>
          </button>
          <button className="btn btn-ghost mr-2">
            <Link to="/addatoy">Add A Toy</Link>
          </button>
          <button className="btn btn-ghost">
            <Link to="/blog"> Blogs</Link>
          </button>
        </div>
        {user ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Tooltip title={user?.displayName}>
                    <img
                      src={user?.photoURL}
                      alt="User Photo"
                      width="50"
                      height="auto"
                      className="rounded-circle border border-danger"
                    />
                  </Tooltip>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="text-pink-500 font-bold">{user?.displayName}</p>
                </li>
                <li>
                  <p>
                    {" "}
                    <Link to="/mytoys">My Toys</Link>
                  </p>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button className="btn btn-ghost">
            {" "}
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
