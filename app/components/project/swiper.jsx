//? FOR SINGLE "PROJECT" PAGE
"use client";

// SWIPER IMPORTS - CSS & MODULES
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

// STYLES
// import "@/public/styles/components/page/project/project_swiper.css";

const ProjectSwiper = ({ images }) => {
  return (
    <Swiper
      navigation
      modules={[Navigation]}
      speed={500}
      slidesPerView={1}
      loop
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
    >
      {images.map((each, index) => {
        return (
          <SwiperSlide
            key={index}
            style={{
              // height: "75vh",
              maxWidth: "100%",
            }}
          >
            <img
              src={each}
              alt={`slide`}
              style={{
                maxWidth: "100%",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProjectSwiper;
