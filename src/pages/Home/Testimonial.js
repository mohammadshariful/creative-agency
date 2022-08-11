import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestmimonialRow from "./TestmimonialRow";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import useQueryDataLoad from "../../hooks/useQueryDataLoad";
import Loading from "../../shared/Loading";
const Testimonial = () => {
  const url = "testimonials.json";
  const {
    data: users,
    isLoading,
    isError,
  } = useQueryDataLoad("testimonials", url);
  if (isLoading) {
    return <Loading loading={isLoading} />;
  }
  return (
    <section className="w-[90%] mx-auto my-5">
      <h2 className="text-center font-semibold text-xl lg:text-3xl ">
        Clients <span className="text-secondary">Feedback</span>
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
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
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {users.map((user) => (
          <SwiperSlide key={user._id}>
            <TestmimonialRow user={user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
