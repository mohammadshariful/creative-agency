import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = (loading) => {
  return (
    <div className=" absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2">
      <MoonLoader color={"#24f4a5"} loading={loading} size={50} />
    </div>
  );
};

export default Loading;
