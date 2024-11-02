import React from "react";

function AdvantageBox({ svg, text }) {
   return (
      <div className="advantage-item relative w-full flex flex-col items-center gap-y-3 mb-10">
         <div className="group flex gap-x-4 justify-start w-[65px] mb-3 overflow-hidden cursor-pointer">
            <svg className="size-16 text-stone-600 shrink-0 group-hover:-translate-x-20 transition-all duration-300">
               <use href={`#${svg}`}></use>
            </svg>
            <svg className="size-16 text-indigo-700 shrink-0 group-hover:-translate-x-20 transition-all duration-300">
               <use href={`#${svg}`}></use>
            </svg>
         </div>
         <p className="text-xl md:text-lg lg:text-xl font-bold   hover:text-indigo-700 transition-colors cursor-pointer">
            {text}
         </p>
      </div>
   );
}

export default AdvantageBox;
