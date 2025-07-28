import React from "react";

function ProductFooterNav({ ProductFooterDisplay, setProductFooterDisplay }) {
   return (
      <div className="mb-1.5">
         <button
            onClick={() => setProductFooterDisplay("description")}
            className={`${
               ProductFooterDisplay === "description" &&
               "bg-indigo-500 text-white"
            } font-medium px-5 py-2 mr-2 border border-gray-300 hover:bg-indigo-500 hover:text-white transition-colors`}
         >
            DESCRIPTION
         </button>
         <button
            onClick={() => setProductFooterDisplay("reviews")}
            className={`${
               ProductFooterDisplay === "reviews" && "bg-indigo-500 text-white"
            } font-medium px-5 py-2 mr-2 border border-gray-300 hover:bg-indigo-500 hover:text-white transition-colors`}
         >
            REVIEWS (0)
         </button>
         <button
            onClick={() => setProductFooterDisplay("tags")}
            className={`${
               ProductFooterDisplay === "tags" && "bg-indigo-500 text-white"
            } font-medium px-5 py-2 mr-2 border border-gray-300 hover:bg-indigo-500 hover:text-white transition-colors`}
         >
            TAGS
         </button>
      </div>
   );
}

export default ProductFooterNav;
