import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Nav() {
   const [allCategories, setAllCategories] = useState([]);
   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isAccountSubOpen, setIsAccountSubOpen] = useState(false);

   useEffect(() => {
      // get all categories
      const getAllCategories = async () => {
         const response = await axios.get(
            "https://fakestoreapi.com/products/categories"
         );
         const categories = response.data;
         setAllCategories(categories);
      };
      getAllCategories();
   }, []);

   const mobileMenuHandler = () => {
      setIsMenuOpen(!isMenuOpen);
      if (isAccountSubOpen === true) {
         setIsAccountSubOpen(false);
      }
   };

   return (
      <div>
         {/* top nav */}
         <div className="container">
            {/* top nav top */}
            <div className="w-full flex flex-col items-center justify-center md:flex-row md:justify-between mb-1.5 md:mb-6 pt-3">
               {/* call number */}
               <div className="flex items-baseline gap-x-1">
                  <svg className="size-3.5 p-0.5 bg-indigo-700 text-white rounded-sm">
                     <use href="#phone"></use>
                  </svg>
                  <span className="text-stone-600">
                     Call Center Support 24/7: 01678 311 160
                  </span>
               </div>
               {/* Itmes menu */}
               <ul className="hidden md:flex items-center gap-x-5 ">
                  <li className="flex gap-x-1 items-center text-stone-600 hover:text-indigo-700 cursor-pointer">
                     <svg className="size-4 text-indigo-700 ">
                        <use href="#user"></use>
                     </svg>
                     My Account
                  </li>
                  <li className="flex gap-x-1 items-center text-stone-600 hover:text-indigo-700 cursor-pointer">
                     <svg className="size-4 text-indigo-700 ">
                        <use href="#heart"></use>
                     </svg>
                     Wishlist
                  </li>
                  <li className="flex gap-x-1 items-center text-stone-600 hover:text-indigo-700 cursor-pointer">
                     <svg className="size-4 text-indigo-700 ">
                        <use href="#compare"></use>
                     </svg>
                     Compare
                  </li>
               </ul>
            </div>
            {/* top nav bottom */}
            <div className="md:mb-8 w-full flex flex-col md:flex-row gap-y-6 items-center justify-between">
               {/* logo */}
               <div className="w-[180px] aspect-auto mt-2.5">
                  <img
                     src=" ../images/logo.png"
                     alt="logo"
                     className="w-full"
                  />
               </div>
               {/* category - searchBar */}
               <div className="md:ml-8 flex items-center w-full md:w-[55%] 2xl:w-[60%]">
                  {/* category */}
                  <div
                     role="button"
                     onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                     className="relative"
                  >
                     <span className="hidden lg:inline-block px-10 py-3 border border-gray-300">
                        All Categories
                     </span>
                     <span>
                        <svg className=" bg-indigo-700 text-white static size-[48px] p-3 lg:absolute lg:top-4 lg:-right-3 lg:size-5 lg:p-0.5">
                           <use href="#chevron-down"></use>
                        </svg>
                     </span>
                     <ul
                        className={`${
                           isCategoryOpen ? "p-1 h-[154px]" : "h-0 p-0"
                        } absolute top-12 left-0 w-[180px] bg-white shadow-md overflow-hidden transition-all duration-500 z-20`}
                     >
                        {allCategories.map((category) => (
                           <li
                              className="text-start p-1.5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors cursor-pointer"
                              key={category}
                           >
                              {category.toUpperCase()}
                           </li>
                        ))}
                     </ul>
                  </div>
                  {/* searchBar */}
                  <input
                     className="w-[90%] md:w-[55%] px-6 py-3 text-stone-600 appearance-none focus:outline-none border border-gray-300"
                     placeholder="I'm searching for ..."
                     type="text"
                  />
                  {/* search icon */}
                  <svg className="size-[50px] p-3  text-indigo-700 border border-gray-300 cursor-pointer hover:text-white hover:bg-indigo-700 hover:border-indigo-700">
                     <use href="#search"></use>
                  </svg>
               </div>
               {/* mobile nav & cart */}
               <div className="w-full md:w-auto flex justify-between mb-6 md:mb-0">
                  {/* mobile nav menu */}
                  <div className="relative md:hidden">
                     <button onClick={mobileMenuHandler}>
                        <svg className="size-12 p-3 text-white bg-indigo-700">
                           <use href="#bars-3"></use>
                        </svg>
                     </button>
                     <ul
                        className={`${
                           isMenuOpen
                              ? "h-[269px] px-3 border-[1px] border-gray-300"
                              : "h-0 p-0 border-none "
                        } ${
                           isAccountSubOpen
                              ? "overflow-visible"
                              : "overflow-hidden"
                        }  absolute top-[50px] w-[270px] bg-white shadow-sm transition-all duration-500 child:font-medium child:border-b child:border-gray-300 child:cursor-pointer z-20 overflow-hidden`}
                     >
                        <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
                           <Link to="/">
                              <span className="inline-block p-2 ">HOME</span>
                           </Link>
                        </li>
                        <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
                           <Link to="/Shop">
                              <span className="inline-block p-2 ">SHOP</span>
                           </Link>
                        </li>
                        <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
                           <Link to="/Blog">
                              <span className="inline-block p-2 ">BLOG</span>
                           </Link>
                        </li>
                        {/* account submenu */}
                        <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
                           <button
                              className="w-full flex justify-between items-center relative"
                              onClick={() =>
                                 setIsAccountSubOpen(!isAccountSubOpen)
                              }
                           >
                              <span className="inline-block p-2">ACCOUNT</span>
                              <div>
                                 {isMenuOpen && isAccountSubOpen ? (
                                    <svg className="size-4 rotate-180 transition-all">
                                       <use href="#chevron-down"></use>
                                    </svg>
                                 ) : (
                                    <svg className="size-4 transition-all">
                                       <use href="#chevron-down"></use>
                                    </svg>
                                 )}
                              </div>
                              <ul
                                 className={`${
                                    isMenuOpen && isAccountSubOpen
                                       ? "h-[135px] px-3 border-[1px] border-gray-300"
                                       : "h-0 p-0 border-none"
                                 }  absolute top-[50px] w-[220px] bg-white shadow-sm text-start overflow-hidden transition-all duration-500 child:font-normal child:border-b child:border-gray-300 child:cursor-pointer z-30`}
                              >
                                 <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
                                    <Link to="Login">
                                       <span className="inline-block p-2">
                                          My Account
                                       </span>
                                    </Link>
                                 </li>
                                 <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
                                    <span className="inline-block p-2">
                                       Wishlist
                                    </span>
                                 </li>
                                 <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
                                    <span className="inline-block p-2">
                                       Compare
                                    </span>
                                 </li>
                              </ul>
                           </button>
                        </li>
                        <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
                           <Link to="/About">
                              <span className="inline-block p-2 ">ABOUT</span>
                           </Link>
                        </li>
                        <li className="border-none text-lg text-stone-600 hover:text-indigo-700 transition-colors">
                           <Link to="/Contact">
                              <span className="inline-block p-2 ">CONTACT</span>
                           </Link>
                        </li>
                     </ul>
                  </div>
                  {/* shopping cart icon & menu */}
                  <div className="flex items-center">
                     <svg className="size-12 p-3 text-white bg-indigo-700">
                        <use href="#shopping-cart"></use>
                     </svg>
                     <div className="px-4 border border-gray-300 py-[11px]">
                        <Link to="Cart">
                           <span className="text-stone-600 md:hidden lg:inline-block">
                              0 ITEM(S) -{" "}
                           </span>
                           <span className="text-indigo-700">$0.00</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* bottom desktop nav menu */}
         <div className="hidden md:block bg-indigo-700 text-white h-[48px] w-full ">
            <div className="container flex items-center lg:justify-between">
               {/* menu */}
               <ul className="flex items-center child:cursor-pointer child:px-5 child:py-3 child:transition-colors child:font-medium">
                  <li className="hover:bg-indigo-800">
                     <Link to="/">HOME</Link>
                  </li>
                  <li className="hover:bg-indigo-800">
                     <Link to="/">SHOP</Link>
                  </li>
                  <li className="hover:bg-indigo-800">
                     <Link to="/Blog">BLOG</Link>
                  </li>
                  <li className="group relative hover:bg-indigo-800 flex items-center gap-x-1">
                     ACCOUNT
                     <svg className="size-4 ">
                        <use href="#chevron-down"></use>
                     </svg>
                     {/* account submenu */}
                     <ul className="group-hover:h-[134px] group-hover:px-3 group-hover:border-[1px] group-hover:border-gray-300 h-0 p-0 border-none overflow-hidden absolute top-[50px] left-0 w-[220px] bg-white shadow-sm transition-all duration-500 child:font-normal child:border-b child:border-gray-300 child:cursor-pointer z-20">
                        <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
                           <Link to="/Login">
                              <span className="inline-block p-2">
                                 My Account
                              </span>
                           </Link>
                        </li>
                        <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
                           <span className="inline-block p-2">Wishlist</span>
                        </li>
                        <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
                           <span className="inline-block p-2">Compare</span>
                        </li>
                     </ul>
                  </li>
                  <li className="hover:bg-indigo-800">
                     <Link to="/About">ABOUT</Link>
                  </li>
                  <li className="hover:bg-indigo-800">
                     <Link to="/Contact">CONTACT</Link>
                  </li>
               </ul>
               {/* settings */}
               <div className="hidden lg:flex items-center gap-x-0.5 child:font-medium">
                  {/* language */}
                  <div className="group relative flex gap-x-1 items-center p-3 cursor-pointer hover:bg-indigo-800 transition-colors">
                     English
                     <svg className="size-4">
                        <use href="#chevron-down"></use>
                     </svg>
                     <ul className="absolute top-[48px] right-0 bg-white group-hover:h-[140px] group-hover:p-3 h-0 p-0 shadow-md overflow-hidden transition-all duration-500 child:font-normal z-20">
                        <li className="flex items-center justify-center gap-x-2 py-1.5 px-5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors">
                           <span className="w-4 aspect-auto">
                              <img
                                 src=" ../images/flags/flag-england.jpg"
                                 alt="flag"
                                 className="w-full"
                              />
                           </span>
                           English
                        </li>
                        <li className="flex items-center justify-center gap-x-2 py-1.5 px-5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors">
                           <span className="w-4 aspect-auto">
                              <img
                                 src=" ../images/flags/flag-french.jpg"
                                 alt="flag"
                                 className="w-full"
                              />
                           </span>
                           French
                        </li>
                        <li className="flex items-center justify-center gap-x-2 py-1.5 px-5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors">
                           <span className="w-4 aspect-auto">
                              <img
                                 src=" ../images/flags/flag-german.jpg"
                                 alt="flag"
                                 className="w-full"
                              />
                           </span>
                           German
                        </li>
                     </ul>
                  </div>
                  {/* vertical line */}
                  <span className="inline-block h-6 w-px bg-white"></span>
                  {/* currency */}
                  <div className="group relative flex gap-x-1 items-center p-3 cursor-pointer hover:bg-indigo-800 transition-colors">
                     USD
                     <svg className="size-4 ">
                        <use href="#chevron-down"></use>
                     </svg>
                     <ul className="absolute top-[48px] right-0 bg-white group-hover:h-[140px] group-hover:p-3 h-0 p-0 shadow-md overflow-hidden transition-all duration-500 child:font-normal z-20">
                        <li className="flex items-center justify-center gap-x-3 py-1.5 px-5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors">
                           <span>$</span>
                           USD
                        </li>
                        <li className="flex items-center justify-center gap-x-3 py-1.5 px-5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors">
                           <span>€</span>
                           EUR
                        </li>
                        <li className="flex items-center justify-center gap-x-3 py-1.5 px-5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors">
                           <span>¥</span>
                           JPY
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Nav;
