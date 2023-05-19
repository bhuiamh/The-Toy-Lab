// import React from "react";
// import { Navigate, useLocation } from "react-router";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";

// const PrivateRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   const location = useLocation();
//   if (user) {
//     return children;
//   }

//
// };

// export default PrivateRoute;
import React from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
