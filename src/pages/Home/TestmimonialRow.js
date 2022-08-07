import React from "react";
import coation from "../../assets/images/coatation.png";
const TestmimonialRow = ({ user: { name, picture, review } }) => {
  return (
    <article className="h-56 bg-white my-3 p-5 rounded-lg shadow-md">
      <div className="flex items-center justify-center lg:justify-start flex-col lg:flex-row">
        <img className="w-12" src={picture} alt={name} />
        <h5 className="lg:text-lg font-bold ml-2">{name}</h5>
      </div>
      <img className="my-1" src={coation} alt="" />
      <p>{review}</p>
    </article>
  );
};

export default TestmimonialRow;
