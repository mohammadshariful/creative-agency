import React from "react";
import Banner from "./Banner";
import Brand from "./Brand";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Brand />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
