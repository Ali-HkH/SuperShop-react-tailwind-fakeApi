import { Link } from "react-router-dom";

function AccountSubMenu({ isAccountSubOpen, setIsAccountSubOpen, isMenuOpen }) {
   return (
      <div
         className="w-full flex justify-between items-center relative"
         role="button"
         onClick={() => setIsAccountSubOpen(!isAccountSubOpen)}
      >
         <span className="inline-block p-2">ACCOUNT</span>
         <button>
            {isMenuOpen && isAccountSubOpen ? (
               <svg className="size-4 rotate-180 transition-all">
                  <use href="#chevron-down"></use>
               </svg>
            ) : (
               <svg className="size-4 transition-all">
                  <use href="#chevron-down"></use>
               </svg>
            )}
         </button>
         <ul
            className={`${
               isMenuOpen && isAccountSubOpen
                  ? "h-[135px] px-3 border-[1px] border-gray-300"
                  : "h-0 p-0 border-none"
            }  absolute top-[50px] w-[220px] bg-white shadow-sm text-start overflow-hidden transition-all duration-500 child:font-normal child:border-b child:border-gray-300 child:cursor-pointer z-30`}
         >
            <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
               <Link to="Login">
                  <span className="inline-block p-2">My Account</span>
               </Link>
            </li>
            <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
               <span className="inline-block p-2">Wishlist</span>
            </li>
            <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
               <span className="inline-block p-2">Compare</span>
            </li>
         </ul>
      </div>
   );
}

export default AccountSubMenu;
