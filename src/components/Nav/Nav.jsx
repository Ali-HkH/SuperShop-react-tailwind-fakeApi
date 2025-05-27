import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CartItem from "../CartItem/CartItem";

function Nav() {

   const [allCategories, setAllCategories] = useState([]);
   const [allProducts, setAllProducts] = useState([]);
   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isAccountSubOpen, setIsAccountSubOpen] = useState(false);
   const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);
   const [userID, setUserID] = useState(null);
   const [userCart, setUserCart] = useState([]);
   const [userCartProducts, setUserCartProducts] = useState([])
   const [totalBuy, setTotalBuy] = useState(0)

   const mobileMenuHandler = () => {
      setIsMenuOpen(!isMenuOpen);
      if (isAccountSubOpen === true) {
         setIsAccountSubOpen(false);
      }
   };

   const getAllCategories = async () => {
      try {
         const response = await axios.get(
            "https://fakestoreapi.com/products/categories"
         );
         const categories = response.data;
         setAllCategories(categories);
      } catch (error) {
         console.log("something went wrong!", error);
      }
   };
   const getAllProducts = async () => {
      try {
         const response = await axios.get(
            "https://fakestoreapi.com/products"
         );
         const products = response.data;
         setAllProducts(products);
      } catch (error) {
         console.log("something went wrong!", error);
      }
   };

   const getUserCart = async () => {
      try {
         const response = await axios.get(
            `https://fakestoreapi.com/carts/user/${userID}`
         );
         const cartProducts = response.data[0].products;
         setUserCart(cartProducts);
      } catch (error) {
         console.log("somthing went wrong!", error);
      }
   };

   const checkLogin = () => {
      const userToken = localStorage.getItem("userToken");
      const userInfo = localStorage.getItem("userInfo");
   
      if (userToken && userInfo) {
         const user = JSON.parse(userInfo);
         setUserID(user.id);
         setIsUserLoggedIn(true);
      } else {
         setIsUserLoggedIn(false);
      }
   };

   const getProductsInCart = () => {
         const matchedProducts = userCart.map((cartItem) => {
            const product = allProducts.find((product) => product.id === cartItem.productId);
            if (product) {
               return { ...product, quantity: cartItem.quantity };
            }
            return null;
         }).filter(Boolean);
   
         setUserCartProducts(matchedProducts);
   };

   const getCartTotal = () => {
      const totalProduct = userCartProducts.map(product => {
         return product.price*product.quantity
      })
      const totalCart = totalProduct.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      setTotalBuy(totalCart)
   } 

   useEffect(() => {
      getAllCategories();
      checkLogin();
   }, []);

   useEffect(() => {
      if (isUserLoggedIn) {
         getUserCart();
         getAllProducts();
      } else {
         setTotalBuy(0)
         setUserCart([])
         setUserCartProducts([])
      }
   }, [isUserLoggedIn]);

   useEffect(() => {
      if (userCart.length > 0 && allProducts.length > 0) {
         getProductsInCart();         
      }
   }, [userCart, allProducts]);
   
   useEffect(() => {
      getCartTotal()   
   }, [userCartProducts])

   
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
                  <Link to="/Login">
                     <li className="flex gap-x-1 items-center text-stone-600 hover:text-indigo-700 cursor-pointer">
                        <svg className="size-4 text-indigo-700 ">
                           <use href="#user"></use>
                        </svg>
                        My Account
                     </li>
                  </Link>
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
                     src={`${process.env.PUBLIC_URL}/images/logo.png`}
                     alt="logo"
                     className="w-full"
                  />
               </div>
               {/* category - searchBar */}
               <div className="md:ml-8 flex items-center w-full md:w-[60%] 2xl:w-[65%]">
                  {/* category */}
                  <div
                     role="button"
                     onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                     className="relative"
                  >
                     <span className="hidden lg:inline-block px-10 py-3 border border-gray-300">
                        Select Category
                     </span>
                     <span>
                        <svg className=" bg-indigo-700 text-white static size-[48px] p-3 lg:absolute lg:top-4 lg:-right-3 lg:size-5 lg:p-0.5">
                           <use href="#chevron-down"></use>
                        </svg>
                     </span>
                     <ul
                        className={`${
                           isCategoryOpen ? "p-1 h-[188px]" : "h-0 p-0"
                        } absolute top-14 left-0 w-[180px] bg-white shadow-md overflow-hidden transition-all duration-500 z-20`}
                     >
                        <li className="text-start p-1.5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors cursor-pointer">
                           <Link to={`/Shop/all`}>ALL CATEGORIES</Link>
                        </li>
                        {allCategories.map((category) => (
                           <li
                              className="text-start p-1.5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors cursor-pointer"
                              key={category}
                           >
                              <Link to={`/Shop/${category}`}>
                                 {category.toUpperCase()}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  {/* searchBar */}
                  <input
                     className="w-[90%] md:w-[55%] xl:w-[65%] px-6 py-3 text-stone-600 appearance-none focus:outline-none border border-gray-300"
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
                  <div
                     onClick={mobileMenuHandler}
                     className="relative md:hidden"
                  >
                     <div>
                        <svg className="size-12 p-3 text-white bg-indigo-700">
                           <use href="#bars-3"></use>
                        </svg>
                     </div>
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
                           <Link to="/Shop/all">
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
                  <div className="relative group flex items-center">
                     {/* cart button */}
                     <svg className="size-12 p-3 text-white bg-indigo-700">
                        <use href="#shopping-cart"></use>
                     </svg>
                     <Link to={"Cart"}>
                        <div className="px-4 border border-gray-300 py-[11px]">
                           <span className="text-stone-600 md:hidden xl:inline-block">
                              {userCart.length} ITEM(S) -{" "}
                           </span>
                           <span className="text-indigo-700">${totalBuy}</span>
                        </div>
                     </Link>
                     {/* cart menu */}
                     <div className="w-96 p-5 bg-white shadow-md z-20 absolute top-20 right-0 opacity-0 invisible group-hover:top-10 group-hover:opacity-100 group-hover:visible transition-all duration-500">
                        <h1 className="mb-2.5 text-lg">({userCart.length}) ITEMS IN MY CART</h1>
                        {/* cart products list */}
                        {isUserLoggedIn && (
                           <div className="space-y-3 p-3 h-[268px] overflow-y-auto">
                           {userCartProducts.map(cartItem => (
                              <CartItem key={cartItem.id} {...cartItem} />
                           ))}
                        </div>
                        )}
                        
                        <div className="flex items-center gap-x-32 text-xl text-stone-500 mb-2.5 mt-5">
                           Total <span className="text-indigo-700">${totalBuy}</span>
                        </div>
                        <div className="w-full flex items-center text-white">
                           <button className="w-7/12 py-2 bg-indigo-500 hover:bg-indigo-700 transition-colors ">
                              VIEW MY CART
                           </button>
                           <button className="w-5/12 py-2 bg-slate-700 hover:bg-slate-900 transition-colors">
                              CHECKOUT
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* bottom desktop nav menu */}
         <div className="container-fluid hidden md:block bg-indigo-700 text-white h-[48px] w-full ">
            <div className="container flex items-center lg:justify-between">
               {/* menu */}
               <ul className="flex items-center child:cursor-pointer child:px-5 child:py-3 child:transition-colors child:font-medium">
                  <li className="hover:bg-indigo-800">
                     <Link to="/">HOME</Link>
                  </li>
                  <li className="hover:bg-indigo-800">
                     <Link to="/Shop/all">SHOP</Link>
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
                     <ul className="absolute top-[48px] right-0 bg-white group-hover:h-[120px] group-hover:p-1.5 h-0 p-0 shadow-md overflow-hidden transition-all duration-500 child:font-normal z-20">
                        <li className="flex items-center justify-center gap-x-2 py-1.5 px-5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors">
                           <span className="w-4 aspect-auto">
                              <img
                                 src={`${process.env.PUBLIC_URL}/images/flags/flag-england.jpg`}
                               alt="flag"
                                 className="w-full"
                              />
                           </span>
                           English
                        </li>
                        <li className="flex items-center justify-center gap-x-2 py-1.5 px-5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors">
                           <span className="w-4 aspect-auto">
                              <img
                                 src={`${process.env.PUBLIC_URL}/images/flags/flag-french.jpg`}
                                 alt="flag"
                                 className="w-full"
                              />
                           </span>
                           French
                        </li>
                        <li className="flex items-center justify-center gap-x-2 py-1.5 px-5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors">
                           <span className="w-4 aspect-auto">
                              <img
                                 src={`${process.env.PUBLIC_URL}/images/flags/flag-german.jpg`}
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
                     <ul className="absolute top-[48px] right-0 bg-white group-hover:h-[120px] group-hover:p-1.5 h-0 p-0 shadow-md overflow-hidden transition-all duration-500 child:font-normal z-20">
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
