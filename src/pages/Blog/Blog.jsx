import React from "react";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import BlogBox from "../../components/BlogBox/BlogBox";
import FAQBox from "../../components/FAQBox/FAQBox";
import AdBox from "../../components/AdBox/AdBox";

function Blog() {
   return (
      <div className="container pt-8 grid md:grid-cols-10 lg:grid-cols-12 gap-x-5">
         {/* sidebar */}
         <div className="md:col-span-4 lg:col-span-4 xl:col-span-3 space-y-8">
            {/* category */}
            <CategoryBox />
            {/* blog box */}
            <BlogBox />
            {/* FAQ */}
            <FAQBox />
            {/* Ad */}
            <AdBox />
         </div>
         {/* main */}
         <div className="md:col-span-6 lg:col-span-8 xl:col-span-9 "></div>
      </div>
   );
}

export default Blog;
