import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../assets/portfolio/carousel-1.png";
import img2 from "../../assets/portfolio/carousel-2.png";
import img4 from "../../assets/portfolio/carousel-4.png";
import img5 from "../../assets/portfolio/carousel-5.png";
// import required modules
import { Autoplay, Pagination } from "swiper";
const Portfolio = () => {
  const services = [img1, img2, img4, img5];
  return (
    <section
      style={{
        background: "#24292F",
      }}
      className=" my-5 py-5"
    >
      <div className="w-[90%] mx-auto my-5">
        <h2 className="text-center font-semibold text-xl lg:text-3xl text-white mb-4">
          Here are some of
          <span className="text-secondary"> our works</span>
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {services.map((src, index) => (
            <SwiperSlide key={index}>
              <img className="w-96 mx-auto" src={src} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
