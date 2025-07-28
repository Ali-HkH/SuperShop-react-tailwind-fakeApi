import { Link } from "react-router-dom";

function BlogBoxCard({blog}) {
   return (
      <li
         className="py-4 border-b border-b-gray-300 flex gap-x-3 last:border-none"
         key={blog.id}
      >
         {/* image */}
         <div className="w-2/6 md:w-1/2 aspect-auto overflow-hidden">
            <img
               src={blog.img}
               alt="blog-img"
               className="w-full hover:scale-110 transition-all"
            />
         </div>
         {/* content */}
         <div className="w-4/6 md:w-1/2">
            {/* link */}
            <Link to={`/Blog/${blog.id}`}>
               <h1 className="text-lg font-medium mb-1.5 hover:text-indigo-700 transition-colors cursor-pointer line-clamp-2">
                  Lorem Khaled ipsum is a major key
               </h1>
            </Link>
            <span className="text-sm text-stone-600">
               {blog.day} {blog.date}
            </span>
         </div>
      </li>
   );
}

export default BlogBoxCard;
