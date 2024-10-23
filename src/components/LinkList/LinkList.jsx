import React from "react";
import { Link } from "react-router-dom";

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
                  <Link to={link.href}>
                     <span className="text-stone-600 font-medium hover:text-indigo-700 transition-colors">
                        {link.name}
                     </span>
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default LinkList;
