import React from "react";
import "./banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules"; //modules
import "swiper/css/navigation"; //arrows
import banner__images from "../../assets/Banners/data";

export default function Banner() {
  return (
    <div className="banner_images">
      <Swiper
      className="swiper__container"
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 300000, disableOnInteraction: false }}
        navigation={true}
        loop={false}
        
      >
        {banner__images.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={img} alt="Banner Img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
