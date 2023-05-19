import React, { useContext, useEffect, useState } from "react";
import SocialLogIn from "./SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const LoginPage = () => {
  const { loginUser, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(user.photoURL);
          Swal.fire("Login Successful");
        })
        .catch((error) => {
          Swal.fire("Failed", ":", error.message);
        });
      console.log(email, password);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="flex my-3 md:my-7 justify-center">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Please Login
        </h2>
        <form className="">
          <div className="form-control">
            <label className="input-group justify-center">
              <span>Email</span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="info@site.com"
                className="input input-bordered"
                required
              />
            </label>
          </div>
          <div className="form-control my-8">
            <label className="input-group justify-center">
              <span>Password</span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={`${showPassword ? "text" : "password"}`}
                placeholder="xxxxxxxxx"
                className="input input-bordered"
                required
              />
              <button
                className={`btn  ${
                  showPassword ? "btn-secondary" : "btn-primary"
                }`}
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </label>
          </div>

          <button
            onClick={handleLogin}
            type="submit"
            className="w-full bg-[#2596be] hover:bg-pink-400 text-white py-2 rounded-lg"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-blue-400">
            New to The Toy Lab ?{" "}
            <span className="text-pink-500 font-bold">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </div>
        <SocialLogIn></SocialLogIn>
      </div>
    </div>
  );
};

export default LoginPage;
