import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
