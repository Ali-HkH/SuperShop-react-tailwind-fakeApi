import { useState } from "react";

function PriceBox({ onFilterClick }) {
   const [tempPriceValue, setTempPriceValue] = useState(1000);

   return (
      <div className="border border-gray-300">
         <h1
            className="text-xl font-medium text-white bg-indigo-700
                     px-5 py-2 border-b border-gray-300"
         >
            PRICE
         </h1>

         <div className="px-5 py-4 text-center">
            <div className="flex items-center gap-x-3">
               <input
                  type="range"
                  min={25}
                  max={1000}
                  step={5}
                  value={tempPriceValue}
                  onChange={(e) => setTempPriceValue(Number(e.target.value))}
                  className="flex-1 h-2"
               />
               <span
                  className="inline-block text-stone-600 font-medium
                           px-2 py-1 border border-gray-300 rounded-xl"
               >
                  {`<= $${tempPriceValue}`}
               </span>
            </div>

            <button
               onClick={() => onFilterClick(tempPriceValue)}
               className="mt-3 px-4 py-2 bg-indigo-500 rounded-lg
                     font-medium text-white hover:bg-indigo-700
                     transition-colors"
            >
               Filter
            </button>
         </div>
      </div>
   );
}
export default PriceBox;
