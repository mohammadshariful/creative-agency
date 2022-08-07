import React from "react";
import google from "../assets/social-icons/google.png";
const SocialLogin = () => {
  return (
    <>
      <div className="divider">OR</div>
      <button className="w-full flex justify-center items-center border-2  rounded-full p-1">
        <img src={google} alt="google" />
        <span className="font-semibold">Continue with Google</span>
      </button>
    </>
  );
};

export default SocialLogin;
