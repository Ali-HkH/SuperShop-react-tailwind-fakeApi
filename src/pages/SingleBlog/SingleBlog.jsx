import { useParams } from "react-router-dom";

import BlogsData from "../../Data/BlogsData";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import BlogBox from "../../components/Blog/BlogBox/BlogBox";
import FAQBox from "../../components/FAQBox/FAQBox";
import AdBox from "../../components/AdBox/AdBox";
import Navigation from "../../components/SingleBlog/Navigation/Navigation";
import Related from "../../components/Related/Related";
import MessageForm from "../../components/SingleBlog/MessageForm/MessageForm";
import Comments from "../../components/SingleBlog/Comments/Comments";
import BlogArticle from "../../components/SingleBlog/BlogArticle/BlogArticle";

function SingleBlog() {
   const { blogID } = useParams();
   // get main blog
   const mainBlog = BlogsData.find((blog) => blog.id === parseInt(blogID));
   // get all blogs except main blog
   const relatedBlogs = BlogsData.filter(
      (blog) => blog.id !== parseInt(blogID)
   );

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
            {/* blog article */}
            <BlogArticle mainBlog={mainBlog} />
            {/* navigation */}
            <Navigation
               objectsData={BlogsData}
               mainID={mainBlog.id}
               mainRoute="Blog"
            />
            {/* related posts */}
            <Related related={relatedBlogs} isShop={false} />
            {/* user comments */}
            {mainBlog.comment && <Comments />}
            {/* comment form */}
            <MessageForm
               title="LEAVE COMMENTS"
               placeholder="Your Comment here!"
               button="Post Comment"
            />
         </div>
      </div>
   );
}

export default SingleBlog;
