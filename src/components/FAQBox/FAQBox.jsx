import React, { useState } from "react";

function FAQBox() {
   const [accordionNum, setAccordionNum] = useState(null);

   const accordionHandle = (index) => {
      setAccordionNum(accordionNum === index ? null : index);
   };

   return (
      <div className="border border-gray-300">
         <div className="text-xl font-medium px-5 py-2 border-b border-gray-300">
            FAQ
         </div>
         <ul className="px-5">
            {Array.from({ length: 5 }).map((_, index) => (
               <li
                  key={index}
                  className="py-3 border-b border-gray-300 last:border-none"
                  onClick={() => accordionHandle(index)}
               >
                  <span
                     className={`${
                        accordionNum === index && "text-indigo-700"
                     } flex items-center justify-between cursor-pointer text-lg transition-colors`}
                  >
                     Flyout Content Area {index + 1}
                     <span className="text-2xl">
                        {accordionNum === index ? "-" : "+"}
                     </span>
                  </span>
                  <p
                     className={`${
                        accordionNum === index ? "max-h-24" : "max-h-0"
                     } overflow-hidden transition-all duration-300 font-medium text-stone-500`}
                  >
                     Porem ipsum dolor sit amet, ctetur adip isicing elit, sed
                     do eiusmod tempor incid idunt ut labore et dolore magna
                  </p>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default FAQBox;
