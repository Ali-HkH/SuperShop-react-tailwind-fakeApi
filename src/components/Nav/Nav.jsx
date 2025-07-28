import { useEffect, useState } from "react";
import ItemsMenu from "./ItemsMenu";
import CategorySelect from "./CategorySelect";
import SearchBar from "./SearchBar";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";
import CartMenu from "./Cart/CartMenu";

function Nav() {
   const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);
   const [userID, setUserID] = useState(null);

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

   useEffect(() => {
      checkLogin();
   }, []);

   return (
      <div>
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
               <ItemsMenu />
            </div>
            {/* middle nav */}
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
                  <CategorySelect />
                  <SearchBar />
               </div>
               {/* mobile nav & cart */}
               <div className="w-full md:w-auto flex justify-between mb-6 md:mb-0">
                  {/* mobile nav menu */}
                  <MobileNav />
                  <CartMenu isUserLoggedIn={isUserLoggedIn} userID={userID} />
               </div>
            </div>
         </div>
         <DesktopNav />
      </div>
   );
}

export default Nav;
