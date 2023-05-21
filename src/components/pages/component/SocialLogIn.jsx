import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const SocialLogIn = () => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleGitHubLogIn = () => {
    githubSignIn()
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "GitHub Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: errorMessage,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="mt-9">
      <div className="divider">Or login with social media</div>
      <div className="flex mx-3 gap-2">
        <div className="w-full">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline hover:bg-pink-400 text-yellow-500"
          >
            Login With Google
          </button>
        </div>
        <div className="w-full">
          <button
            onClick={handleGitHubLogIn}
            className="btn btn-outline hover:bg-pink-400 text-blue-400"
          >
            Login With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogIn;
