import React from "react";
import TestmimonialRow from "./TestmimonialRow";

const Testimonial = () => {
  const services = [1, 2, 3];
  return (
    <section className="w-[90%] mx-auto my-5">
      <h2 className="text-center font-semibold text-xl lg:text-3xl ">
        Clients <span className="text-secondary">Feedback</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-4 lg:gap-4">
        {services.map((info, index) => (
          <TestmimonialRow key={index} info={info} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
