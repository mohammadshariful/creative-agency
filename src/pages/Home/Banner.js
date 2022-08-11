import React from "react";
import banner from "../../assets/images/Frame.png";
const Banner = () => {
  return (
    <section className="h-[80vh] md:h-[60vh] lg:h-[80vh] bg-secondary banner box-border">
      <div className="w-[90%] mx-auto flex justify-between items-center py-5">
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#03203C] to-[#24292F]">
            Let's Grow Your Brand To The Next Level
          </h1>
          <p className="lg:text-lg font-normal my-4">
            As a full-service place marketing agency,Bandwagon beffs up the
            human connectio between brands,people and places.
          </p>
          <button className="bg-[#24292F] text-white rounded-md px-3 py-1 font-semibold text-xl hover:bg-transparent border-[#24292F] border-2 hover:border-2 block mx-auto lg:mx-0  w-40">
            Hire Us
          </button>
        </div>
        <div className=" hidden lg:block w-3/4">
          <img className="max-w-md mx-auto" src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
