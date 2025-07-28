
function ShopHeroCategory({categoryCount}) {
   return (
      <div className="py-6 px-8 border border-gray-300 bg-stone-50">
         <ul className="flex items-center gap-4 text-base md:text-sm xl:text-base flex-wrap xl:flex-nowrap child:shrink-0">
            {Object.entries(categoryCount).map(([category, count]) => (
               <li
                  key={category}
                  className="group px-3 py-1 bg-white flex items-center gap-x-3 rounded-full border border-gray-300 child:transition-colors cursor-pointer"
               >
                  <span className="font-medium text-stone-600 group-hover:text-indigo-700">
                     {category}
                  </span>
                  <span className="text-center px-2.5 py-[2px] rounded-full text-white bg-indigo-400 group-hover:bg-indigo-700">
                     {count}
                  </span>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default ShopHeroCategory;
