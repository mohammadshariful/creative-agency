import React from "react";
import coation from "../../assets/images/coatation.png";
import customer from "../../assets/images/customer-3.png";
const TestmimonialRow = () => {
  return (
    <article className="bg-white my-3 p-5 rounded-lg shadow-md">
      <div className="flex items-center justify-center lg:justify-start flex-col lg:flex-row">
        <img className="w-12" src={customer} alt="" />
        <h5 className="lg:text-lg font-bold ml-2">Bra Malone</h5>
      </div>
      <img className="my-1" src={coation} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
        ipsum duis laoreet maecenas. Feugiat
      </p>
    </article>
  );
};

export default TestmimonialRow;
