import React from "react";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import BlogBox from "../../components/BlogBox/BlogBox";
import FAQBox from "../../components/FAQBox/FAQBox";
import AdBox from "../../components/AdBox/AdBox";
import BlogsData from "../../Data/BlogsData";
import BlogCard from "../../components/BlogCard/BlogCard";

function Blog() {
   return (
      <div className="container pt-8 grid md:grid-cols-10 lg:grid-cols-12 gap-x-8">
         {/* sidebar */}
         <div className="md:col-span-4 lg:col-span-4 xl:col-span-3 space-y-8">
            <CategoryBox />
            <BlogBox />
            <FAQBox />
            <AdBox />
         </div>
         {/* main */}
         <div className="md:col-span-6 lg:col-span-8 xl:col-span-9 mt-12 md:mt-0">
            {BlogsData.map((blog) => (
               <BlogCard
                  key={blog.id}
                  id={blog.id}
                  img={blog.img}
                  author={blog.author}
                  day={blog.day}
                  date={blog.date}
                  comment={blog.comment}
               />
            ))}
         </div>
      </div>
   );
}

export default Blog;
