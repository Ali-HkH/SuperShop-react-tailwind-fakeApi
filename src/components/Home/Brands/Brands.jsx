import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BrandBox from "../BrandBox/BrandBox";

const swiper_custom_breakpoints = {
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
};

function Brands() {
   return (
      <div className="container py-8 md:py-12 mb-8">
         <Swiper
            breakpoints={swiper_custom_breakpoints}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
            className="mySwiper"
         >
            <SwiperSlide>
               <BrandBox
                  img={`${process.env.PUBLIC_URL}/images/brands/brand1.png`}
               />
            </SwiperSlide>
            <SwiperSlide>
               <BrandBox
                  img={`${process.env.PUBLIC_URL}/images/brands/brand2.png`}
               />
            </SwiperSlide>
            <SwiperSlide>
               <BrandBox
                  img={`${process.env.PUBLIC_URL}/images/brands/brand3.png`}
               />
            </SwiperSlide>
            <SwiperSlide>
               <BrandBox
                  img={`${process.env.PUBLIC_URL}/images/brands/brand4.png`}
               />
            </SwiperSlide>
            <SwiperSlide>
               <BrandBox
                  img={`${process.env.PUBLIC_URL}/images/brands/brand1.png`}
               />
            </SwiperSlide>
            <SwiperSlide>
               <BrandBox
                  img={`${process.env.PUBLIC_URL}/images/brands/brand2.png`}
               />
            </SwiperSlide>
            <SwiperSlide>
               <BrandBox
                  img={`${process.env.PUBLIC_URL}/images/brands/brand5.png`}
               />
            </SwiperSlide>
            <SwiperSlide>
               <BrandBox
                  img={`${process.env.PUBLIC_URL}/images/brands/brand6.png`}
               />
            </SwiperSlide>
         </Swiper>
      </div>
   );
}

export default Brands;
