function CurrencyTab() {
   return (
      <div className="group relative flex gap-x-1 items-center p-3 cursor-pointer hover:bg-indigo-800 transition-colors">
         USD
         <svg className="size-4 ">
            <use href="#chevron-down"></use>
         </svg>
         <ul className="absolute top-[48px] right-0 bg-white group-hover:h-[120px] group-hover:p-1.5 h-0 p-0 shadow-md overflow-hidden transition-all duration-500 child:font-normal z-20">
            <li className="flex items-center justify-center gap-x-3 py-1.5 px-5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors">
               <span>$</span>
               USD
            </li>
            <li className="flex items-center justify-center gap-x-3 py-1.5 px-5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors">
               <span>€</span>
               EUR
            </li>
            <li className="flex items-center justify-center gap-x-3 py-1.5 px-5 text-stone-600 hover:bg-indigo-700 hover:text-white transition-colors">
               <span>¥</span>
               JPY
            </li>
         </ul>
      </div>
   );
}

export default CurrencyTab;
