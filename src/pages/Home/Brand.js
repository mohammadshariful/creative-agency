import React from "react";
import airbnb from "../../assets/logos/airbnb.png";
import google from "../../assets/logos/google.png";
import netflix from "../../assets/logos/netflix.png";
import slack from "../../assets/logos/slack.png";
import uber from "../../assets/logos/uber.png";
const Brand = () => {
  return (
    <section className="w-[90%] mx-auto my-5">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
        <li>
          <img className="w-16 lg:w-36" src={slack} alt="" />
        </li>
        <li>
          <img className="w-16 lg:w-36" src={google} alt="" />
        </li>
        <li>
          <img className="w-16 lg:w-28" src={uber} alt="" />
        </li>
        <li>
          <img className="w-16 lg:w-32" src={netflix} alt="" />
        </li>
        <li>
          <img className="w-24 lg:w-36" src={airbnb} alt="" />
        </li>
      </ul>
    </section>
  );
};

export default Brand;
