import React, { useEffect, useState } from "react";

function Nav() {
   const [allCategories, setAllCategories] = useState([]);

   useEffect(() => {}, []);

   return (
      <div>
         {/* top nav */}
         <div className="container">
            <div className="w-full flex flex-col items-center justify-center md:flex-row md:justify-between mb-1.5 md:mb-6 pt-3">
               <div className="flex items-baseline gap-x-1">
                  <svg className="size-3.5 p-0.5 bg-blue-700 text-white rounded-sm">
                     <use href="#phone"></use>
                  </svg>
                  <span className="text-stone-600">
                     Call Center Support 24/7: 01678 311 160
                  </span>
               </div>
               <ul className="hidden md:flex items-center gap-x-3.5 ">
                  <li className="flex gap-x-1 items-center text-stone-600 hover:text-blue-700">
                     <svg className="size-4 text-blue-700 ">
                        <use href="#user"></use>
                     </svg>
                     My Account
                  </li>
                  <li className="flex gap-x-1 items-center text-stone-600 hover:text-blue-700">
                     <svg className="size-4 text-blue-700 ">
                        <use href="#heart"></use>
                     </svg>
                     Wishlist
                  </li>
                  <li className="flex gap-x-1 items-center text-stone-600 hover:text-blue-700">
                     <svg className="size-4 text-blue-700 ">
                        <use href="#compare"></use>
                     </svg>
                     Compare
                  </li>
               </ul>
            </div>
            <div className="md:mb-8 w-full flex flex-col md:flex-row gap-y-6 items-center justify-between">
               <div className="w-[180px] aspect-auto mt-2.5">
                  <img src="./images/logo.png" alt="logo" className="w-full" />
               </div>
               <div className="md:ml-8 flex items-center w-full md:w-[55%] 2xl:w-[60%]">
                  <div className="relative">
                     <span className="hidden lg:inline-block px-5 py-3 border border-gray-300">
                        All Categories
                     </span>
                     <span>
                        <svg className=" bg-blue-700 text-white static size-[50px] p-3 lg:absolute lg:top-4 lg:-right-3 lg:size-5 lg:p-0.5">
                           <use href="#chevron-down"></use>
                        </svg>
                     </span>
                  </div>
                  <input
                     className="w-[90%] md:w-[60%] px-6 py-3 appearance-none focus:outline-none border border-gray-300"
                     placeholder="I'm searching for ..."
                     type="text"
                  />
                  <svg className="size-[50px] p-3  text-blue-700 border border-gray-300">
                     <use href="#search"></use>
                  </svg>
               </div>
               <div className="w-full md:w-auto flex justify-between">
                  <div className="md:hidden">
                     <button>
                        <svg className="size-12 p-3 text-white bg-blue-700">
                           <use href="#bars-3"></use>
                        </svg>
                     </button>
                  </div>
                  <div className="flex items-center">
                     <svg className="size-12 p-3 text-white bg-blue-700">
                        <use href="#shopping-cart"></use>
                     </svg>
                     <div className="px-4 border border-gray-300 py-[11px]">
                        <span className="text-stone-600 md:hidden lg:inline-block">
                           0 ITEM(S) -{" "}
                        </span>
                        <span className="text-blue-700">$0.00</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* desktop nav menu */}
         <div></div>
      </div>
   );
}

export default Nav;
