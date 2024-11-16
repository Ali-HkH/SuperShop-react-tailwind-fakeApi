import React, { useState } from "react";

function RatingBox() {
   const [rating, setRating] = useState(0); // مقدار رتبه انتخاب شده

   // تعداد ستاره‌ها
   const totalStars = 5;

   return (
      <div>
         <label className="font-bold text-stone-600" htmlFor="rating">Your rating *</label>
         <div id="rating" className="flex gap-x-2 mt-2">
            {Array(totalStars)
               .fill(0)
               .map((_, index) => (
                  <svg
                     key={index}
                     className={`${
                        index < rating ? "text-yellow-500" : "text-stone-600"
                     } size-6 cursor-pointer`}
                     onClick={() => setRating(index + 1)}
                  >
                     <use href="#star-fill"></use>
                  </svg>
               ))}
         </div>
      </div>
   );
}

export default RatingBox;
