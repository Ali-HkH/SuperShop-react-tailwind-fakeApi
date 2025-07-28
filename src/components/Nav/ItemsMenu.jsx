import { Link } from "react-router-dom";

function ItemsMenu() {
   return (
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
   );
}

export default ItemsMenu;
