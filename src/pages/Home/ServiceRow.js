import React from "react";
import web from "../../assets/services/service3.png";
const ServiceRow = () => {
  return (
    <article className="bg-white my-3 p-5 rounded-lg text-center hover:shadow-xl hover:bg-secondary hover:text-white ">
      <img
        className="w-16 lg:w-20 mx-auto transform hover:scale-75"
        src={web}
        alt=""
      />
      <h3 className="text-lg lg:text-xl font-semibold mt-1">Web Development</h3>
      <p className="text-base">
        With well written codes, we build amazing apps for all platforms, mobile
        and web apps in general.
      </p>
    </article>
  );
};

export default ServiceRow;
