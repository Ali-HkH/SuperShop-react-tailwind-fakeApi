import React from "react";
import { Link } from "react-router-dom";

function RelatedBox({ id, img, author, day, date, comment }) {
   return (
      <div className="border border-gray-300">
         <div className="w-full aspect-video overflow-hidden">
            <img
               src={img}
               alt="blog-img"
               className="w-full h-full hover:scale-110 transition-all"
            />
         </div>

         <div className="p-5">
            {/* header */}
            <div className="pb-3 border-b border-gray-300">
               <h1 className="text-xl font-bold mb-2.5 line-clamp-2 hover:text-indigo-700 transition-colors cursor-pointer">
                  Lorem Khaled ipsum is a major key
               </h1>
               <div className="flex items-center flex-wrap text-stone-500 font-medium">
                  <span className="px-1.5 border-r border-gray-300">
                     {day} {date}
                  </span>
                  <span className="px-1.5 ">
                     By:{" "}
                     <span className="text-stone-600 hover:text-indigo-700 transition-colors cursor-pointer">
                        {author}
                     </span>
                  </span>
               </div>
            </div>
            {/* content */}
            <p className="my-4 line-clamp-4 font-medium text-stone-500">
               Porem ipsum dolor sit amet, consectetur adip isicing elit, sed do
               eiusmod tempor incid idunt ut labore et dolore magna aliqua.
            </p>
            {/* bottom */}
            <div className="flex items-center justify-between">
               <Link to={`Blog/${id}`}>
                  <span className="text-lg font-medium hover:text-indigo-700 transition-colors">
                     Read More
                  </span>
               </Link>
               <div className="flex items-center gap-x-1 hover:text-indigo-700 transition-colors font-medium cursor-pointer">
                  <svg className="size-6 ">
                     <use href="#chat-bubble"></use>
                  </svg>
                  {comment ? "4" : "0"}
               </div>
            </div>
         </div>
      </div>
   );
}

export default RelatedBox;
