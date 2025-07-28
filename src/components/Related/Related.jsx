import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import RelatedBox from "./RelatedBox/RelatedBox";
import ProductBox from "../Shop/ProductBox/ProductBox"

function Related({ related, isShop }) {
   const swiperRef = useRef();

   const getRandomRelateds = (array) => {
      const shuffledArray = array.sort(() => 0.5 - Math.random());
      return shuffledArray.slice(0, 5);
   };

   const randomArrays = getRandomRelateds(related);

   return (
      <div className="w-[86vw] md:w-full mt-12">
         <div className="flex items-center justify-between mb-8">
            <h1 className="text-[22px] font-bold"> {isShop ? "UPSELL PRODUCTS" : "RELATED POSTS"}</h1>
            {/* navigation */}
            <div className="flex justify-center items-center gap-x-1">
               {/* prev button */}
               <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="flex items-center justify-center p-1.5 size-[30px] bg-black/35 hover:bg-indigo-700 text-white transition-colors"
               >
                  <svg className="size-6 rotate-180">
                     <use href="#chevron-right"></use>
                  </svg>
               </button>
               {/* next button */}
               <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="flex items-center justify-center p-1.5 size-[30px] bg-black/35 hover:bg-indigo-700 text-white transition-colors"
               >
                  <svg className="size-6">
                     <use href="#chevron-right"></use>
                  </svg>
               </button>
            </div>
         </div>
         <Swiper
            breakpoints={{
               DEFAULT: {
                  spaceBetween: 10,
                  slidesPerView: 1,
               },
               560: {
                  spaceBetween: 20,
                  slidesPerView: 2,
               },
               768: {
                  spaceBetween: 60,
                  slidesPerView: 1,
               },
               1024: {
                  spaceBetween: 60,
                  slidesPerView: 2,
               },
               1280: {
                  spaceBetween: 20,
                  slidesPerView: 3,
               },
            }}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
            className="mySwiper"
         >
            {isShop
               ? randomArrays.map((product) => (
                    <SwiperSlide key={product.id}>
                       <ProductBox {...product}/>
                    </SwiperSlide>
                 ))
               : randomArrays.map((post) => (
                    <SwiperSlide key={post.id}>
                       <RelatedBox
                          id={post.id}
                          img={post.img}
                          author={post.author}
                          date={post.date}
                          day={post.day}
                          comment={post.comment}
                       />
                    </SwiperSlide>
                 ))}
         </Swiper>
      </div>
   );
}

export default Related;
