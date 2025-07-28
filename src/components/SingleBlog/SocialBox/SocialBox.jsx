function SocialBox() {
   return (
      <div className="text-stone-600 flex items-center justify-end mb-12">
         <span className="pr-5">Share</span>
         <ul className="flex items-center gap-x-1.5">
            <li>
               <svg className="size-10 p-1.5 hover:text-indigo-700 transition-colors cursor-pointer">
                  <use href="#facebook"></use>
               </svg>
            </li>
            <li>
               <svg className="size-10 p-1.5 hover:text-indigo-700 transition-colors cursor-pointer">
                  <use href="#twitter"></use>
               </svg>
            </li>
            <li>
               <svg className="size-10 p-1.5 hover:text-indigo-700 transition-colors cursor-pointer">
                  <use href="#linkedin"></use>
               </svg>
            </li>
            <li>
               <svg className="size-10 p-1.5 hover:text-indigo-700 transition-colors cursor-pointer">
                  <use href="#pinterest"></use>
               </svg>
            </li>
         </ul>
      </div>
   );
}

export default SocialBox;
