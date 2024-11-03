import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogsData from "../../Data/BlogsData";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import BlogBox from "../../components/BlogBox/BlogBox";
import FAQBox from "../../components/FAQBox/FAQBox";
import AdBox from "../../components/AdBox/AdBox";

function SingleBlog() {
   const { blogID } = useParams();
   const [mainBlog, setMainBlog] = useState({});

   useEffect(() => {
      let filteredBlog = BlogsData.filter((blog) => blog.id == blogID);
      setMainBlog(filteredBlog);
   }, []);

   return (
      <div className="container pt-8 grid md:grid-cols-10 lg:grid-cols-12 gap-x-5">
         {/* sidebar */}
         <div className="md:col-span-4 lg:col-span-4 xl:col-span-3 space-y-8">
            <CategoryBox />
            <BlogBox />
            <FAQBox />
            <AdBox />
         </div>
         {/* main */}
         <div className="md:col-span-6 lg:col-span-8 xl:col-span-9 mt-12 md:mt-0"></div>
      </div>
   );
}

export default SingleBlog;
