function ShopListHeading({ shopDisplay, setShopDisplay, headingRef }) {

   return (
      <div
         ref={headingRef}
         className="my-12 w-full bg-stone-50 border border-gray-300/30 py-4 px-5 flex items-center justify-between"
      >
         <h1 className="font-bold text-3xl text-indigo-700">shop</h1>
         <div className="flex items-center border border-gray-300">
            <span
               onClick={() => setShopDisplay("Grid")}
               className={`${
                  shopDisplay === "Grid" && "text-white bg-indigo-700"
               } text-stone-600 p-1 transition-colors cursor-pointer`}
            >
               <svg className="size-5">
                  <use href="#grid-fill"></use>
               </svg>
            </span>
            <span
               onClick={() => setShopDisplay("List")}
               className={`${
                  shopDisplay === "List" && "text-white bg-indigo-700"
               } text-stone-600 p-1 transition-colors cursor-pointer`}
            >
               <svg className="size-5">
                  <use href="#list-task"></use>
               </svg>
            </span>
         </div>
      </div>
   );
}

export default ShopListHeading;
