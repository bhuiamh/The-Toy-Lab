import React, { useContext, useEffect, useState } from "react";
import SocialLogIn from "./SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

function SignUpPage() {
  const { registerUser, user, auth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegistration = async (event) => {
    event.preventDefault();

    setError("");
    if (!/^(?=.*[0-9])/.test(password)) {
      setError("⚠️ Password must have at least one number");
      Swal.fire.error(error);
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      setError("⚠️ Password must have at least one uppercase letter");
      Swal.fire.error(error);
      return;
    } else if (!/^(?=.*[@$!%*#?&])/.test(password)) {
      setError("⚠️ Password must have at least one special character.");
      Swal.fire.error(error);
      return;
    } else if (!/^(?=.{8,})/.test(password)) {
      setError("⚠️ Password must be at least 8 characters long.");
      Swal.fire.error(error);
      return;
    }

    if (name && email && password) {
      try {
        await registerUser(email, password);

        Swal.fire.success("Registration and profile update successful");
      } catch (error) {
        Swal.fire.error(
          "Registration and profile update error:",
          error.message
        );
      }
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
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form className="" onSubmit={handleRegistration}>
          <div className="form-control mb-2 md:mb-8">
            <label className="input-group justify-center">
              <span>Name</span>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="John Doe"
                className="input input-bordered"
                required
              />
            </label>
          </div>
          <div className="form-control mb-2 md:mb-8">
            <label className="input-group justify-center">
              <span>Email</span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="info@site.com"
                className="input input-bordered"
                required
              />
            </label>
          </div>
          <div className="form-control mb-2 md:mb-8">
            <label className="input-group justify-center">
              <span>Password</span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="xxxxxxxx"
                className="input input-bordered"
                required
              />{" "}
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
            type="submit"
            className="w-full bg-[#2596be] hover:bg-pink-400 text-white py-2 rounded-lg"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-blue-400">
            Already have an account?{" "}
            <span className="text-pink-500 font-bold">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
        <SocialLogIn />
      </div>
    </div>
  );
}

export default SignUpPage;
