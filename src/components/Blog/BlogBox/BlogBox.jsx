import {  useState } from "react";
import BlogBoxCard from "../BlogBoxCard/BlogBoxCard";
import BlogBoxNav from "../BlogBoxNav/BlogBoxNav";

function BlogBox() {
   const [shownBlogs, setShownBlogs] = useState([]);

   return (
      <div className="border border-gray-300">
         {/* heading */}
         <BlogBoxNav setShownBlogs={setShownBlogs}/>
         {/* blog list */}
         <ul className="px-5">
            {shownBlogs.map((blog) => (
               <BlogBoxCard blog={blog} />
            ))}
         </ul>
      </div>
   );
}

export default BlogBox;
