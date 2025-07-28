import { useState } from "react";
import ProductFooterNav from "../ProductFooterNav/ProductFooterNav";
import RatingBox from "../RatingBox/RatingBox"

function ProductFooter({title, description}) {
   const [ProductFooterDisplay, setProductFooterDisplay] =
      useState("description");

   return (
      <div>
         {/* nav */}
         <ProductFooterNav
            ProductFooterDisplay={ProductFooterDisplay}
            setProductFooterDisplay={setProductFooterDisplay}
         />
         {/* content */}
         <div className="p-5 border border-gray-300">
            {/* description */}
            {ProductFooterDisplay === "description" && (
               <div>
                  <h1 className="text-2xl font-medium mb-4 uppercase">
                     {ProductFooterDisplay}
                  </h1>
                  <p className="text-stone-600 font-medium mb-2">
                     {description}
                  </p>
                  <p className="text-stone-600 font-medium">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Duis tincidunt condimentum felis, et tempor neque rhoncus
                     ac. Proin elementum, felis id placerat dapibus, purus ipsum
                     lobortis tellus, ut vehicula nisl metus eget arcu.
                  </p>
               </div>
            )}
            {/* reviews */}
            {ProductFooterDisplay === "reviews" && (
               <div>
                  <h1 className="text-2xl font-bold mb-4 uppercase">
                     {ProductFooterDisplay}
                  </h1>
                  <h3 className="text-stone-600 mb-2 text-lg">
                     There are no reviews yet.
                  </h3>
                  <h1 className="pl-6 text-stone-600 text-2xl font-medium mb-4 line-clamp-2">
                     Be the first to review “{title}”
                  </h1>
                  <h3 className="text-stone-600 mb-1.5 text-lg">
                     Your email address will not be published. Required fields
                     are marked *
                  </h3>
                  <form>
                     {/* checkBox save email */}
                     <div className="mb-5">
                        <input id="saveEmail" type="checkbox" />
                        <label
                           htmlFor="saveEmail"
                           className="text-stone-600 mb-2.5 text-lg font-bold pl-2"
                        >
                           Save my name, email, and website in this browser for
                           the next time I comment.
                        </label>
                     </div>
                     {/* input name & email */}
                     <div className="flex items-center flex-wrap gap-x-10 gap-y-5 mb-5">
                        {/* name input */}
                        <div>
                           <label
                              className="font-bold text-stone-600"
                              htmlFor="name"
                           >
                              Name *
                           </label>
                           <input
                              className="py-1 px-3 ml-2 text-lg font-medium text-stone-600 focus:outline-none focus:border-indigo-600 border border-gray-300 transition-all"
                              id="name"
                              type="text"
                           />
                        </div>
                        {/* email input */}
                        <div>
                           <label
                              className="font-bold text-stone-600"
                              htmlFor="email"
                           >
                              Email *
                           </label>
                           <input
                              className="py-1 px-3 ml-2 text-lg font-medium text-stone-600 focus:outline-none focus:border-indigo-600 border border-gray-300 transition-all"
                              id="email"
                              type="email"
                           />
                        </div>
                     </div>
                     <RatingBox />
                     {/* review box */}
                     <div className="mt-5">
                        <label
                           className="font-bold text-stone-600"
                           htmlFor="review"
                        >
                           Your review *
                        </label>
                        <textarea
                           id="review"
                           className="w-full min-h-40 mb-8 mt-2 py-3 px-5 text-lg font-medium   focus:outline-none focus:border-indigo-600 border border-gray-300 transition-all"
                           placeholder=""
                        ></textarea>
                        <button className="bg-indigo-700 text-white text-lg px-6 py-1.5 hover:bg-indigo-600 transition-colors">
                           Submit
                        </button>
                     </div>
                  </form>
               </div>
            )}
            {/* tags */}
            {ProductFooterDisplay === "tags" && (
               <div>
                  <h1 className="text-2xl font-bold mb-4 uppercase">
                     {ProductFooterDisplay}
                  </h1>
                  <ul className="list-disc pl-5 child:text-lg child:font-medium child:text-stone-600 child:mb-1">
                     <li className="hover:text-indigo-500 cursor-default">
                        Fast & Free Shipping
                     </li>
                     <li className="hover:text-indigo-500 cursor-default">
                        Next-Day Delivery Available!
                     </li>
                     <li className="hover:text-indigo-500 cursor-default">
                        Satisfaction Guaranteed
                     </li>
                     <li className="hover:text-indigo-500 cursor-default">
                        {" "}
                        Hassle-Free Returns
                     </li>
                  </ul>
               </div>
            )}
         </div>
      </div>
   );
}

export default ProductFooter;
