//? FOR SINGLE "PROJECT" PAGE
"use client";
import Image from "next/image";
import { useState } from "react";

// SWIPER IMPORTS - CSS & MODULES
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const PropertySwiper = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        id="main"
        modules={[Navigation, Thumbs]}
        style={{
          width: "100%",
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        speed={500}
        slidesPerView={1}
      >
        {images.map((each, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={each}
                alt={`slide`}
                style={{ width: "100%", height: "auto" }}
                width={786}
                height={591}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* THUMBNAILS SWIPER */}
      <Swiper
        id="thumbs"
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        style={{ width: "100%", marginTop: "2.5px" }}
      >
        {images.map((each, index) => {
          return (
            <SwiperSlide key={`slide - ${index}`}>
              <Image
                src={each}
                alt={`slide-${index}`}
                style={{ width: "100%", height: "auto" }}
                width={786}
                height={591}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PropertySwiper;
