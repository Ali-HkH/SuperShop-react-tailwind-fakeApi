import React, { useState } from "react";
import LoaderSpiner from "../../LoaderSpinner/LoaderSpiner";
import { Link } from "react-router-dom";

function ProductBox(props) {
   // image loader states
   const [isImgShow, setIsImgShow] = useState(false);
   const onImgLoaded = () => setIsImgShow(true);

   return (
      <div className=" border border-gray-300">
        {/* image & buttons */}
         <div className="group relative overflow-hidden aspect-square p-5 pb-0">
            {/* image */}
            <Link to={`/SingleShop/${props.id}`}>
               <img
                  src={props.image}
                  alt="product-img"
                  className="w-full h-full group-hover:-translate-y-16 transition-all duration-300"
                  onLoad={onImgLoaded}
               />
               {!isImgShow && <LoaderSpiner />}
            </Link>
            {/* buttons */}
            <div className="w-full absolute -bottom-24 group-hover:bottom-0 left-0 transition-all duration-300">
               {/* like & wishlist */}
               <div className="w-full flex items-center justify-center bg-black/30">
                  <span className="group hover:bg-black/50 text-white hover:text-indigo-500 px-4 py-2.5 transition-colors cursor-pointer">
                     <svg className="size-5">
                        <use href="#heart"></use>
                     </svg>
                  </span>
                  <span className="group hover:bg-black/50 text-white hover:text-indigo-500 px-4 py-2.5 transition-colors cursor-pointer">
                     <svg className="size-5">
                        <use href="#compare"></use>
                     </svg>
                  </span>
                  <span className="group hover:bg-black/50 text-white hover:text-indigo-500 px-4 py-2.5 transition-colors cursor-pointer">
                     <svg className="size-5">
                        <use href="#search"></use>
                     </svg>
                  </span>
               </div>
               {/* add to cart */}
               <div className="w-full py-2.5 flex items-center justify-center gap-x-1.5 hover:gap-x-3.5 bg-indigo-500 text-white transition-all cursor-pointer">
                  <svg className="size-5">
                     <use href="#shopping-bag"></use>
                  </svg>
                  <span className="font-medium">Add to cart</span>
               </div>
            </div>
         </div>
         {/*  details */}
         <div className="p-5">
            {/* title */}
            <Link to={`/SingleShop/${props.id}`}>
               <h1 className="line-clamp-1 mb-2.5 font-medium hover:text-indigo-700 transition-colors">
                  {props.title}
               </h1>
            </Link>
            {/* price & count */}
            <div className="flex items-center justify-between mb-3 font-medium">
               <span className="text-indigo-500">${props.price}</span>
               <span className="text-stone-600">
                  count: <span className="text-indigo-500">{props.rating.count}</span>
               </span>
            </div>
            {/* starts & rating */}
            <div className="flex items-center gap-x-2">
               <div className="flex items-center">
                  {Array(Math.round(props.rating.rate))
                     .fill(0)
                     .map((star, index) => (
                        <svg key={index} className="size-5 text-yellow-400">
                           <use href="#star-fill"></use>
                        </svg>
                     ))}
                  {Array(5 - Math.round(props.rating.rate))
                     .fill(0)
                     .map((star, index) => (
                        <svg key={index} className="size-5 text-yellow-400">
                           <use href="#star"></use>
                        </svg>
                     ))}
               </div>
               <span className="text-stone-600 font-medium">
                  ({props.rating.rate})
               </span>
            </div>
         </div>
      </div>
   );
}

export default ProductBox;
