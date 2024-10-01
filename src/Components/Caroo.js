import React from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import CarouselComponent from "./CarouselComp";

export default function SwiperHome() {
  return (
    <>
      <CarouselComponent></CarouselComponent>
    </>
  );
}
