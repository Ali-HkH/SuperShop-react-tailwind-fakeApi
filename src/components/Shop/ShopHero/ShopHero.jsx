import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ShopHeroCategory from "../ShopHeroCategory/ShopHeroCategory";
import ShopSlide from "../ShopSlide/ShopSlide";
import { useRef } from "react";

function ShopHero({ categoryCount }) {
   const swiperRef = useRef();

   return (
      <div className="relative w-[88vw] md:w-full">
         {/* slider btns */}
         <div className="w-full absolute top-[45%] md:top-[30%] lg:top-[45%] flex justify-between items-center z-20">
            {/* prev button */}
            <button
               onClick={() => swiperRef.current?.slidePrev()}
               className="flex items-center justify-center p-1.5 size-[35px] bg-black/35 hover:bg-indigo-700 text-white transition-colors"
            >
               <svg className="size-6 rotate-180">
                  <use href="#chevron-right"></use>
               </svg>
            </button>
            {/* next button */}
            <button
               onClick={() => swiperRef.current?.slideNext()}
               className="flex items-center justify-center p-1.5 size-[35px] bg-black/35 hover:bg-indigo-700 text-white transition-colors"
            >
               <svg className="size-6">
                  <use href="#chevron-right"></use>
               </svg>
            </button>
         </div>
         <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
            className="mySwiper"
         >
            <SwiperSlide>
               <ShopSlide
                  img={`${process.env.PUBLIC_URL}/images/shop/slide2.jpg`}
                  title="NEW TECHNOLOGY"
                  off="32%"
               />
            </SwiperSlide>
            <SwiperSlide>
               <ShopSlide
                  img={`${process.env.PUBLIC_URL}/images/shop/slide1.jpg`}
                  title="NEW FASHION"
                  off="45%"
               />
            </SwiperSlide>
            <SwiperSlide>
               <ShopSlide
                  img={`${process.env.PUBLIC_URL}/images/shop/slide3.jpg`}
                  title="JEWELRY-BRACELETS"
                  off="35%"
               />
            </SwiperSlide>
         </Swiper>
         {/* category */}
         <ShopHeroCategory categoryCount={categoryCount} />
      </div>
   );
}

export default ShopHero;
