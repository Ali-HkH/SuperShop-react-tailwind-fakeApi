import React from "react";

function LinkList({ title, links }) {
   return (
      <div className="px-4 mb-4">
         <h2 className="mb-4 text-lg font-semibold">{title}</h2>
         <ul>
            {links.map((link) => (
               <li className="mb-3 flex items-center gap-x-2">
                  <svg className="size-4 text-indigo-700">
                     <use href="#stop-circle"></use>
                  </svg>
                  <a
                     href={link.href}
                     className="text-stone-600 font-medium hover:text-indigo-700 transition-colors"
                  >
                     {link.name}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default LinkList;
