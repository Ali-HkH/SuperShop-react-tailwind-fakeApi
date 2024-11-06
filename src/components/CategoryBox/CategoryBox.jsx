import React, { useEffect, useState } from "react";
import axios from "axios";

function CategoryBox() {
   const [categories, setCategories] = useState({});

   useEffect(() => {
      // get products for category count
      const fetchProducts = async () => {
         try {
            const response = await axios.get(
               "https://fakestoreapi.com/products"
            );
            const products = response.data;

            const categoryCounts = products.reduce((counts, product) => {
               counts[product.category] = (counts[product.category] || 0) + 1;
               return counts;
            }, {});
            setCategories(categoryCounts);
         } catch (error) {
            console.error("Error fetching products", error);
         }
      };
      fetchProducts();
   }, []);

   return (
      <div className="border border-gray-300">
         <h1 className="text-xl font-medium text-white bg-indigo-700 px-5 py-2 border-b border-gray-300">
            CATEGORIES
         </h1>
         <ul className="py-2 px-5">
            {Object.entries(categories).map(([category, count]) => (
               <li
                  key={category}
                  className="w-full group flex items-center justify-between py-1"
               >
                  <span className="group-hover:text-indigo-700 transition-colors cursor-pointer">
                     {category.toUpperCase()}
                  </span>
                  <span className="text-stone-500 font-medium">{`(${count})`}</span>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default CategoryBox;
