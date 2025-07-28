import { Link } from "react-router-dom";
import CurrencyTab from "./CurrencyTab";
import LangTab from "./LangTab";
import AccountTabMenu from "./AccountTabMenu";

function DesktopNav() {
   return (
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
                  <AccountTabMenu />
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
               <LangTab />
               {/* vertical line */}
               <span className="inline-block h-6 w-px bg-white"></span>
               <CurrencyTab />
            </div>
         </div>
      </div>
   );
}

export default DesktopNav;
