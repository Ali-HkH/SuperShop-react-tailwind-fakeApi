import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategorySelect() {
   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
   const [allCategories, setAllCategories] = useState([]);

   const getAllCategories = async () => {
      try {
         const response = await axios.get(
            "https://fakestoreapi.com/products/categories"
         );
         const categories = response.data;
         setAllCategories(categories);
      } catch (error) {
         console.log("something went wrong!", error);
      }
   };

   useEffect(() => {
      getAllCategories();
   }, []);

   return (
      <div
         role="button"
         onClick={() => setIsCategoryOpen(!isCategoryOpen)}
         className="relative"
      >
         <span className="hidden lg:inline-block px-10 py-3 border border-gray-300">
            Select Category
         </span>
         <span>
            <svg className=" bg-indigo-700 text-white static size-[48px] p-3 lg:absolute lg:top-4 lg:-right-3 lg:size-5 lg:p-0.5">
               <use href="#chevron-down"></use>
            </svg>
         </span>
         <ul
            className={`${
               isCategoryOpen ? "p-1 h-[188px]" : "h-0 p-0"
            } absolute top-14 left-0 w-[180px] bg-white shadow-md overflow-hidden transition-all duration-500 z-20`}
         >
            <li className="text-start p-1.5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors cursor-pointer">
               <Link to={`/Shop/all`}>ALL CATEGORIES</Link>
            </li>
            {allCategories.map((category) => (
               <li
                  className="text-start p-1.5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors cursor-pointer"
                  key={category}
               >
                  <Link to={`/Shop/${category}`}>{category.toUpperCase()}</Link>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default CategorySelect;
