//? FOR SINGLE "PROJECT" PAGE
"use client";
// SWIPER IMPORTS - CSS & MODULES
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// STYLES
import styles from "@/public/styles/components/page/home/development_swiper.module.scss";
import Image from "next/image";
import Link from "next/link";

const DevelopmentSwiper = () => {
  const developments = [
    {
      title: "Grand Views",
      price: "Ask for price",
      location: "Meydan",
      units: "476",
      url: "/projects/6000d4c6fc5bb6333473a267",
      imageUrl: "/images/pages/home/featured_developments/grand-views.jpg",
    },
    {
      title: "Muraba",
      price: "From AED 4,800,000",
      location: "Palm Jumeirah",
      units: "50",
      url: "/projects/6000d4c6fc5bb6333473a266",
      imageUrl: "/images/pages/home/featured_developments/muraba.jpg",
    },
    {
      title: "Al Ghadeer",
      price: "From AED 310,000",
      location: "Al Ghadeer, Abu Dhabi",
      units: "14,408",
      url: "/projects/6000d4c6fc5bb6333473a265",
      imageUrl: "/images/pages/home/featured_developments/ghadeer-villas.jpg",
    },
  ];
  return (
    <Swiper
      speed={500}
      slidesPerView={1.5}
      className={styles.swiper_container}
      centeredSlides
      spaceBetween={35}
    >
      {developments.map((each, index) => {
        return (
          <SwiperSlide key={index} className={`${styles.swiper_slide}`}>
            <Image
              src={each.imageUrl}
              alt={`${each.title}`}
              width={1600}
              height={800}
            />
            <div className={styles.overlay}>
              <div className={styles.overlay_flex}>
                <div className={styles.overlay_title}>{each.title}</div>
                <div className={styles.overlay_price}>{each.price}</div>
              </div>
              <div className={styles.overlay_location}>
                Location: {each.location}
              </div>
              <div className={styles.overlay_units}>
                Units available: {each.units}
              </div>
              <Link href={each.url} className={styles.overlay_link}>
                LEARN MORE
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default DevelopmentSwiper;
