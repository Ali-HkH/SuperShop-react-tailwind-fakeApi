import React from "react";

function AdSlide({ img, title, off }) {
   return (
      <div className="relative overflow-hidden">
         <img
            src={img}
            alt="Ad-img"
            className="w-full h-[400px] object-cover object-left hover:scale-110 transition-all duration-300"
         />
         <div className="w-full py-3 pl-8 bg-gray-600/50 absolute bottom-[25%] font-medium">
            <span className="text-2xl text-stone-800">{title}</span>
            <div className="text-indigo-300">
               <span className="text-xl pr-1">FROM</span>{" "}
               <span className="text-4xl">{off}</span>
            </div>
         </div>
      </div>
   );
}

export default AdSlide;
