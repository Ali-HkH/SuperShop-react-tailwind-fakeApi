import { useEffect, useState } from "react";
import BlogsData from "../../../Data/BlogsData";

function BlogBoxNav({ setShownBlogs }) {
   const [blogCategory, setBlogCategory] = useState("popular");

   useEffect(() => {
      if (blogCategory === "popular") {
         const popular = BlogsData.slice(0, 5);
         setShownBlogs(popular);
      } else {
         const recent = BlogsData.slice(5, 10);
         setShownBlogs(recent);
      }
   }, [blogCategory]);

   return (
      <div className="flex items-center gap-x-5 text-xl font-medium text-white bg-indigo-700 px-5 py-2 border-b border-gray-300">
         {/* popular */}
         <span
            onClick={() => setBlogCategory("popular")}
            className={`${
               blogCategory === "popular" && "text-amber-300"
            } hover:text-amber-300 transition-colors cursor-pointer`}
         >
            POPULAR
         </span>
         {/* recent */}
         <span
            onClick={() => setBlogCategory("recent")}
            className={`${
               blogCategory === "recent" && "text-amber-300"
            } hover:text-amber-300 transition-colors cursor-pointer`}
         >
            RECENT
         </span>
         {/* svg */}
         <span>
            <svg className="size-6">
               <use href="#chat-bubble"></use>
            </svg>
         </span>
      </div>
   );
}

export default BlogBoxNav;
