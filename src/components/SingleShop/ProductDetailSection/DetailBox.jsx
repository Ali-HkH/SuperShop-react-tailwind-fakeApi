import { useState } from "react";
import DetailIcons from "./DetailIcons";

function DetailBox({rating}) {
   const [quantity, setQuantity] = useState(1);

   // quantity functions
   const addQuantity = () => {
      if (quantity < rating.count) {
         setQuantity(quantity + 1);
      }
   };
   const reduceQuantity = () => {
      if (quantity > 1) {
         setQuantity(quantity - 1);
      }
   };
   return (
      <div className="border border-gray-300 bg-stone-100 py-7 px-5 mt-6">
         {/* quantity box */}
         <div className="relative ml-20 mb-3">
            <span className="absolute -left-20 text-lg font-bold">QTY :</span>
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
            <DetailIcons svg="heart"/>
            <DetailIcons svg="compare"/>
            <DetailIcons svg="envelope"/>
            <DetailIcons svg="printer"/>
            <DetailIcons svg="arrow-90deg-right"/>
         </ul>
      </div>
   );
}

export default DetailBox;
