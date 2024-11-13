import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CategoryBox({ sendCategory }) {
   const [categories, setCategories] = useState({});
   const [allProductsCount, setAllProductsCount] = useState(null);

   // get products and set category counts
   const setCategoryCounts = async () => {
      try {
         const response = await axios.get("https://fakestoreapi.com/products");
         const products = response.data;
         setAllProductsCount(products.length);
         const categoryCounts = products.reduce((counts, product) => {
            counts[product.category] = (counts[product.category] || 0) + 1;
            return counts;
         }, {});
         setCategories(categoryCounts);
         // send for parent
         if (sendCategory) {
            sendCategory(categoryCounts);
         }
      } catch (error) {
         console.error("Error fetching products", error);
      }
   };

   useEffect(() => {
      setCategoryCounts();
   }, []);

   return (
      <div className="border border-gray-300">
         <h1 className="text-xl font-medium text-white bg-indigo-700 px-5 py-2 border-b border-gray-300">
            CATEGORIES
         </h1>
         <ul className="py-2 px-5">
            <Link to={`/Shop/all`}>
               <li className="w-full group flex items-center justify-between py-1">
                  <span className="group-hover:text-indigo-700 transition-colors cursor-pointer">
                     All
                  </span>
                  <span className="text-stone-500 font-medium">
                     {`(${allProductsCount})`}
                  </span>
               </li>
            </Link>

            {Object.entries(categories).map(([category, count]) => (
               <Link to={`/Shop/${category}`} key={category}>
                  <li className="w-full group flex items-center justify-between py-1">
                     <span className="group-hover:text-indigo-700 transition-colors cursor-pointer">
                        {category.toUpperCase()}
                     </span>
                     <span className="text-stone-500 font-medium">{`(${count})`}</span>
                  </li>
               </Link>
            ))}
         </ul>
      </div>
   );
}

export default CategoryBox;
