import { Link } from "react-router-dom";

function AccountTabMenu() {
   return (
      <ul className="group-hover:h-[134px] group-hover:px-3 group-hover:border-[1px] group-hover:border-gray-300 h-0 p-0 border-none overflow-hidden absolute top-[50px] left-0 w-[220px] bg-white shadow-sm transition-all duration-500 child:font-normal child:border-b child:border-gray-300 child:cursor-pointer z-20">
         <li className="text-lg text-stone-600 hover:text-indigo-700 transition-colors">
            <Link to="/Login">
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
   );
}

export default AccountTabMenu;
