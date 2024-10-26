import React from "react";

function OptionBox({ title, subTitle, svg }) {
   return (
      <div className="px-8 py-5 flex items-center justify-start md:flex-col md:items-start lg:flex-row lg:items-center hover:bg-indigo-600">
         <svg className="size-28 px-[22px]">
            <use href={`#${svg}`}></use>
         </svg>
         <div>
            <h1 className="font-bold text-lg">{title}</h1>
            <p className="font-medium">{subTitle}</p>
         </div>
      </div>
   );
}

export default OptionBox;
