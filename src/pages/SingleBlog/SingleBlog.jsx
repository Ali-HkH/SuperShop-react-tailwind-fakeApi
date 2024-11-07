import React from "react";
import { useParams } from "react-router-dom";

import BlogsData from "../../Data/BlogsData";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import BlogBox from "../../components/BlogBox/BlogBox";
import FAQBox from "../../components/FAQBox/FAQBox";
import AdBox from "../../components/AdBox/AdBox";
import Navigation from "../../components/Navigation/Navigation";
import Related from "../../components/Related/Related";
import MessageForm from "../../components/MessageForm/MessageForm";

function SingleBlog() {
   const { blogID } = useParams();
   const mainBlog = BlogsData.find((blog) => blog.id === parseInt(blogID));
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
            <div>
               {/* header */}
               <img className="w-full" src={mainBlog.img} alt="Blog-img" />
               <div className="py-4 lg:pt-7 lg:pb-5 border-b border-gray-300 mb-4 lg:mb-5">
                  <h1 className="text-2xl lg:text-4xl font-bold pb-3 lg:pb-5">
                     Lorem Khaled Ipsum is a major key
                  </h1>
                  {/* header Detail */}
                  <ul className=" flex items-center text-base lg:text-lg text-stone-500 child:px-3 child:border-r child:border-gray-300 last:child:border-none">
                     <li>
                        {mainBlog.day} {mainBlog.date}
                     </li>
                     <li>
                        By:{" "}
                        <span className="hover:text-indigo-700 cursor-pointer">
                           {mainBlog.author}
                        </span>
                     </li>
                     <li className="hover:text-indigo-700 cursor-pointer">
                        {mainBlog.comment ? "4 Comments" : "0 Comments"}
                     </li>
                  </ul>
               </div>
               {/* text content */}
               <div className="text-lg">
                  <p className="mb-12">
                     At dawn on the 13th the Carnatic entered the port of
                     Yokohama. This is an important port of call in the Pacific,
                     where all the mail-steamers, and those carrying travellers
                     between North America, China, Japan, and the Oriental
                     islands put in. It is situated in the bay of Yeddo, and at
                     but a short distance from that second capital of the
                     Japanese Empire, and the residence of the Tycoon, the
                     civil.
                  </p>
                  <p className="mb-12">
                     The Carnatic anchored at the quay near the custom-house, in
                     the midst of a crowd of ships bearing the flags of all
                     nations. Passepartout went timidly ashore on this so
                     curious territory of the Sons of the Sun. He had nothing
                     better to do than, taking chance for his guide, to wander
                     aimlessly through the streets of Yokohama. He found himself
                     at first in a thoroughly European quarter.
                  </p>
                  {/* quote */}
                  <div className="mb-12 flex items-stretch border border-gray-300 text-stone-600 min-h-32">
                     <div className=" px-2 bg-gray-300 flex items-center">
                        <svg className="size-14">
                           <use href="#quote"></use>
                        </svg>
                     </div>
                     <p className="border-l border-gray-300 p-5 text-stone-500">
                        The Carnatic anchored at the quay near the custom-house,
                        in the midst of a crowd of ships bearing the flags of
                        all nations. Dsep went timidly ashore on this so curious
                        territory of the Sons of the Sun. He had nothing better
                        to do than, taking chance for his guide, to wander
                        aimlessly through the streets of Yokohama.
                     </p>
                  </div>
                  {/* middle content with img */}
                  <div className="pt-5 mb-12 flex flex-col gap-y-8 lg:flex-row gap-x-8 items-start">
                     <img
                        src={mainBlog.subImg}
                        alt="blog-subImg"
                        className="w-full lg:w-1/2 lg:aspect-[1/1.2]"
                     />
                     <div className="w-full lg:w-1/2">
                        <p className="mb-6">
                           Here, as at Hong Kong and Calcutta, were mixed crowds
                           of all races, Americans and English, Chinamen and
                           Dutchmen, mostly merchants ready to buy or sell
                           anything. The Frenchman felt himself as much alone
                           among them as if he had dropp down in the midst of
                           Hottentots. He had, at least, one resource to call on
                           the French and English consuls at Yokohama for
                           assistance. But he shrank from telling the story of
                           his adventures, intimately connected as it was with
                           that of his master; and, before doing so, he
                           determined to exhaust all
                        </p>
                        {/* list */}
                        <div>
                           <p className="mb-3 font-medium">Unordered List</p>
                           <ul className="list-disc pl-5 text-base text-stone-500 child:pb-1.5">
                              <li className="hover:text-stone-800 cursor-pointer">
                                 The Frenchman felt himself as much
                              </li>
                              <li className="hover:text-stone-800 cursor-pointer">
                                 French and English consuls at Yokohama for
                                 assistance.
                              </li>
                              <li className="hover:text-stone-800 cursor-pointer">
                                 But he shrank from telling the story
                              </li>
                              <li className="hover:text-stone-800 cursor-pointer">
                                 European quarter, he penetrated that
                              </li>
                              <li className="hover:text-stone-800 cursor-pointer">
                                 Benten, after the goddess of the sea
                              </li>
                              <li className="hover:text-stone-800 cursor-pointer">
                                 There Passepartout beheld beautiful fir and
                                 cedar groves
                              </li>
                              <li className="hover:text-stone-800 cursor-pointer">
                                 Shaded by immense cedar-trees, holy retreats
                                 where were
                              </li>
                              <li className="hover:text-stone-800 cursor-pointer">
                                 Buddhist priests and sectaries
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <p className="mb-12">
                     The Frenchman felt himself as much alone among them as if
                     he had dropped down in the midst of Hottentots. He had, at
                     least, one resource to call on the French and English
                     consuls at Yokohama for assistance. But he shrank from
                     telling the story of his adventures, intimately connected
                     as it was with that of his master; and, before doing so, he
                     determined to exhaust all other means of aid. As chance did
                     not favour him in the European quarter, he penetrated that
                     inhabited by the native Japanese, determined, if necessary,
                     to push on to Yeddo. The Japanese quarter of Yokohama is
                     called Benten, after the goddess of the sea, who is
                     worshipped on the islands round about. There Passepartout
                     beheld beautiful fir and cedar groves, sacred gates of a
                     singular architecture, bridges half
                  </p>
                  {/* social box */}
                  <div className="text-stone-600 flex items-center justify-end mb-12">
                     <span className="pr-5">Share</span>
                     <ul className="flex items-center gap-x-1.5">
                        <li>
                           <svg className="size-10 p-1.5 hover:text-indigo-700 transition-colors cursor-pointer">
                              <use href="#facebook"></use>
                           </svg>
                        </li>
                        <li>
                           <svg className="size-10 p-1.5 hover:text-indigo-700 transition-colors cursor-pointer">
                              <use href="#twitter"></use>
                           </svg>
                        </li>
                        <li>
                           <svg className="size-10 p-1.5 hover:text-indigo-700 transition-colors cursor-pointer">
                              <use href="#linkedin"></use>
                           </svg>
                        </li>
                        <li>
                           <svg className="size-10 p-1.5 hover:text-indigo-700 transition-colors cursor-pointer">
                              <use href="#pinterest"></use>
                           </svg>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            {/* navigation */}
            <Navigation
               objectsData={BlogsData}
               mainID={mainBlog.id}
               mainRoute="Blog"
            />
            {/* related posts */}
            <Related related={relatedBlogs} />
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
