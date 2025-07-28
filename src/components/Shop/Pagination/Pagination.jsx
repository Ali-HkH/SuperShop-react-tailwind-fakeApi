import { useEffect, useState, useMemo } from "react";
import ItemsCountSelector from "./ItemsCountSelector";

function Pagination({
   allItems,
   setShownProducts,
   scrollToRef,
   initialItemsPerPage = 6,
}) {
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

   // total number of pages, recomputed whenever data or page size changes
   const totalPages = useMemo(
      () => Math.ceil(allItems.length / itemsPerPage),
      [allItems.length, itemsPerPage]
   );

   // build an array [1, 2, …, totalPages]
   const pages = useMemo(
      () => Array.from({ length: totalPages }, (_, i) => i + 1),
      [totalPages]
   );

   // whenever the data, page, or size changes, send the new slice upward
   useEffect(() => {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setShownProducts(allItems.slice(start, end));
   }, [allItems, currentPage, itemsPerPage, setShownProducts]);

   // reset back to page 1 whenever the underlying list changes
   useEffect(() => {
      setCurrentPage(1);
   }, [allItems]);

   const handlePageClick = (page) => {
      setCurrentPage(page);
      scrollToRef.current.scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   };

   return (
      <div className="flex items-center justify-center gap-x-5 mt-10 mb-12">
         {/* items‑per‑page selector */}
         <ItemsCountSelector
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            scrollToRef={scrollToRef}
         />

         {/* page buttons */}
         <ul className="flex items-center">
            {pages.map((p) => (
               <li key={p}>
                  <button
                     onClick={() => handlePageClick(p)}
                     className={`px-4 py-2 border border-gray-300 transition-colors ${
                        currentPage === p
                           ? "bg-indigo-700 text-white"
                           : "bg-white text-indigo-700"
                     }`}
                  >
                     {p}
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Pagination;
