import React, { useEffect, useState } from "react";
import BlogsData from "../../Data/BlogsData";
import { Link } from "react-router-dom";

function BlogBox() {
   const [blogCategory, setBlogCategory] = useState("popular");
   const [shownBlogs, setShownBlogs] = useState([]);

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
      <div className="border border-gray-300">
         {/* heading */}
         <div className="flex items-center gap-x-5 text-xl font-medium px-5 py-2 border-b border-gray-300">
            {/* popular */}
            <span
               onClick={() => setBlogCategory("popular")}
               className={`${
                  blogCategory === "popular" && "text-indigo-700"
               } hover:text-indigo-700 transition-colors cursor-pointer`}
            >
               POPULAR
            </span>
            {/* recent */}
            <span
               onClick={() => setBlogCategory("recent")}
               className={`${
                  blogCategory === "recent" && "text-indigo-700"
               } hover:text-indigo-700 transition-colors cursor-pointer`}
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
         {/* blog list */}
         <ul className="px-5">
            {shownBlogs.map((blog) => (
               <li
                  className="py-4 border-b border-b-gray-300 flex gap-x-3 last:border-none"
                  key={blog.id}
               >
                  <div className="w-2/6 md:w-1/2 aspect-auto overflow-hidden">
                     <img
                        src={blog.img}
                        alt="blog-img"
                        className="w-full hover:scale-110 transition-all"
                     />
                  </div>
                  <div className="w-4/6 md:w-1/2">
                     <Link to={``}>
                        <h1 className="text-lg font-medium mb-1.5 hover:text-indigo-700 transition-colors cursor-pointer line-clamp-2">
                           Lorem Khaled ipsum is a major key
                        </h1>
                     </Link>
                     <span className="text-sm text-stone-600">
                        {blog.day} {blog.date}
                     </span>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default BlogBox;
