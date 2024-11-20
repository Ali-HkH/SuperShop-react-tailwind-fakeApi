import React from "react";
import axios from "axios";

function CartItem(props) {
    
   const deleteFromCart = async (cartID) => {
      try {
         const response = await axios.delete(
            `https://fakestoreapi.com/carts/${cartID}`
         );
         console.log(response);
      } catch (error) {
         console.log("something went wrong!", error);
      }
   };

   return (
      <div className="flex items-start gap-x-5 border-b pb-2">
        {/* img */}
         <div className="w-1/3 p-3 overflow-hidden">
            <img
               src={props.image}
               alt="cart-img"
               className="aspect-square hover:scale-105 transition-all duration-300"
            />
         </div>
         {/* details */}
         <div className="w-2/3">
            <h1 className="line-clamp-1 font-medium text-stone-600">
               {props.title}
            </h1>
            <span className="inline-block text-indigo-500 text-lg mb-3">
               ${props.price}
            </span>
            <div className="flex items-center gap-x-8">
               <span className="px-3 py-[2px] border border-gray-300 text-stone-500">
                  {props.quantity}
               </span>
               <button
                  onClick={() => deleteFromCart(props.id)}
                  className="text-rose-500"
               >
                  <svg className="size-5">
                     <use href="#trashcan"></use>
                  </svg>
               </button>
            </div>
         </div>
      </div>
   );
}

export default CartItem;
