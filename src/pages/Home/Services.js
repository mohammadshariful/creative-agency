import React from "react";
import useQueryDataLoad from "../../hooks/useQueryDataLoad";
import ServiceRow from "./ServiceRow";

const Services = () => {
  const url = "services.json";
  const {
    data: services,
    isLoading,
    isError,
  } = useQueryDataLoad("services", url);
  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <section className="w-[90%] mx-auto my-5">
      <h2 className="text-center font-semibold text-xl lg:text-3xl ">
        Provide awesome <span className="text-secondary">services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-4 lg:gap-4">
        {services.map((service) => (
          <ServiceRow key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
