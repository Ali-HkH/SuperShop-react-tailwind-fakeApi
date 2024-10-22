import React from "react";

function SuperiorBox({ title, icon }) {
   return (
      <div className="text-white text-center">
         <div className="w-full flex items-center justify-center">
            <svg className="size-16">
               <use href={`#${icon}`}></use>
            </svg>
         </div>
         <h2 className="mb-3 mt-1 font-bold text-lg">{title}</h2>
         <p className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.vero
            assumenda debitis tenetur eligendi modi iusto suscipit!
         </p>
      </div>
   );
}

export default SuperiorBox;
