import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ id, img, author, day, date, comment }) {
   return (
      <div className="w-full flex flex-col lg:flex-row items-start gap-x-8 pb-9 mb-9 border-b border-gray-300">
         {/* image */}
         <div className="relative w-full lg:w-1/2 aspect-video overflow-hidden mb-3">
            <img
               src={img}
               alt="blog-img"
               className="w-full h-full hover:scale-110 transition-all duration-300"
            />
            <div className="absolute top-0 right-0">
               <div className="bg-indigo-600 text-white text-center w-24 h-16">
                  <span className="block font-bold text-2xl">{day}</span>
                  <span className="text-sm">{date}</span>
               </div>
               <span className="inline-block px-7 py-2.5 bg-black/60">
                  <svg className="size-10 text-white">
                     <use href="#photo"></use>
                  </svg>
               </span>
            </div>
         </div>
         {/* content */}
         <div className="w-full lg:w-1/2">
            <h1 className="font-bold text-[22px] mb-2.5 hover:text-indigo-700 transition-colors cursor-pointer">
               LOREM KHALED ipsum is a major key
            </h1>
            <div className="text-stone-600 font-medium mb-5">
               <span className="pr-3 border-r border-stone-600 ">
                  By:{" "}
                  <span className="hover:text-indigo-700 transition-colors cursor-pointer">
                     {author}
                  </span>
               </span>
               <span className="pl-3 hover:text-indigo-700 transition-colors cursor-pointer">
                  {comment ? "4 Comments" : "0 Comments"}
               </span>
            </div>
            <p className="text-stone-600 font-medium line-clamp-4">
               Porem ipsum dolor sit amet, consectetur adip isicing elit, sed do
               eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam eiusmod tempor incid idunt ut labore. Porem
               ipsum dolor sit amet,
            </p>
            {/* link */}
            <Link to={`/Blog/${id}`}>
               <button className="mt-4 px-5 py-2.5 border border-gray-300 text-stone-600 hover:text-indigo-700 hover:border-indigo-700 transition-colors">
                  Read More
               </button>
            </Link>
         </div>
      </div>
   );
}

export default BlogCard;
