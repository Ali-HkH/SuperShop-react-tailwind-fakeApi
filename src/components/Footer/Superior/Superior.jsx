import SuperiorBox from "../SuperiorBox/SuperiorBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const swiper_custom_breakpoints = {
   DEFAULT: {
      spaceBetween: 40,
      slidesPerView: 1,
   },
   640: {
      spaceBetween: 60,
      slidesPerView: 2,
   },
   768: {
      spaceBetween: 100,
      slidesPerView: 2,
   },
   992: {
      spaceBetween: 140,
      slidesPerView: 3,
   },
   1200: {
      spaceBetween: 200,
      slidesPerView: 3,
   },
};
const swiper_custom_styles = {
   "--swiper-pagination-color": "#fcd34d",
   "--swiper-pagination-bullet-inactive-color": "#999999",
   "--swiper-pagination-bullet-inactive-opacity": "1",
   "--swiper-pagination-bullet-size": "12px",
   "--swiper-pagination-bullet-horizontal-gap": "8px",
};

function Superior() {
   return (
      <div className="container-fluid bg-indigo-700 py-2">
         <div className="container">
            <Swiper
               breakpoints={swiper_custom_breakpoints}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination]}
               onSwiper={(swiper) => {
                  if (swiper.pagination.el) {
                     swiper.pagination.el.style.position = "static";
                     swiper.pagination.el.style.paddingTop = "20px";
                  }
               }}
               style={swiper_custom_styles}
               className="mySwiper"
            >
               <SwiperSlide>
                  <SuperiorBox title="GIFT VOUCHER" icon="gift" />
               </SwiperSlide>
               <SwiperSlide>
                  <SuperiorBox title="TESTIMONIALS" icon="face-smile" />
               </SwiperSlide>
               <SwiperSlide>
                  <SuperiorBox title="GUIDE ORDER" icon="shopping-bag" />
               </SwiperSlide>
               <SwiperSlide>
                  <SuperiorBox title="GIFT VOUCHER" icon="gift" />
               </SwiperSlide>
               <SwiperSlide>
                  <SuperiorBox title="TESTIMONIALS" icon="face-smile" />
               </SwiperSlide>
               <SwiperSlide>
                  <SuperiorBox title="GUIDE ORDER" icon="shopping-bag" />
               </SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
}

export default Superior;
