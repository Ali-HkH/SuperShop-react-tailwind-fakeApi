import React from "react";

function GalleryBox({ img, name }) {
   return (
      <>
         <img
            src={img}
            className="w-full h-full group-hover:brightness-50 transition-all"
            alt="gallery"
         />
         <div className="w-full text-center absolute bottom-10 left-[50%] -translate-x-[50%]">
            <h1 className="text-xl font-bold   mb-5 group-hover:text-white transition-colors">
               {name}
            </h1>
            <a
               href="#"
               className="p-3 bg-indigo-700 hover:bg-amber-300 text-white transition-colors"
            >
               SHOP NOW
            </a>
         </div>
      </>
   );
}

export default GalleryBox;
