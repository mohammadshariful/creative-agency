import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import google from "../assets/social-icons/google.png";
import auth from "../firebase.config";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="divider">OR</div>
      <button
        onClick={() => signInWithGoogle()}
        className="w-full flex justify-center items-center border-2  rounded-full p-1"
      >
        <img src={google} alt="google" />
        <span className="font-semibold">Continue with Google</span>
      </button>
      <p className="mt-2 text-error text-center">{error && error.message}</p>
    </>
  );
};

export default SocialLogin;
