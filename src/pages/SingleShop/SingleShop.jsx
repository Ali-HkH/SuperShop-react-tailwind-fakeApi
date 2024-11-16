import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Related from "../../components/Related/Related";
import AdBox from "../../components/AdBox/AdBox";
import RecentProducts from "../../components/RecentProducts/RecentProducts";
import RatingBox from "../../components/RatingBox/RatingBox";

function SingleShop() {
   const { productID } = useParams();
   const [mainProduct, setMainProduct] = useState(null);
   const [relatedProducts, setRelatedProducts] = useState([]);
   const [quantity, setQuantity] = useState(1);
   const [ProductFooterDisplay, setProductFooterDisplay] = useState("description");

   const setPageDatas = async () => {
      // fetch to all products
      try {
         const response = await axios.get("https://fakestoreapi.com/products");
         const products = response.data;
         // set main products
         const main = products.find(
            (product) => product.id === parseInt(productID)
         );
         setMainProduct(main);
         // set related products
         const related = products.filter(
            (product) => product.id !== parseInt(productID)
         );
         setRelatedProducts(related);
      } catch (error) {
         console.log("something went wrong.", error);
      }
   };

   // quantity functions
   const addQuantity = () => {
      if (quantity < mainProduct.rating.count) {
         setQuantity(quantity + 1);
      }
   };
   const reduceQuantity = () => {
      if (quantity > 1) {
         setQuantity(quantity - 1);
      }
   };

   useEffect(() => {
      setPageDatas();
   }, [productID]);

   return (
      <div className="container pt-8 grid md:grid-cols-10 lg:grid-cols-12 gap-x-8 mb-12">
         {/* sidebar */}
         <div className="md:col-span-4 lg:col-span-4 xl:col-span-3 space-y-8">
            <RecentProducts ProductsData={relatedProducts} />
            <AdBox />
         </div>
         {/* main */}
         <div className="md:col-span-6 lg:col-span-8 xl:col-span-9 mt-12 md:mt-0">
            {!mainProduct ? (
               <div className="p-5 bg-indigo-300 text-slate-600 text-2xl font-medium">
                  Loading...
               </div>
            ) : (
               <>
                  {/* main product header */}
                  <div className="flex flex-col items-start gap-y-8 lg:flex-row lg:gap-y-0 lg:gap-x-5 p-5 mb-8 border border-gray-300 ">
                     {/* image section */}
                     <div className="lg:w-5/12">
                        {/* product img */}
                        <div className="group p-14">
                           <img
                              src={mainProduct.image}
                              alt="mainProduct-img"
                              className="group-hover:scale-110 transition-all duration-500"
                           />
                        </div>
                        {/* hover zoom sign */}
                        <div className="flex justify-center items-center gap-x-2 p-2 font-medium text-stone-600 bg-gray-100">
                           <svg className="size-5">
                              <use href="#search"></use>
                           </svg>
                           <span>Mouse over to zoom in</span>
                        </div>
                        {/* product other pics */}
                        <div className="flex items-center justify-center gap-x-2 mt-4">
                           <div className="w-[95px] h-auto p-5 border border-gray-300 hover:border-indigo-700 transition-colors cursor-pointer">
                              <img
                                 src={mainProduct.image}
                                 alt="product-img"
                                 className="w-full aspect-square"
                              />
                           </div>
                           <div className="w-[95px] h-auto p-5 border border-gray-300 hover:border-indigo-700 transition-colors cursor-pointer">
                              <img
                                 src={mainProduct.image}
                                 alt="product-img"
                                 className="w-full aspect-square"
                              />
                           </div>
                           <div className="w-[95px] h-auto p-5 border border-gray-300 hover:border-indigo-700 transition-colors cursor-pointer">
                              <img
                                 src={mainProduct.image}
                                 alt="product-img"
                                 className="w-full aspect-square"
                              />
                           </div>
                        </div>
                     </div>
                     {/* detail section */}
                     <div className="lg:w-7/12">
                        {/* title and rating */}
                        <div className="pb-6 mb-6 border-b border-gray-300">
                           {/* title */}
                           <h1 className="font-bold text-3xl line-clamp-2 mb-4">
                              {mainProduct.title}
                           </h1>
                           {/* stars and rating */}
                           <div className="flex items-center mb-1.5">
                              <div className="flex items-center pr-4 border-r border-gray-300">
                                 {Array(Math.round(mainProduct.rating.rate))
                                    .fill(0)
                                    .map((star, index) => (
                                       <svg
                                          key={index}
                                          className="size-5 text-yellow-400"
                                       >
                                          <use href="#star-fill"></use>
                                       </svg>
                                    ))}
                                 {Array(5 - Math.round(mainProduct.rating.rate))
                                    .fill(0)
                                    .map((star, index) => (
                                       <svg
                                          key={index}
                                          className="size-5 text-yellow-400"
                                       >
                                          <use href="#star"></use>
                                       </svg>
                                    ))}
                              </div>
                              <span className="text-stone-600 font-medium pl-4">
                                 ({mainProduct.rating.rate})
                              </span>
                           </div>
                           {/* count */}
                           <span className="text-stone-600 text-lg font-medium">
                              count:{" "}
                              <span className="text-indigo-500">
                                 {mainProduct.rating.count}
                              </span>
                           </span>
                           {/* availablity */}
                           <p className="text-lg font-medium text-slate-600">
                              Availablity :{" "}
                              {mainProduct.rating.count > 0 ? (
                                 <span className="text-green-500">instock</span>
                              ) : (
                                 <span className="text-rose-500">outstock</span>
                              )}
                           </p>
                        </div>
                        {/* price */}
                        <p className="text-lg font-medium">
                           PRICE :{" "}
                           <span className="text-3xl pl-8 text-indigo-500 ">
                              ${mainProduct.price}
                           </span>
                        </p>
                        {/* detail box */}
                        <div className="border border-gray-300 bg-stone-100 py-7 px-5 mt-6">
                           {/* quantity box */}
                           <div className="relative ml-20 mb-3">
                              <span className="absolute -left-20 text-lg font-bold">
                                 QTY :
                              </span>
                              <div className="w-fit border border-gray-300 bg-white">
                                 <button
                                    onClick={reduceQuantity}
                                    className="text-2xl font-bold w-8 border-r border-gray-300 hover:text-indigo-500 transition-colors"
                                 >
                                    −
                                 </button>
                                 <span className="inline-block text-lg text-center w-40 md:w-32 xl:w-40">
                                    {quantity}
                                 </span>
                                 <button
                                    onClick={addQuantity}
                                    className="text-2xl font-bold w-8 border-l border-gray-300 hover:text-indigo-500 transition-colors"
                                 >
                                    +
                                 </button>
                              </div>
                           </div>
                           {/* add to cart */}
                           <button className="w-56 md:w-48 xl:w-56 flex justify-center items-center gap-x-2 py-1.5 ml-20 mb-6 text-white bg-indigo-500 hover:bg-indigo-700 transition-colors">
                              <svg className="size-5">
                                 <use href="#shopping-bag"></use>
                              </svg>
                              <span className=" font-bold">ADD TO CART</span>
                           </button>
                           <ul className="ml-20 flex gap-x-2 child:p-1.5 child:bg-white child:border child:border-gray-300">
                              <li className="hover:text-indigo-500 transition-colors cursor-pointer">
                                 <svg className="size-5">
                                    <use href="#heart"></use>
                                 </svg>
                              </li>
                              <li className="hover:text-indigo-500 transition-colors cursor-pointer">
                                 <svg className="size-5">
                                    <use href="#compare"></use>
                                 </svg>
                              </li>
                              <li className="hover:text-indigo-500 transition-colors cursor-pointer">
                                 <svg className="size-5">
                                    <use href="#envelope"></use>
                                 </svg>
                              </li>
                              <li className="hover:text-indigo-500 transition-colors cursor-pointer">
                                 <svg className="size-5">
                                    <use href="#printer"></use>
                                 </svg>
                              </li>
                              <li className="hover:text-indigo-500 transition-colors cursor-pointer">
                                 <svg className="size-5">
                                    <use href="#arrow-90deg-right"></use>
                                 </svg>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  {/* main product footer */}
                  <div>
                     {/* nav */}
                     <div className="mb-1.5">
                        <button
                           onClick={() =>
                              setProductFooterDisplay("description")
                           }
                           className={`${
                              ProductFooterDisplay === "description" &&
                              "bg-indigo-500 text-white"
                           } font-medium px-5 py-2 mr-2 border border-gray-300 hover:bg-indigo-500 hover:text-white transition-colors`}
                        >
                           DESCRIPTION
                        </button>
                        <button
                           onClick={() => setProductFooterDisplay("reviews")}
                           className={`${
                              ProductFooterDisplay === "reviews" &&
                              "bg-indigo-500 text-white"
                           } font-medium px-5 py-2 mr-2 border border-gray-300 hover:bg-indigo-500 hover:text-white transition-colors`}
                        >
                           REVIEWS (0)
                        </button>
                        <button
                           onClick={() => setProductFooterDisplay("tags")}
                           className={`${
                              ProductFooterDisplay === "tags" &&
                              "bg-indigo-500 text-white"
                           } font-medium px-5 py-2 mr-2 border border-gray-300 hover:bg-indigo-500 hover:text-white transition-colors`}
                        >
                           TAGS
                        </button>
                     </div>
                     {/* content */}
                     <div className="p-5 border border-gray-300">
                        {/* description */}
                        {ProductFooterDisplay === "description" && (
                           <div>
                              <h1 className="text-2xl font-medium mb-4 uppercase">
                                 {ProductFooterDisplay}
                              </h1>
                              <p className="text-stone-600 font-medium mb-2">
                                 {mainProduct.description}
                              </p>
                              <p className="text-stone-600 font-medium">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Duis tincidunt condimentum
                                 felis, et tempor neque rhoncus ac. Proin
                                 elementum, felis id placerat dapibus, purus
                                 ipsum lobortis tellus, ut vehicula nisl metus
                                 eget arcu.
                              </p>
                           </div>
                        )}
                        {/* reviews */}
                        {ProductFooterDisplay === "reviews" && (
                           <div>
                              <h1 className="text-2xl font-bold mb-4 uppercase">
                                 {ProductFooterDisplay}
                              </h1>
                              <h3 className="text-stone-600 mb-2 text-lg">
                                 There are no reviews yet.
                              </h3>
                              <h1 className="pl-6 text-stone-600 text-2xl font-medium mb-4 line-clamp-2">
                                 Be the first to review “{mainProduct.title}”
                              </h1>
                              <h3 className="text-stone-600 mb-1.5 text-lg">
                                 Your email address will not be published.
                                 Required fields are marked *
                              </h3>
                              <form>
                                 {/* checkBox save email */}
                                 <div className="mb-5">
                                    <input id="saveEmail" type="checkbox" />
                                    <label
                                       htmlFor="saveEmail"
                                       className="text-stone-600 mb-2.5 text-lg font-bold pl-2"
                                    >
                                       Save my name, email, and website in this
                                       browser for the next time I comment.
                                    </label>
                                 </div>
                                 {/* input name & email */}
                                 <div className="flex items-center flex-wrap gap-x-10 gap-y-5 mb-5">
                                    {/* name input */}
                                    <div>
                                       <label
                                          className="font-bold text-stone-600"
                                          htmlFor="name"
                                       >
                                          Name *
                                       </label>
                                       <input
                                          className="py-1 px-3 ml-2 text-lg font-medium text-stone-600 focus:outline-none focus:border-indigo-600 border border-gray-300 transition-all"
                                          id="name"
                                          type="text"
                                       />
                                    </div>
                                    {/* email input */}
                                    <div>
                                       <label
                                          className="font-bold text-stone-600"
                                          htmlFor="email"
                                       >
                                          Email *
                                       </label>
                                       <input
                                          className="py-1 px-3 ml-2 text-lg font-medium text-stone-600 focus:outline-none focus:border-indigo-600 border border-gray-300 transition-all"
                                          id="email"
                                          type="email"
                                       />
                                    </div>
                                 </div>
                                 <RatingBox />
                                 {/* review box */}
                                 <div className="mt-5">
                                    <label
                                       className="font-bold text-stone-600"
                                       htmlFor="review"
                                    >
                                       Your review *
                                    </label>
                                    <textarea
                                       id="review"
                                       className="w-full min-h-40 mb-8 mt-2 py-3 px-5 text-lg font-medium   focus:outline-none focus:border-indigo-600 border border-gray-300 transition-all"
                                       placeholder=""
                                    ></textarea>
                                    <button className="bg-indigo-700 text-white text-lg px-6 py-1.5 hover:bg-indigo-600 transition-colors">
                                       Submit
                                    </button>
                                 </div>
                              </form>
                           </div>
                        )}
                        {/* tags */}
                        {ProductFooterDisplay === "tags" && (
                           <div>
                              <h1 className="text-2xl font-bold mb-4 uppercase">
                                 {ProductFooterDisplay}
                              </h1>
                              <ul className="list-disc pl-5 child:text-lg child:font-medium child:text-stone-600 child:mb-1">
                                 <li className="hover:text-indigo-500 cursor-default">
                                    Fast & Free Shipping
                                 </li>
                                 <li className="hover:text-indigo-500 cursor-default">
                                    Next-Day Delivery Available!
                                 </li>
                                 <li className="hover:text-indigo-500 cursor-default">
                                    Satisfaction Guaranteed
                                 </li>
                                 <li className="hover:text-indigo-500 cursor-default">
                                    {" "}
                                    Hassle-Free Returns
                                 </li>
                              </ul>
                           </div>
                        )}
                     </div>
                  </div>
               </>
            )}
            {/* related posts */}
            <Related related={relatedProducts} isShop={true} />
         </div>
      </div>
   );
}

export default SingleShop;
