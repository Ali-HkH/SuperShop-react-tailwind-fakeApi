import React from "react";
import { Link } from "react-router-dom";

function SectionHeading({ title }) {
   return (
      <div className="mb-8 container bg-stone-50 border border-gray-300 py-4 px-5 flex items-center justify-between">
         <h1 className="font-bold text-xl text-indigo-700">{title}</h1>
         <Link
            to="#"
            className="group w-24 flex items-center transition-all child:transition-all"
         >
            <span className="text-sm text-stone-600 font-bold pr-1 group-hover:pr-2 group-hover:text-indigo-700">
               VIEW ALL
            </span>
            <svg className="size-3.5 text-white bg-stone-600 p-[1px] rounded-full group-hover:bg-indigo-700">
               <use href="#arrow-right-mini"></use>
            </svg>
         </Link>
      </div>
   );
}

export default SectionHeading;
