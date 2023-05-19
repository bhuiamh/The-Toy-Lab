import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogIn = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="mt-9">
      <div className="divider">Or login with social media</div>
      <div className="flex mx-3 gap-2">
        <div className="w-full">
          <button onClick={handleGoogleSignIn} className="btn btn-outline">
            Login With Google
          </button>
        </div>
        <div className="w-full">
          <button onClick={handleGoogleSignIn} className="btn btn-outline">
            Login With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogIn;
