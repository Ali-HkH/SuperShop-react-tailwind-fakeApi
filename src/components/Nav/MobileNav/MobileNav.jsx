import { Link } from "react-router-dom";
import { useState } from "react";
import AccountSubMenu from "./AccountSubMenu";

function MobileNav() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isAccountSubOpen, setIsAccountSubOpen] = useState(false);

   const mobileMenuHandler = () => {
      setIsMenuOpen(!isMenuOpen);
      if (isAccountSubOpen === true) {
         setIsAccountSubOpen(false);
      }
   };

   return (
      <div className="relative md:hidden">
         <div onClick={mobileMenuHandler}>
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
               isAccountSubOpen ? "overflow-visible" : "overflow-hidden"
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
               <AccountSubMenu
                  isAccountSubOpen={isAccountSubOpen}
                  setIsAccountSubOpen={setIsAccountSubOpen}
                  isMenuOpen={isMenuOpen}
               />
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
   );
}

export default MobileNav;
