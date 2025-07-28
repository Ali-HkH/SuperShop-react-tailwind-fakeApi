import { useState } from "react";

function ItemsCountSelector({ itemsPerPage, setItemsPerPage, scrollToRef }) {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const clickHandler = (number) => {
      setIsMenuOpen(false);
      setItemsPerPage(number);
      scrollToRef.current.scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   };

   return (
      <div className="relative text-stone-600">
         <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex items-center p-2 gap-x-3 border border-gray-300"
         >
            <span>shown {itemsPerPage}</span>
            <svg
               className={`w-4 h-4 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
               }`}
            >
               <use href="#chevron-down" />
            </svg>
         </button>

         <ul
            className={`absolute top-full left-0 w-24 bg-white shadow-md overflow-hidden
                      transition-all duration-300 z-20 ${
                         isMenuOpen ? "p-1 h-auto" : "h-0 p-0"
                      }`}
         >
            {[3, 6, 9].map((number) => (
               <li
                  key={number}
                  className="text-center p-1.5 text-stone-600 hover:bg-indigo-700 hover:text-white cursor-pointer"
                  onClick={() => clickHandler(number)}
               >
                  shown {number}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default ItemsCountSelector;
