import React, { useEffect, useState } from "react";

function Pagination({ allItems, sendShownItems }) {
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(6);
   const [pages, setPages] = useState([]);
   const [isItemsPerPageMenu, setIsItemsPerPageMenu] = useState(false);

   const indexOfLastItems = currentPage * itemsPerPage;
   const indexOfFirstItems = indexOfLastItems - itemsPerPage;

   // change page function
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   useEffect(() => {
      const newCurrentItems = allItems.slice(
         indexOfFirstItems,
         indexOfLastItems
      );
      sendShownItems(newCurrentItems);

      const newPages = [];
      for (let i = 1; i <= Math.ceil(allItems.length / itemsPerPage); i++) {
         newPages.push(i);
      }
      setPages(newPages);
   }, [currentPage, itemsPerPage, allItems]);

   useEffect(() => {
      setCurrentPage(1);
   }, [allItems]);

   return (
      <div className="flex items-center justify-center gap-x-5 mt-6 mb-12">
         {/* items per page select */}
         <div
            role="button"
            onClick={() => setIsItemsPerPageMenu(!isItemsPerPageMenu)}
            className="relative text-stone-600"
         >
            <div className="flex items-center p-2 gap-x-3 border border-gray-300">
               <span>{`shown ${itemsPerPage}`}</span>
               <span className={`${isItemsPerPageMenu && "rotate-180" } transition-all duration-500`}>
                  <svg className="size-5">
                     <use href="#chevron-down"></use>
                  </svg>
               </span>
            </div>
            <ul
               className={`${
                  isItemsPerPageMenu ? "p-1 h-[116px]" : "h-0 p-0"
               } absolute top-12 left-0 w-[110px] bg-white shadow-md overflow-hidden transition-all duration-500 z-20`}
            >
               <li
                  className="text-center p-1.5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors cursor-pointer"
                  onClick={() => {
                     setIsItemsPerPageMenu(false);
                     setItemsPerPage(3);
                  }}
               >
                  shown 3
               </li>
               <li
                  className="text-center p-1.5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors cursor-pointer"
                  onClick={() => {
                     setIsItemsPerPageMenu(false);
                     setItemsPerPage(6);
                  }}
               >
                  shown 6
               </li>
               <li
                  className="text-center p-1.5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors cursor-pointer"
                  onClick={() => {
                     setIsItemsPerPageMenu(false);
                     setItemsPerPage(9);
                  }}
               >
                  shown 9
               </li>
            </ul>
         </div>
         {/* pagination */}
         <ul className="flex items-center">
            {pages.map((page) => (
               <li key={page}>
                  <button
                     onClick={() => paginate(page)}
                     className={`${
                        currentPage === page
                           ? "bg-indigo-700 text-white"
                           : "bg-white text-indigo-700"
                     } px-4 py-2 border border-gray-300 transition-colors`}
                  >
                     {page}
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Pagination;
