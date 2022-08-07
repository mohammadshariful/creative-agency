import React from "react";
const ServiceRow = ({ service: { _id, name, icon, description } }) => {
  return (
    <article className="bg-white my-3 p-5 rounded-lg text-center hover:shadow-xl hover:bg-secondary hover:text-white ">
      <img
        className="w-16 lg:w-20 mx-auto transform hover:scale-75"
        src={icon}
        alt={name}
      />
      <h3 className="text-lg lg:text-xl font-semibold mt-1">{name}</h3>
      <p className="text-base">{description}</p>
    </article>
  );
};

export default ServiceRow;
