import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import AdSlide from "../AdSlide/AdSlide";

function AdBox() {
   return (
      <div className="w-full hidden md:inline-block">
         <div className="bg-indigo-700 text-white font-semibold px-8 py-2">
            <span className="block text-xl leading-none">WEEK</span>{" "}
            <span className="text-4xl leading-none">BIG SALE</span>
         </div>
         <Swiper
            pagination={true}
            modules={[Pagination]}
            style={{
               "--swiper-pagination-color": "#4f46e5",
               "--swiper-pagination-bullet-inactive-color": "#999999",
               "--swiper-pagination-bullet-inactive-opacity": "1",
               "--swiper-pagination-bullet-size": "18px",
               "--swiper-pagination-bullet-horizontal-gap": "4px",
            }}
            className="mySwiper"
         >
            <SwiperSlide>
               <AdSlide
                  img={`${process.env.PUBLIC_URL}/images/Ads/Ad2.jpg`}
                  title="HANBAGS STYLE 2018"
                  off="20% OFF"
               />
            </SwiperSlide>
            <SwiperSlide>
               <AdSlide
                  img={`${process.env.PUBLIC_URL}/images/Ads/Ad1.jpg`}
                  title="New Collection"
                  off="40% OFF"
               />
            </SwiperSlide>
            <SwiperSlide>
               <AdSlide
                  img={`${process.env.PUBLIC_URL}/images/Ads/Ad3.jpg`}
                  title="SUMMER STYLE"
                  off="30% OFF"
               />
            </SwiperSlide>
         </Swiper>
      </div>
   );
}

export default AdBox;
