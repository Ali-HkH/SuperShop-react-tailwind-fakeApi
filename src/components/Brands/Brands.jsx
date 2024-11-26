import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Brands() {
   return (
      <div className="container py-8 md:py-12 mb-8">
         <Swiper
            breakpoints={{
               DEFAULT: {
                  spaceBetween: 10,
                  slidesPerView: 2,
               },
               560: {
                  spaceBetween: 40,
                  slidesPerView: 2,
               },
               640: {
                  spaceBetween: 80,
                  slidesPerView: 2,
               },
               768: {
                  spaceBetween: 80,
                  slidesPerView: 3,
               },
               992: {
                  spaceBetween: 40,
                  slidesPerView: 4,
               },
               1200: {
                  spaceBetween: 40,
                  slidesPerView: 6,
               },
            }}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
            className="mySwiper"
         >
            <SwiperSlide>
               <div className="w-auto aspect-auto group overflow-hidden border cursor-pointer border-gray-300/60">
                  <img
                     src={`${process.env.PUBLIC_URL}/images/brands/brand1.png`}
                     alt="brand"
                     className="w-full group-hover:scale-110 transition-all duration-300"
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-auto aspect-auto group overflow-hidden border cursor-pointer border-gray-300/60">
                  <img
                     src={`${process.env.PUBLIC_URL}/images/brands/brand2.png`}
                     alt="brand"
                     className="w-full group-hover:scale-110 transition-all duration-300"
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-auto aspect-auto group overflow-hidden border cursor-pointer border-gray-300/60">
                  <img
                     src={`${process.env.PUBLIC_URL}/images/brands/brand3.png`}
                     alt="brand"
                     className="w-full group-hover:scale-110 transition-all duration-300"
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-auto aspect-auto group overflow-hidden border cursor-pointer border-gray-300/60">
                  <img
                     src={`${process.env.PUBLIC_URL}/images/brands/brand4.png`}
                     alt="brand"
                     className="w-full group-hover:scale-110 transition-all duration-300"
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-auto aspect-auto group overflow-hidden border cursor-pointer border-gray-300/60">
                  <img
                     src={`${process.env.PUBLIC_URL}/images/brands/brand1.png`}
                     alt="brand"
                     className="w-full group-hover:scale-110 transition-all duration-300"
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-auto aspect-auto group overflow-hidden border cursor-pointer border-gray-300/60">
                  <img
                     src={`${process.env.PUBLIC_URL}/images/brands/brand2.png`}
                     alt="brand"
                     className="w-full group-hover:scale-110 transition-all duration-300"
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-auto aspect-auto group overflow-hidden border cursor-pointer border-gray-300/60">
                  <img
                     src={`${process.env.PUBLIC_URL}/images/brands/brand5.png`}
                     alt="brand"
                     className="w-full group-hover:scale-110 transition-all duration-300"
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="w-auto aspect-auto group overflow-hidden border cursor-pointer border-gray-300/60">
                  <img
                     src={`${process.env.PUBLIC_URL}/images/brands/brand6.png`}
                     alt="brand"
                     className="w-full group-hover:scale-110 transition-all duration-300"
                  />
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
}

export default Brands;
