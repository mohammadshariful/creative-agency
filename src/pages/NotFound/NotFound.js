import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import notfound from "../../assets/images/notfoundImg.png";
const NotFound = () => {
  return (
    <section className="h-[60vh] flex justify-center items-center">
      <div>
        <img src={notfound} alt="" />
        <Link
          to="/"
          className="text-red-500 font-semibold mt-2  flex items-center gap-2 hover:text-secondary"
        >
          <FaArrowLeft />
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
