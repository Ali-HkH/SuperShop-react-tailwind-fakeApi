import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// components
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import FAQBox from "../../components/FAQBox/FAQBox";
import AdBox from "../../components/AdBox/AdBox";
import ShopSlide from "../../components/ShopSlide/ShopSlide";
import ProductBox from "../../components/ProductBox/ProductBox";
import ProductBoxList from "../../components/ProductBoxList/ProductBoxList";
import Pagination from "../../components/Pagination/Pagination";
// swiper package
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Shop() {
   // refs and params
   const swiperRef = useRef();
   const shopHeadingRef = useRef();
   const { shopCategory } = useParams();
   // states
   const [categoryCount, setCategoryCount] = useState({});
   const [allProducts, setAllProducts] = useState([]);
   const [shownProducts, setShownProducts] = useState([]);
   const [shopDisplay, setShopDisplay] = useState("Grid");
   const [priceFilterValue, setPriceFilterValue] = useState(1000);

   // callback function for getting category count from CategoryBox component
   const getCategoryCount = (data) => {
      setCategoryCount(data);
   };
   // callback function for paginating products from Pagination component
   const getShownProducts = (products) => {
      setShownProducts(products);
   };

   // main functions
   const getAllProducts = async () => {
      try {
         const response = await axios.get("https://fakestoreapi.com/products");
         const products = response.data;
         setAllProducts(products);
      } catch (error) {
         console.log("something went wrong.", error);
      }
   };
   const getProductFromCategory = async (category) => {
      try {
         const response = await axios.get(
            `https://fakestoreapi.com/products/category/${category}`
         );
         const categoryProducts = response.data;
         setAllProducts(categoryProducts);
      } catch (error) {
         console.log("somthing went wrong!", error);
      }
   };
   const setProductCategory = () => {
      switch (shopCategory) {
         case "all":
            getAllProducts();
            break;
         case "electronics":
            getProductFromCategory("electronics");
            break;
         case "jewelery":
            getProductFromCategory("jewelery");
            break;
         case "men's clothing":
            getProductFromCategory("men's clothing");
            break;
         case "women's clothing":
            getProductFromCategory("women's clothing");
         default:
            getAllProducts();
      }
   };
   const filterPriceHandler = () => {
      const priceFilteredProducts = allProducts.filter(
         (product) => product.price <= priceFilterValue
      );
      setShownProducts(priceFilteredProducts);
   };

   useEffect(() => {
      setProductCategory();
      setPriceFilterValue(1000);
   }, [shopCategory]);

   useEffect(() => {
      filterPriceHandler();
   }, [allProducts]);

   return (
      <div className="container pt-8 grid md:grid-cols-10 lg:grid-cols-12 gap-x-8">
         {/* sidebar */}
         <div className="md:col-span-4 lg:col-span-4 xl:col-span-3 space-y-8 mb-12">
            <CategoryBox sendCategory={getCategoryCount} />
            {/* PriceBox */}
            <div className="border border-gray-300">
               <h1 className="text-xl font-medium text-white bg-indigo-700 px-5 py-2 border-b border-gray-300">
                  PRICE
               </h1>
               <div className="px-5 py-2 text-center">
                  <div className="flex items-center gap-x-1">
                     <input
                        onChange={(event) =>
                           setPriceFilterValue(event.target.value)
                        }
                        className=" h-10"
                        type="range"
                        min={25}
                        max={1000}
                        value={priceFilterValue}
                        step={5}
                     />
                     <span className="inline-block text-stone-600 font-medium px-2 py-1 border border-gray-300 rounded-xl">
                        {`<=$`}
                        {priceFilterValue}
                     </span>
                  </div>
                  <button
                     onClick={filterPriceHandler}
                     className="px-4 py-2 bg-indigo-500 rounded-lg font-medium text-white hover:bg-indigo-700 transition-colors"
                  >
                     Filter
                  </button>
               </div>
            </div>
            <FAQBox />
            <AdBox />
         </div>
         {/* main */}
         <div className="md:col-span-6 lg:col-span-8 xl:col-span-9 mt-12 md:mt-0">
            {/* shop header */}
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
               <div className="py-6 px-8 border border-gray-300 bg-stone-50">
                  <ul className="flex items-center gap-4 text-base md:text-sm xl:text-base flex-wrap xl:flex-nowrap child:shrink-0">
                     {Object.entries(categoryCount).map(([category, count]) => (
                        <li
                           key={category}
                           className="group px-3 py-1 bg-white flex items-center gap-x-3 rounded-full border border-gray-300 child:transition-colors cursor-pointer"
                        >
                           <span className="font-medium text-stone-600 group-hover:text-indigo-700">
                              {category}
                           </span>
                           <span className="text-center px-2.5 py-[2px] rounded-full text-white bg-indigo-400 group-hover:bg-indigo-700">
                              {count}
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            {/* shop list */}
            <div className="mb-12">
               {/* shop list heading */}
               <div
                  ref={shopHeadingRef}
                  className="my-12 w-full bg-stone-50 border border-gray-300/30 py-4 px-5 flex items-center justify-between"
               >
                  <h1 className="font-bold text-3xl text-indigo-700">shop</h1>
                  <div className="flex items-center border border-gray-300">
                     <span
                        onClick={() => setShopDisplay("Grid")}
                        className={`${
                           shopDisplay === "Grid" && "text-white bg-indigo-700"
                        } text-stone-600 p-1 transition-colors cursor-pointer`}
                     >
                        <svg className="size-5">
                           <use href="#grid-fill"></use>
                        </svg>
                     </span>
                     <span
                        onClick={() => setShopDisplay("List")}
                        className={`${
                           shopDisplay === "List" && "text-white bg-indigo-700"
                        } text-stone-600 p-1 transition-colors cursor-pointer`}
                     >
                        <svg className="size-5">
                           <use href="#list-task"></use>
                        </svg>
                     </span>
                  </div>
               </div>
               {/* shop Products */}
               {shownProducts.length === 0 ? (
                  <div className="max-w-lg mx-auto bg-indigo-300 px-8 py-5">
                     <h1 className="text-xl font-medium">
                        The Product you are looking for has not found!
                     </h1>
                  </div>
               ) : (
                  <div>
                     {shopDisplay === "Grid" ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
                           {shownProducts.map((product) => (
                              <ProductBox key={product.id} {...product} />
                           ))}
                        </div>
                     ) : (
                        <div className="flex flex-col items-start justify-start gap-y-8">
                           {shownProducts.map((product) => (
                              <ProductBoxList key={product.id} {...product} />
                           ))}
                        </div>
                     )}
                     <Pagination
                        allItems={allProducts}
                        sendShownItems={getShownProducts}
                        scrollToElement={shopHeadingRef}
                     />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default Shop;
