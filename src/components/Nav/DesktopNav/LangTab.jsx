import React from "react";

function LangTab() {
   return (
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
   );
}

export default LangTab;
