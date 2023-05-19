import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="">
      <div className="navbar px-5 md:px-20 py-2 border border-red-400">
        <div className="flex-1">
          <img src={logo} alt="" className="h-10 md:h-24 w-auto" />
        </div>
        <div className="flex md:hidden">
          <button className="btn btn-ghost" onClick={handleMenuClick}>
            Menu
          </button>
          {showMenu && (
            <div className="flex flex-col mt-2">
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
            </div>
          )}
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
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <p>
                  <Link to="/login">Login</Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
